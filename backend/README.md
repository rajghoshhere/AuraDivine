# Aura Divine Backend Setup Guide

Backend server for handling Razorpay payment integration and booking confirmations.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Razorpay account (sign up at https://razorpay.com)
- Gmail or email service for sending confirmations

---

## 1. Installation

```bash
cd backend
npm install
```

---

## 2. Environment Configuration

### Step 1: Create `.env` file
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### Step 2: Get Razorpay Credentials

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Go to Settings → API Keys
3. Copy your **Key ID** and **Key Secret**
4. Add them to `.env`:
```
RAZORPAY_KEY_ID=rzp_live_your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### Step 3: Configure Email Service

#### Option A: Gmail (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Add to `.env`:
```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your_16_digit_app_password
BANANI_EMAIL=banani@auradivine.in
```

#### Option B: Other Email Services
Update `.env` with your email provider:
```
EMAIL_SERVICE=sendgrid  # or mailgun, etc.
EMAIL_USER=your_email
EMAIL_PASSWORD=your_api_key
```

### Step 4: Update Frontend URL
If deploying to a server, update:
```
FRONTEND_URL=https://your-domain.com
```

---

## 3. Running the Server

### Development (with auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

Server will run on `http://localhost:5000` (or your specified PORT)

---

## 4. API Endpoints

### Verify Payment
**POST** `/api/verify-payment`

Handles payment verification and booking confirmation.

**Request Body:**
```json
{
  "paymentId": "pay_xxxxx",
  "orderId": "order_xxxxx",
  "signature": "signature_xxxxx",
  "package": "First Light",
  "amount": 1890,
  "email": "client@example.com",
  "phone": "9999999999"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment verified and booking confirmed",
  "bookingId": "BOOKING_1234567890"
}
```

### Get All Bookings (Admin)
**GET** `/api/bookings`

Returns all confirmed bookings (add authentication in production).

### Health Check
**GET** `/health`

Returns server status.

---

## 5. Frontend Integration

The frontend already has Razorpay script loaded and payment handlers configured.

**Update this in `frontend/index.html` (line ~1150):**
```javascript
key: 'rzp_live_YOUR_KEY_ID', // Replace with your Key ID
```

---

## 6. Testing

### Test Razorpay Integration
1. Use **Razorpay Test Mode** credentials
2. Use test card: `4111 1111 1111 1111`
3. Any future expiry date and any CVV

### Test Email
1. Verify sender email is configured correctly
2. Check spam folder if email doesn't arrive
3. Enable "Less secure app access" if using Gmail without App Password

---

## 7. Deployment

### Using Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Using Heroku
```bash
heroku create aura-divine-api
git push heroku main
heroku config:set RAZORPAY_KEY_ID=your_key
heroku config:set RAZORPAY_KEY_SECRET=your_secret
```

### Using AWS/GCP/Azure
Create environment variables with the same names as in `.env`.

---

## 8. Important Security Notes

⚠️ **NEVER commit `.env` to Git** - It contains sensitive credentials

✅ **DO:**
- Use strong, unique API keys
- Enable 2FA on Razorpay account
- Use HTTPS in production
- Validate all payment signatures
- Add request rate limiting
- Implement authentication for admin endpoints

---

## 9. Troubleshooting

### Payment verification fails
- Check Razorpay credentials in `.env`
- Verify signature generation logic
- Ensure `RAZORPAY_KEY_SECRET` is correct

### Emails not sending
- Check `EMAIL_USER` and `EMAIL_PASSWORD`
- Verify email service configuration
- Check spam/junk folder
- For Gmail: Use App Password, not main password

### CORS errors
- Update `FRONTEND_URL` in `.env` to match frontend domain
- Ensure frontend is accessible from backend

### Server won't start
- Check if port 5000 is already in use
- Try: `lsof -i :5000` (on Mac/Linux) or `netstat -ano | findstr :5000` (Windows)
- Change PORT in `.env` to different port

---

## 10. Database Integration (Future)

To store bookings permanently, integrate MongoDB:

```bash
npm install mongoose
```

Update `server.js` to connect to MongoDB and save bookings to database instead of in-memory array.

---

## 11. Support

For Razorpay issues: https://razorpay.com/support
For Node.js/Express: https://expressjs.com

---

**Last Updated:** July 5, 2026  
**Backend Version:** 1.0.0
