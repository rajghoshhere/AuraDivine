require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

const useTestMode = process.env.USE_RAZORPAY_TEST_MODE === 'true';
const razorpayKeyId = useTestMode
  ? (process.env.RAZORPAY_TEST_KEY_ID || process.env.RAZORPAY_KEY_ID)
  : process.env.RAZORPAY_KEY_ID;

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: razorpayKeyId,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Email configuration
const mailTransporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const BOOKINGS_TABLE = 'bookings';

// ══ PAYMENT CONFIG ══
app.get('/api/config', (req, res) => {
  res.json({
    success: true,
    razorpayKeyId: razorpayKeyId || '',
    useTestMode,
    mode: useTestMode ? 'test' : 'live'
  });
});

// ══ CREATE ORDER ══
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, packageName, email, phone } = req.body;

    const options = {
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1, // Auto-capture payment
      notes: {
        package_name: packageName,
        email: email,
        phone: phone
      }
    };

    const order = await razorpay.orders.create(options);
    
    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message
    });
  }
});

// ══ VERIFY PAYMENT ══
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { paymentId, orderId, signature, package: packageName, amount, email, phone } = req.body;

    // Verify signature
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(orderId + '|' + paymentId);
    const generated_signature = hmac.digest('hex');

    if (generated_signature !== signature) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment signature'
      });
    }

    // Fetch payment details from Razorpay to confirm
    const payment = await razorpay.payments.fetch(paymentId);

    if (payment.status === 'captured' || payment.status === 'authorized') {
      // Save booking
      const booking = {
        id: `BOOKING_${Date.now()}`,
        paymentId: paymentId,
        orderId: orderId,
        packageName: packageName,
        amount: amount,
        email: email,
        phone: phone,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };

      const { error: insertError } = await supabase.from(BOOKINGS_TABLE).insert([booking]);
      if (insertError) {
        console.error('Booking insert error:', insertError);
      }

      // Send confirmation email
      await sendConfirmationEmail(email, packageName, amount, booking.id);

      // Send notification to Banani
      await sendBookingNotification(email, phone, packageName, amount);

      return res.json({
        success: true,
        message: 'Payment verified and booking confirmed',
        bookingId: booking.id
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Payment not captured'
      });
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message
    });
  }
});

// ══ SEND CONFIRMATION EMAIL ══
async function sendConfirmationEmail(email, packageName, amount, bookingId) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `✦ Your Aura Divine Healing Session Booking Confirmed`,
      html: `
        <div style="font-family: 'Gill Sans', sans-serif; color: #4A4A4A; line-height: 1.7;">
          <h2 style="color: #3D1F5C; margin-bottom: 20px;">Your Healing Journey Begins</h2>
          
          <p>Dear Friend,</p>
          <p>Thank you for booking your session with <strong>Aura Divine</strong>. Your payment has been received and confirmed.</p>
          
          <div style="background: #F7CAC9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3D1F5C; margin-top: 0;">Booking Details</h3>
            <p><strong>Package:</strong> ${packageName}</p>
            <p><strong>Amount Paid:</strong> ₹${amount}</p>
            <p><strong>Booking ID:</strong> ${bookingId}</p>
          </div>

          <h3 style="color: #3D1F5C;">What's Next?</h3>
          <ul style="line-height: 2;">
            <li>Banani will reach out within 24 hours to schedule your session</li>
            <li>You'll receive session link & pre-session intake form via email</li>
            <li>Sessions are conducted via Zoom (link shared 24 hours before)</li>
            <li>Keep a quiet, comfortable space for your healing time</li>
          </ul>

          <h3 style="color: #3D1F5C;">Questions?</h3>
          <p>Email: <strong>banani.ghosh.here@gmail.com</strong></p>
          <p>WhatsApp: <strong>+91 6291 728 230</strong></p>

          <p style="margin-top: 40px; font-size: 14px; color: #6B6B7B;">
            This is a confirmation of your booking. Please keep this email for your records.
          </p>

          <p style="color: #D4AF37; font-weight: bold;">✦ Looking forward to holding space for your healing ✦</p>
        </div>
      `
    };

    await mailTransporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${email}`);
  } catch (error) {
    console.error('Email sending error:', error);
  }
}

// ══ SEND BOOKING NOTIFICATION TO BANANI ══
async function sendBookingNotification(email, phone, packageName, amount) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BANANI_EMAIL || 'banani@auradivine.in',
      subject: `📌 New Booking Received - ${packageName}`,
      html: `
        <div style="font-family: 'Gill Sans', sans-serif; color: #4A4A4A;">
          <h2 style="color: #3D1F5C;">New Healing Session Booking</h2>
          
          <div style="background: #E6E6FA; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Package:</strong> ${packageName}</p>
            <p><strong>Amount:</strong> ₹${amount}</p>
            <p><strong>Client Email:</strong> ${email}</p>
            <p><strong>Client Phone:</strong> ${phone}</p>
            <p><strong>Booked At:</strong> ${new Date().toLocaleString('en-IN')}</p>
          </div>

          <p>Please reach out to the client within 24 hours to confirm the session date and time.</p>
        </div>
      `
    };

    await mailTransporter.sendMail(mailOptions);
    console.log(`Booking notification sent to Banani`);
  } catch (error) {
    console.error('Notification email error:', error);
  }
}

// ══ GET ALL BOOKINGS (for admin dashboard - protect with auth) ══
app.get('/api/bookings', async (req, res) => {
  // TODO: Add authentication middleware here
  const { data, error } = await supabase
    .from(BOOKINGS_TABLE)
    .select('*')
    .order('createdAt', { ascending: false });

  if (error) {
    console.error('Bookings fetch error:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch bookings', error: error.message });
  }

  res.json({
    success: true,
    bookings: data,
    count: data.length
  });
});

// ══ HEALTH CHECK ══
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// ══ ERROR HANDLING ══
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Server error',
    error: err.message
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✦ Aura Divine backend running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
