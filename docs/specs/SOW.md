# STATEMENT OF WORK
## Reiki and Angelic Healing Website Development & Launch

**SOW Version:** 1.1
**Date:** December 24, 2025
**Project Code:** RW-2025-001

---

## DOCUMENT CONTROL

| **Prepared By** | Vedansh Kumar |
|----------------|------------------------|
| **Prepared For** | Banani Ghosh - Aura Divine |
| **Client Email** | banani.ghosh.here@gmail.com |
| **Effective Date** | [Insert Date] |
| **Project Duration** | 4 weeks (Development) + 30 days Post-Development Support |
| **Development Completion** | Week 4 |
| **Target Launch** | TBD (at client's discretion after content ready) |

---

## 1. EXECUTIVE SUMMARY

### 1.1 Business Context
This project establishes a comprehensive online presence for Aura Divine, a Reiki and Angelic Healing practice, enabling automated booking, payment processing, and virtual session delivery. The website will serve as the primary business platform for client acquisition, service delivery, and revenue generation through both in-person and remote healing sessions.

### 1.2 Business Objectives
- Enable 24/7 automated booking and payment collection without manual intervention
- Facilitate seamless virtual healing session delivery through integrated Zoom functionality
- Establish professional online brand presence aligned with spiritual healing aesthetics
- Reduce administrative overhead through automated client notifications and calendar management
- Generate revenue from launch date through integrated payment processing
- Provide client portal for booking history and account management

### 1.3 Project Scope Summary
Development and launch of a Wix Studio website with integrated booking system, payment processing, Zoom automation, client members area, blog, and automated notification workflows. The website will be built using pre-approved Figma designs and hosted on Wix Standard Plan (₹471/month including GST).

### 1.4 Key Success Criteria
- Website development complete and ready to launch within 4 weeks
- Launch timing flexible and controlled by client (after content is ready)
- Zero manual intervention required for booking confirmation and Zoom link generation
- 100% mobile responsiveness across all pages
- Payment gateway processing UPI, cards, and netbanking transactions
- Client receives automated confirmations within 2 minutes of booking

### 1.5 Key Stakeholders

| **Role** | **Name** | **Responsibility** |
|----------|----------|-------------------|
| Client/Business Owner | Banani Ghosh (Aura Divine) | Final approval, content provision, UAT |
| Developer | Vedansh Kumar | Website development, integration, testing |
| End Users | Healing Clients | Book sessions, make payments, attend sessions |

---

## 2. PROJECT SCOPE & BOUNDARIES

### 2.1 IN-SCOPE: Feature-Based Deliverables

This section defines all features that WILL be delivered as part of this project.

#### **FEATURE GROUP 1: Website Foundation & Design**

##### **Feature 1.1: Wix Studio Platform Setup**
**Description:** Establishment of Wix Studio account, domain configuration, and hosting environment.

**Technical Specifications:**
- Wix Studio Standard Plan subscription (₹399/month + 18% GST = ₹471/month)
- Custom domain connection and DNS configuration
- SSL certificate activation (included in Wix Standard Plan)
- Development environment on Wix Free Tier during development
- Production deployment to Standard Plan when client decides to launch (timing TBD)

**Acceptance Criteria:**
- Wix Studio account created and accessible
- Custom domain connected and resolving correctly (verified via DNS lookup)
- SSL certificate active (HTTPS enabled, verified with SSL checker)
- Development environment functional with all editing permissions
- No downtime during free-tier to paid-tier migration

**Dependencies:**
- Client provides chosen domain name within 3 business days of project start
- Client provides access to domain registrar for DNS configuration

---

##### **Feature 1.2: Figma Design Import & Implementation**
**Description:** Import of pre-approved Figma design files into Wix Studio and pixel-perfect implementation across all pages.

**Technical Specifications:**
- Core pages: Home, About, Services, Booking, Contact, Blog
- Figma-to-Wix conversion using Wix Studio import functionality
- Spiritual aesthetic maintained (colors, typography, imagery per Figma specifications)
- Custom fonts embedded if not available in Wix library
- Image optimization for web performance (<500KB per image, WebP format where supported)

**Acceptance Criteria:**
- All pages visually match approved Figma designs with <5% deviation (measured via pixel overlay comparison)
- All images display correctly with no pixelation or aspect ratio distortion
- Typography matches Figma specifications exactly (font family, size, weight, line height)
- Color scheme matches Figma hex codes exactly (verified with color picker tool)
- Page load time <3 seconds on 4G connection (verified with Google PageSpeed Insights)
- Blog page functional with basic post layout
- Client provides written approval of design implementation via email

**Dependencies:**
- Client provides Figma design files with full editing access within 5 business days of project start
- Client provides all final content (text, images, logos) in editable format within 10 business days
- Client provides high-resolution images (minimum 1920px width for hero images)

---

##### **Feature 1.3: Responsive Design Implementation**
**Description:** Ensure all pages are fully responsive and functional across desktop, tablet, and mobile devices.

**Technical Specifications:**
- Breakpoints: Desktop (1920px, 1440px, 1024px), Tablet (768px), Mobile (375px, 414px)
- Touch-friendly interface elements (minimum 44px touch targets per Apple guidelines)
- Mobile-optimized navigation (hamburger menu, tap-friendly buttons)
- Viewport meta tag configured for proper mobile scaling
- Cross-browser compatibility: Chrome, Safari, Firefox, Edge (latest 2 versions)

**Acceptance Criteria:**
- All pages render correctly on devices tested at minimum: iPhone 14, iPad Air, MacBook Pro, Samsung Galaxy S23
- No horizontal scrolling on any device (verified manually on each breakpoint)
- All interactive elements (buttons, forms, navigation) functional via touch on mobile/tablet
- Text remains readable without zooming (minimum 16px font size on mobile)
- Images resize proportionally without distortion across all breakpoints
- Mobile PageSpeed Insights score ≥80 (Performance)
- Client completes mobile UAT checklist with zero P1/P2 defects

**Dependencies:**
- None (standard web development requirement)

---

#### **FEATURE GROUP 2: Booking System**

##### **Feature 2.1: Wix Bookings Integration**
**Description:** Configuration of Wix Bookings app for automated session scheduling and management.

**Technical Specifications:**
- Wix Bookings app installed and configured
- Service categories: Individual healing sessions, specialized healing services, multi-session packages
- Calendar management: Availability slots, buffer times, session durations
- Booking window: Allow bookings up to 90 days in advance, minimum 4 hours notice for same-day bookings
- Automated booking confirmation emails sent within 2 minutes
- Client dashboard access for booking management and calendar overview

**Acceptance Criteria:**
- Booking system accessible on dedicated "Booking" page
- Service types configured:
  - Reiki Healing Session
  - Angelic Healing Session
  - Money Healing
  - Relationship Healing
  - Energy Blockage Clearing
  - Protection Healing
  - Distance/Remote Healing
  - Multi-session Packages
- Calendar displays practitioner's available time slots accurately (no double-bookings possible)
- Clients cannot book within blocked times or outside business hours
- Booking confirmation email received within 2 minutes (verified via test booking)
- Practitioner receives booking notification within 2 minutes
- Minimum 4-hour advance booking enforced by system (same-day bookings outside this window rejected)
- 15-minute buffer time automatically applied between sessions
- Client can view, reschedule, and cancel bookings via client account (subject to cancellation policy)

**Dependencies:**
- Client provides service descriptions, durations, and pricing within 7 business days
- Client provides weekly availability schedule (days, hours, time zone)
- Client defines cancellation policy (e.g., "24-hour notice required")

---

##### **Feature 2.2: Calendar Synchronization**
**Description:** Two-way synchronization between Wix Bookings calendar and external calendar (Google Calendar or Outlook).

**Technical Specifications:**
- Two-way sync: Wix bookings appear in external calendar, external events block availability in Wix
- Sync frequency: Real-time or maximum 5-minute delay
- Sync scope: Only appointment times and basic details (no sensitive client data exposed in external calendar)
- Calendar platform: Google Calendar (primary) or Microsoft Outlook (alternative)

**Acceptance Criteria:**
- Test booking in Wix appears in connected external calendar within 5 minutes
- Event created in external calendar blocks corresponding time slot in Wix Bookings within 5 minutes
- Booking cancellation in Wix removes event from external calendar within 5 minutes
- No duplicate bookings possible when external calendar has conflicting events
- Client confirms sync working correctly via test bookings

**Dependencies:**
- Client provides access to Google Calendar or Microsoft Outlook account
- Client authorizes Wix Bookings calendar integration permissions

---

#### **FEATURE GROUP 3: Payment Processing**

##### **Feature 3.1: Payment Gateway Integration**
**Description:** Integration of payment gateway supporting Indian payment methods (UPI, cards, netbanking).

**Technical Specifications:**
- Primary option: Wix Payments (if available in India) OR PayU India integration
- Supported payment methods: UPI, Credit/Debit Cards (Visa, Mastercard, RuPay), Netbanking
- Transaction fee: 2.9% + ₹25 per transaction (documented in operational costs)
- Payment collection: 100% prepayment required at time of booking
- Currency: Indian Rupees (INR)
- PCI DSS compliant payment processing (no card data stored on website)
- Secure payment page (HTTPS, SSL encrypted)

**Acceptance Criteria:**
- Payment gateway account created and verified (KYC completed)
- Test transactions successful for all payment methods:
  - UPI payment (verified with test transaction)
  - Debit card payment (verified with test transaction)
  - Credit card payment (verified with test transaction)
  - Netbanking payment (verified with test transaction)
- Payment confirmation received within 2 minutes of successful transaction
- Failed payment triggers user-friendly error message with retry option
- Booking NOT confirmed until payment successfully processed
- Client can access transaction history and reports in payment gateway dashboard
- Funds settle to client's bank account within gateway's standard timeframe (typically T+2 to T+5 days)

**Dependencies:**
- Client provides business registration documents for payment gateway KYC
- Client provides bank account details for settlement (account holder name, account number, IFSC code, bank name)
- Client completes payment gateway onboarding within 10 business days
- Payment gateway approval (typically 3-7 business days after document submission)

---

##### **Feature 3.2: Payment Confirmation & Receipt Generation**
**Description:** Automated generation and delivery of payment receipts to clients.

**Technical Specifications:**
- Automated receipt email sent within 2 minutes of successful payment
- Receipt includes: Transaction ID, Date/Time, Service booked, Amount paid, Payment method, GST breakdown (if applicable)
- Receipt format: PDF attachment + HTML email
- Receipt accessible in client account dashboard for reprint

**Acceptance Criteria:**
- Client receives receipt email within 2 minutes of payment (verified via test transaction)
- Receipt contains all required fields (Transaction ID, amount, service, date/time, payment method)
- Receipt PDF downloads correctly and displays all information
- Receipt accessible in client's account under "Past Bookings" or "Transactions"
- GST details included if client business is GST-registered (configurable)

**Dependencies:**
- Client provides business details for receipt (Business name, address, GST number if applicable)

---

#### **FEATURE GROUP 4: Virtual Session Automation**

##### **Feature 4.1: Zoom Integration & Automatic Link Generation**
**Description:** Automated creation and delivery of unique Zoom meeting links for each virtual booking.

**Technical Specifications:**
- Zoom integration via Wix Bookings Zoom connector or Zapier/Make automation
- Unique Zoom meeting link generated for each booking
- Zoom link automatically included in booking confirmation email
- Zoom meeting settings: Waiting room enabled, password protection enabled, video on by default
- Meeting duration: Matches booked session duration + 15-minute buffer
- Meeting scheduled in Zoom calendar automatically

**Acceptance Criteria:**
- Unique Zoom link generated for each booking (no link reused across different bookings)
- Zoom link delivered in booking confirmation email within 2 minutes
- Zoom link functional (tested by joining meeting via link)
- Zoom meeting starts automatically at scheduled time (no manual host intervention required if auto-start enabled)
- Zoom meeting settings configured: Waiting room ON, Password ON, Participant video ON by default
- Meeting duration matches session length + 15 minutes (e.g., 60-min session = 75-min Zoom meeting)
- Practitioner receives separate host link with full meeting controls

**Dependencies:**
- Client provides Zoom account (Zoom Pro plan or higher required for meetings >40 minutes)
- Client authorizes Zoom integration with Wix Bookings
- If using automation platform (Zapier/Make): Account setup within 5 business days

---

#### **FEATURE GROUP 5: Client Communication & Notifications**

##### **Feature 5.1: Email Notifications**
**Description:** Automated email notifications for booking lifecycle events.

**Technical Specifications:**
- Notification triggers:
  - Booking confirmation (immediate, within 2 minutes)
  - Booking reminder (24 hours before session)
  - Booking rescheduled (immediate)
  - Booking cancelled (immediate)
- Email sent from: Custom domain email (e.g., hello@reikiwebsite.com) or Wix default
- Email template: Branded design matching website aesthetic
- Email content: Booking details, Zoom link (if virtual), date/time, preparation instructions (customizable)

**Acceptance Criteria:**
- Booking confirmation email received within 2 minutes (verified via test booking)
- Reminder email received 24 hours before session (verified via test booking scheduled 24+ hours ahead)
- Reschedule/cancellation emails received within 2 minutes of action (verified via test)
- All emails render correctly in major email clients (Gmail, Outlook, Apple Mail)
- Email includes all critical information: Date, Time, Service, Zoom link (if applicable), Practitioner contact info
- Email branding matches website (logo, colors, fonts)
- Unsubscribe link included in marketing emails (compliance with email regulations)

**Dependencies:**
- Client provides email content templates (confirmation, reminder, cancellation messages)
- Client provides custom domain email address or approves Wix default
- Client provides any special preparation instructions for clients to include in emails

---

##### **Feature 5.2: WhatsApp Reminder Notifications (Optional Enhancement)**
**Description:** WhatsApp reminders sent to clients before scheduled sessions.

**Technical Specifications:**
- **Phase 1 (Launch):** Free manual WhatsApp messaging using WhatsApp Business app
  - Practitioner manually sends reminders via WhatsApp Business
  - Message templates provided for consistency
  - No additional cost
- **Phase 2 (Optional Future Enhancement):** Automated WhatsApp integration via Wix apps
  - Notification method: WhatsApp integration via Wix app marketplace (e.g., Wati, Kommo)
  - Reminder sent: 2 hours before scheduled session
  - Message content: Session reminder with date, time, and Zoom link
  - Requires separate subscription to WhatsApp automation app (₹500-2000/month depending on provider)

**Acceptance Criteria (Phase 1 - Manual):**
- WhatsApp Business app installed on practitioner's phone
- Message templates created for booking confirmations and reminders
- Documentation provided on manual messaging workflow
- Client trained on sending WhatsApp messages manually

**Future Enhancement Criteria (Phase 2 - If Implemented):**
- Automated WhatsApp reminder received 2 hours before session
- Message contains: Service name, Date, Time, Zoom link
- Message delivered to Indian mobile numbers (+91 format)
- Client can opt-out of WhatsApp reminders via account settings

**Dependencies:**
- Client provides mobile number in +91 format for testing
- Client downloads WhatsApp Business app for manual messaging
- For automated version: Client subscribes to WhatsApp automation app and completes setup

---

##### **Feature 5.3: Client Members Area**
**Description:** Client login portal integrated with Wix Bookings for viewing booking history and managing account.

**Technical Specifications:**
- Wix Members Area integrated with Wix Bookings (included free with Wix Bookings)
- Client registration: Automatic account creation upon first booking
- Login functionality: Email and password authentication
- Client dashboard features:
  - View upcoming bookings
  - View past booking history
  - Access Zoom links for scheduled sessions
  - Reschedule or cancel bookings (subject to cancellation policy)
  - Update profile information (name, email, phone)
  - View payment receipts

**Acceptance Criteria:**
- Clients automatically receive account credentials after first booking
- Login page functional with email/password authentication
- Client dashboard displays all upcoming and past bookings
- Clients can successfully reschedule bookings from dashboard
- Clients can cancel bookings with cancellation policy enforced
- Zoom links accessible from booking details in dashboard
- Payment receipts downloadable from booking history
- Mobile-responsive client portal

**Dependencies:**
- Wix Bookings configured (Feature 2.1)
- Client provides cancellation policy terms

---

### 2.2 OUT OF SCOPE

The following items are explicitly **NOT included** in this SOW and will require separate agreements if needed:

#### **2.2.1 Content & Media**
- Professional copywriting or content creation services (client provides all text)
- Professional photography or videography services (client provides all images/videos)
- Logo design or branding services (client provides final logo and brand assets)
- Figma design creation or revisions (client provides final approved Figma files)
- Ongoing content updates after launch (blog posts, new pages, content edits)

#### **2.2.2 Advanced Features**
- E-commerce store for physical products (only service bookings included)
- Training courses or certification programs (Reiki Level 1/2/Master courses NOT included)
- Group healing circles or community events (individual sessions and packages only)
- Course-related payment structures or learning management systems
- Client testimonials/review system with moderation
- Live chat or chatbot functionality
- Multi-language support (English only)
- Client community forum or social features
- Mobile app development (website only, mobile-responsive)
- Advanced analytics dashboards beyond Wix Analytics
- CRM integration (e.g., HubSpot, Salesforce)
- Email marketing campaigns or automation beyond booking notifications
- Fully automated WhatsApp reminders (manual WhatsApp messaging included; automation is optional enhancement)

#### **2.2.3 Technical Customizations**
- Custom Wix app development or Velo coding beyond standard integrations
- Third-party API integrations not explicitly listed (only Zoom and payment gateway)
- Custom domain email hosting beyond connection (client must set up via domain provider or third-party service like Google Workspace)
- Server-side scripting or backend development outside Wix platform
- Migration from another platform to Wix (this is a new build)
- SEO optimization services (basic on-page SEO only - meta titles/descriptions)

#### **2.2.4 Training & Support**
- One-on-one training sessions for Wix backend management (documentation provided only)
- Ongoing website maintenance after 30-day warranty period (requires separate maintenance contract)
- 24/7 technical support (business hours support only during warranty)
- Client's internal IT support or training

#### **2.2.5 Marketing & Growth**
- SEO services (keyword research, link building, content strategy)
- Social media integration beyond embed widgets (no social media management)
- Google Ads, Facebook Ads, or any paid advertising campaigns
- Email marketing campaign creation or management
- Analytics reporting or performance optimization consulting

#### **2.2.6 Platform Limitations**
- Features requiring Wix Business/eCommerce plans (only Standard Plan features)
- Removal of Wix branding (requires Wix Premium Plan upgrade)
- More than 50 booking service types (Wix Bookings Standard Plan limit)

#### **2.2.7 Third-Party Services**
- Zoom account subscription fees (client pays directly)
- Payment gateway transaction fees (client pays per transaction)
- Domain registration and renewal fees (client pays directly)
- Custom email hosting fees (e.g., Google Workspace - client pays directly)
- WhatsApp automation app subscription fees if automated reminders implemented (optional, client pays directly)

#### **2.2.8 Legal & Compliance**
- Legal review of terms of service, privacy policy, or refund policy (client responsible)
- GDPR compliance consulting (basic privacy page template provided only)
- Accessibility audit or WCAG AA compliance certification (basic accessibility features only)
- Compliance with health/medical regulations (client must ensure Reiki and Angelic Healing services comply with local laws)

---

### 2.3 ASSUMPTIONS

The following assumptions are critical to project success. If any assumption is invalid, this constitutes a change requiring formal change request.

#### **2.3.1 Client Responsibilities**
1. Client will provide all required content (text, images, logos) in final, approved format within timelines specified in Dependencies
2. Client has legal right to use all provided content (images, text, logos) without copyright infringement
3. Client will complete all third-party account setups (Zoom, payment gateway, calendar) within specified timelines
4. Client will respond to approval requests and feedback within 3 business days
5. Client will complete UAT testing within 5 business days of handover
6. Client will provide constructive, consolidated feedback (not piecemeal revisions)
7. Client has authority to approve all deliverables without additional stakeholder sign-off

#### **2.3.2 Technical Environment**
1. Client's Figma design files are complete, approved, and ready for development
2. Figma design is compatible with Wix Studio's capabilities (no features requiring custom coding outside Wix)
3. Client's chosen domain is available for purchase and connection
4. Client's payment gateway application will be approved within standard timeframe (7 business days)
5. Internet connectivity and browser compatibility on client's end will not hinder testing and approval
6. Wix Studio platform will remain stable with no breaking changes during development period

#### **2.3.3 Service Integrations**
1. Zoom account provided by client is Zoom Pro or higher (required for meetings >40 minutes)
2. Payment gateway supports all required Indian payment methods (UPI, cards, netbanking)
3. WhatsApp Business app available for manual messaging (automated WhatsApp is optional future enhancement)
4. Calendar sync (Google Calendar or Outlook) supports two-way synchronization with Wix Bookings

#### **2.3.4 Project Scope**
1. No scope changes will be requested during development without formal change request process
2. Client accepts Wix Standard Plan feature limitations (no custom features outside Wix capabilities)
3. Manual WhatsApp messaging is acceptable for launch (automated reminders are optional enhancement)
4. Single-language website (English) is sufficient for target audience
5. Client's Reiki and Angelic Healing services comply with all local health and wellness regulations (no medical claims)
6. Blog will be included as part of core website (basic setup with ability to add posts)

#### **2.3.5 Timeline**
1. Project will commence within 2 business days of SOW signature
2. Client will provide ALL required assets and dependencies within Week 1 (no delays)
3. Client will provide approvals within 1-2 business days (rapid turnaround required for 4-week timeline)
4. Development will be complete in 4 weeks; launch timing is flexible and controlled by client
5. Client understands that 4-week development timeline requires immediate response to all approval requests

---

### 2.4 DEPENDENCIES

The following dependencies must be satisfied for project success. Delays in dependencies will impact project timeline.

#### **2.4.1 Client-Provided Items**

| **Dependency** | **Required By** | **Format/Specification** | **Timeline** |
|---------------|----------------|-------------------------|--------------|
| Figma Design Files | Week 1 | Complete designs for all pages (Home, About, Services, Booking, Contact, Blog) with edit access | 2 business days from project start |
| Website Content (Text) | Week 1 | Word doc or Google Doc with final copy for all pages | 3 business days from project start |
| Logo & Brand Assets | Week 1 | Vector formats (SVG, AI) + PNG (transparent background, min 512px) | 2 business days from project start |
| Images & Media | Week 1 | High-res JPG/PNG (min 1920px width for hero images), optimized <2MB per file | 3 business days from project start |
| Domain Name | Week 1 | Chosen domain + registrar access for DNS configuration | 1 business day from project start |
| Service Details | Week 1 | Service names, descriptions, durations, pricing for all healing services (Reiki, Angelic, Money, Relationship, etc.) | 3 business days from project start |
| Availability Schedule | Week 1 | Weekly availability (days, hours, time zone, blocked dates) | 3 business days from project start |
| Cancellation/Refund Policy | Week 1 | Approved policy text for terms page and booking flow | 3 business days from project start |
| Business/KYC Documents | Week 1 | Business registration, PAN, GST (if applicable), bank details for payment gateway | 2 business days from project start |
| Zoom Account Access | Week 2 | Zoom Pro account login credentials or API access | 5 business days from project start |
| Google Calendar/Outlook Access | Week 2 | Account credentials or authorization for calendar sync | 5 business days from project start |
| Payment Gateway Approval | Week 2-3 | Completed KYC and gateway activation | 10 business days from project start (includes gateway approval time) |
| Email Templates | Week 2 | Confirmation, reminder, cancellation message content | 5 business days from project start |
| WhatsApp Message Templates | Week 2 | Manual reminder message templates for WhatsApp Business | 5 business days from project start |

#### **2.4.2 Third-Party Service Dependencies**

| **Service** | **Dependency** | **Timeline Impact** |
|------------|---------------|---------------------|
| Wix Studio | Platform stability and feature availability | Critical - any Wix downtime delays development |
| Payment Gateway (Wix Payments/PayU) | Account approval and activation | 3-7 business days after KYC submission (must start Week 1) |
| Zoom | API access and meeting creation functionality | 1 business day for integration setup |
| WhatsApp Business | Free app download from app store (for manual messaging) | Same day installation |
| Domain Registrar | DNS propagation time | 24-48 hours for domain connection |

#### **2.4.3 Internal Development Dependencies**

| **Milestone** | **Depends On** |
|--------------|---------------|
| Design Implementation | Figma files + content + brand assets provided |
| Booking System Configuration | Service details + availability schedule + calendar access provided |
| Payment Integration | Payment gateway approved + bank details provided |
| Zoom Automation | Zoom account access + booking system configured |
| Email Notifications | Templates provided + booking system configured |
| Members Area Setup | Booking system configured + cancellation policy provided |
| Blog Setup | Blog content structure + initial design template |
| UAT Testing | All features developed + client availability for testing |
| Launch | UAT completed + Wix Standard Plan subscription activated |

---

## 3. DETAILED DELIVERABLES

This section lists all deliverables with specifications, acceptance criteria, and dependencies.

### 3.1 DELIVERABLES TABLE

| **ID** | **Deliverable Name** | **Description** | **Format/Specifications** | **Due Date** | **Acceptance Criteria** | **Dependencies** |
|--------|---------------------|----------------|--------------------------|-------------|------------------------|----------------|
| **D1** | **Wix Studio Environment Setup** | Wix account, domain connection, SSL activation | Wix Studio Standard Plan, custom domain, HTTPS enabled | Week 1 | Accessible dev environment, domain resolving, SSL active | Domain name provided |
| **D2** | **Website (Figma Import)** | Home, About, Services, Booking, Contact, Blog pages | Pixel-perfect Figma implementation, responsive design | Week 1-2 | Visual match to Figma <5% deviation, client approval, mobile responsive | Figma files, content, images |
| **D3** | **Responsive Design Testing** | Cross-device compatibility testing report | Tested on min 5 devices, all breakpoints functional | Week 2 | No horizontal scroll, all elements functional on touch, PageSpeed ≥80 | Website pages (D2) |
| **D4** | **Wix Bookings Configuration** | Booking system with healing service types, calendar management | Reiki, Angelic, Money, Relationship, Energy Clearing, Protection, Remote healing + packages configured | Week 2 | All service types bookable, no double-bookings, confirmations sent <2 min | Service details, availability |
| **D5** | **Calendar Sync Integration** | Two-way sync with Google Calendar or Outlook | Real-time or <5-min delay sync | Week 2 | Bookings appear in external calendar, external events block Wix slots | Calendar access, Booking system (D4) |
| **D6** | **Payment Gateway Integration** | UPI, cards, netbanking payment processing | Wix Payments or PayU India, PCI DSS compliant | Week 3 | All payment methods tested successfully, receipts generated | Payment gateway approved, KYC docs |
| **D7** | **Zoom Integration** | Auto-generated unique Zoom links per booking | Zoom meeting created, link in confirmation email | Week 3 | Unique link per booking, delivered <2 min, meeting settings configured | Zoom access, Booking system (D4) |
| **D8** | **Email Notification System** | Automated emails for booking lifecycle | Branded templates, confirmation/reminder/cancellation | Week 3 | Emails sent <2 min, render correctly in Gmail/Outlook/Apple Mail, 24hr reminder works | Email templates, Booking system (D4) |
| **D9** | **Client Members Area** | Member login portal with booking history | Wix Members Area integration, view bookings, reschedule/cancel, access Zoom links | Week 3 | Clients can login, view history, reschedule bookings, access receipts | Booking system (D4), Cancellation policy |
| **D10** | **WhatsApp Messaging Setup** | Manual WhatsApp Business templates and workflow | Message templates for confirmations and reminders | Week 3 | WhatsApp Business installed, templates created, documentation provided | WhatsApp templates |
| **D11** | **Blog Setup** | Blog page with post management | Wix Blog app configured, initial layout design | Week 3 | Blog page functional, can create/edit posts, mobile responsive | Blog design template |
| **D12** | **User Acceptance Testing (UAT) Environment** | Staging website with all features for client testing | Fully functional replica, test payment mode enabled | Week 4 | Client can test all booking flows, payments (test mode), notifications, members area | All features (D2-D11) |
| **D13** | **UAT Test Plan & Documentation** | Comprehensive testing checklist for client | Covers all features, user journeys, edge cases | Week 4 | Client completes UAT checklist, zero P1/P2 defects remain | UAT environment (D12) |
| **D14** | **Bug Fixes & Refinements** | Resolution of UAT-identified issues | All P1/P2 bugs fixed, P3 documented for post-development | Week 4 | Client approves all critical fixes, signs off on UAT completion | UAT feedback (D13) |
| **D15** | **Development Complete - Launch-Ready Website** | Website development complete and ready for launch | Fully functional on staging, ready for production when client decides | Week 4 | All features working, development complete, ready to launch at client's timing | UAT sign-off (D14) |
| **D16** | **Website Administration Guide** | Documentation for client to manage website | PDF guide covering booking management, blog posting, content updates, WhatsApp workflow | Week 4 | Client can independently manage bookings, update availability, view reports, post to blog | Development complete (D15) |
| **D17** | **30-Day Post-Development Support** | Bug fixes and technical support after development handover | Business hours email/call support, critical bug fixes | 30 days post-development | All critical issues resolved within 48 hours, client confirms satisfaction | Development complete (D15) |

---

## 4. PROJECT TIMELINE & MILESTONES

### 4.1 DEVELOPMENT PHASES

**Total Duration:** 4 weeks (Development)
**Development Completion:** Week 4
**Launch Timing:** TBD (at client's discretion after content is ready)

**Key Notes:**
- Development will be complete and website ready to launch at end of Week 4
- Actual launch date is flexible and controlled by client
- Website will be fully functional on staging/development environment
- Production launch happens when client decides (after content finalization)
- 30-day warranty begins from development handover, NOT from launch

---

### 4.2 MILESTONE SCHEDULE

| **Milestone** | **Week** | **Deliverables Included** | **Exit Criteria** | **Payment Trigger** |
|--------------|---------|--------------------------|-------------------|-------------------|
| **M1: Design & Setup** | Week 1 | D1: Wix environment, domain setup, SSL<br>D2: Website pages (Figma import) | Dev environment accessible<br>Domain connected with SSL<br>All client assets received (Figma, content, images)<br>All pages visually match Figma<br>Client approval of design | 25% (₹0 - Free project) |
| **M2: Core Development** | Week 2 | D3: Responsive testing<br>D4: Wix Bookings setup<br>D5: Calendar sync | All pages mobile responsive<br>PageSpeed score ≥80<br>All healing service types bookable<br>Calendar syncing bidirectionally<br>Confirmations sent <2 min<br>Client approval of booking flow | 35% (₹0 - Free project) |
| **M3: Integrations & Features** | Week 3 | D6: Payment gateway<br>D7: Zoom integration<br>D8: Email notifications<br>D9: Members Area<br>D10: WhatsApp setup<br>D11: Blog setup | All payment methods tested successfully<br>Unique Zoom links generated per booking<br>Email notifications working (all types)<br>Members area functional<br>WhatsApp templates created<br>Blog operational<br>Full end-to-end booking flow tested | 30% (₹0 - Free project) |
| **M4: Testing, QA & Handover** | Week 4 | D12: UAT environment<br>D13: UAT documentation<br>D14: Bug fixes<br>D15: Development complete<br>D16: Admin guide<br>D17: Support begins | Client completes UAT with zero P1/P2 defects<br>Website development complete and launch-ready<br>Admin guide delivered<br>Client final sign-off on development | 10% (₹0 - Free project) |
| **M5: Post-Development Support** | 30 days post-development | D17: Ongoing support | All post-development issues resolved<br>Client satisfaction confirmed<br>Support period completed | Included in M4 |
| **M6: Production Launch (TBD)** | When client ready | Production deployment | Website live on production domain<br>First real booking processed successfully<br>Launch confirmed | Client activates Wix Standard Plan |

---

### 4.3 DETAILED WEEK-BY-WEEK TIMELINE

| **Week** | **Activities** | **Developer Tasks** | **Client Tasks** |
|---------|---------------|--------------------|--------------------|
| **Week 1** | Design & Setup | Create Wix Studio account<br>Configure domain & SSL<br>Import Figma to Wix<br>Build all 6 pages (Home, About, Services, Booking, Contact, Blog)<br>Implement responsive breakpoints<br>Optimize images & performance | Provide domain access immediately<br>Submit ALL dependencies (Figma, content, images, brand assets, service details, KYC docs)<br>Kickoff meeting attendance<br>Review and approve design (M1 approval) |
| **Week 2** | Core Development | Cross-device responsive testing<br>Configure Wix Bookings<br>Set up all service types & availability<br>Integrate Google Calendar/Outlook<br>Test two-way calendar sync<br>Test booking flow end-to-end | Provide calendar access<br>Provide service details & availability schedule<br>Test booking flow<br>Verify calendar sync working<br>Approve booking system (M2 approval) |
| **Week 3** | Integrations & Features | Integrate payment gateway<br>Configure all payment methods<br>Integrate Zoom API<br>Configure meeting settings<br>Set up email automations<br>Configure Members Area<br>Set up Blog functionality<br>Create WhatsApp templates<br>Test all features end-to-end | Complete payment gateway KYC (must be done Week 1!)<br>Provide Zoom access<br>Provide email/WhatsApp templates<br>Test payment flow (all methods)<br>Test Zoom link delivery<br>Test members area and blog<br>Approve all integrations (M3 approval) |
| **Week 4** | Testing, QA & Handover | Deploy to staging/UAT environment<br>Create comprehensive UAT test plan<br>Support UAT testing<br>Fix all P1/P2 bugs<br>Finalize development<br>Create and deliver admin guide<br>Complete handover | Complete UAT testing thoroughly<br>Document all bugs/feedback<br>Final approval and sign-off<br>Confirm development complete (M4 approval)<br>Decide on launch timing |
| **Weeks 5-8** | Post-Development Support | Monitor website performance on staging<br>Fix critical bugs if discovered<br>Provide technical support<br>Assist with production launch when client ready | Report any issues<br>Finalize content if needed<br>Decide when to launch<br>Activate Wix Standard Plan when ready to go live |
| **TBD** | Production Launch (Client Timing) | Deploy to production when client decides<br>Verify all features working on live site<br>Monitor first real bookings | Confirm launch timing<br>Activate Wix Standard Plan subscription<br>Process first real booking<br>Confirm launch success |

---

### 4.4 CRITICAL PATH ITEMS

The following items are on the critical path and any delay will impact the development completion date:

1. **Client asset delivery (Week 1 - URGENT):** ALL assets (Figma, content, images, KYC docs, service details) must be provided in Week 1. Any delay will push development timeline.
2. **Payment gateway KYC submission (Week 1):** Must submit KYC documents immediately to allow for 3-7 day approval window
3. **Design approval (End of Week 1):** Quick approval needed to proceed with Week 2 development
4. **Third-party access (Week 1-2):** Zoom, Calendar, and Payment gateway access must be provided on time
5. **UAT completion (Week 4):** Client must complete testing quickly to allow bug fixes within Week 4

**Contingency:** Due to compressed 4-week timeline, there is minimal buffer. Client delays in asset delivery or approvals will directly extend development timeline. Launch timing is flexible since it occurs after development completion.

---

## 5. BUDGET & PAYMENT TERMS

### 5.1 PROJECT COSTS BREAKDOWN

#### **5.1.1 Development Costs**

| **Item** | **Cost** | **Notes** |
|----------|---------|-----------|
| Website Development (All Features) | ₹0 | Development provided at no charge (as specified) |
| **Total Development Cost** | **₹0** | - |

---

#### **5.1.2 Operational Costs (Client Responsibility)**

| **Item** | **Frequency** | **Cost** | **Paid To** | **Notes** |
|----------|--------------|----------|-------------|-----------|
| **Wix Studio Standard Plan** | Monthly | ₹399 + 18% GST = ₹471/month | Wix.com | Required when launching to production (free tier during development) |
| **Payment Gateway Transaction Fees** | Per Transaction | 2.9% + ₹25 per transaction | Payment Gateway Provider | Deducted automatically from each transaction |
| **Domain Registration** | Annual | ₹800-1,500 (varies by domain) | Domain Registrar | Client pays directly to registrar |
| **Zoom Pro Subscription (Optional)** | Monthly/Annual | ₹1,200/month or ₹13,200/year | Zoom | Required for meetings >40 minutes; client pays directly |
| **WhatsApp Business** | Free | ₹0 | WhatsApp | Manual messaging included at no cost |
| **WhatsApp Automation (Optional Enhancement)** | Monthly | ₹500-2,000/month | Wix App Provider | Only if automated WhatsApp reminders implemented |

**Estimated Monthly Operational Cost (Post-Launch):**
- **Minimum:** ₹471/month (Wix only, excluding per-transaction fees)
- **Typical:** ₹471 + ₹1,200 (Zoom) + ₹100 (domain prorated) = ₹1,771/month
- **With WhatsApp Automation (Optional):** ₹1,771 + ₹500-2,000 = ₹2,271-3,771/month

---

### 5.2 TRANSACTION FEE EXAMPLES

Understanding how payment gateway fees impact revenue:

**Example 1: Single 1-on-1 Session (₹1,500)**
```
Service Price:          ₹1,500.00
Transaction Fee (2.9%): -₹43.50
Fixed Fee:              -₹25.00
──────────────────────────────────
Net Revenue:            ₹1,431.50
Effective Fee:          4.57%
```

**Example 2: 5-Session Package (₹6,500)**
```
Package Price:          ₹6,500.00
Transaction Fee (2.9%): -₹188.50
Fixed Fee:              -₹25.00
──────────────────────────────────
Net Revenue:            ₹6,286.50
Effective Fee:          3.28%
```

---

## 6. ROLES & RESPONSIBILITIES (RACI MATRIX)

**RACI Key:**
- **R** = Responsible (does the work)
- **A** = Accountable (final decision maker)
- **C** = Consulted (provides input)
- **I** = Informed (kept updated)

| **Task/Activity** | **Developer/Agency** | **Client (Reiki Practitioner)** | **Third-Party Services** |
|-------------------|---------------------|-------------------------------|-------------------------|
| **Project Management** | R | A | I |
| **Wix Environment Setup** | R, A | I | I |
| **Domain Configuration** | R | C, A | - |
| **Figma Design Import** | R, A | C | - |
| **Content Provision** | I | R, A | - |
| **Responsive Design Implementation** | R, A | C | - |
| **Wix Bookings Configuration** | R, A | C | I |
| **Payment Gateway Integration** | R | C | A |
| **Zoom Integration Setup** | R, A | C | I |
| **Calendar Sync Configuration** | R, A | C | I |
| **Email Notification Setup** | R, A | C | - |
| **SMS/WhatsApp Setup** | R, A | C | I |
| **UAT Testing** | C | R, A | - |
| **Bug Fixes (UAT)** | R, A | C | - |
| **Production Deployment** | R, A | I | I |
| **Wix Subscription Payment** | I | R, A | A |
| **Operational Cost Payments** | I | R, A | A |
| **Content Updates (Post-Launch)** | I | R, A | - |
| **Booking Management (Post-Launch)** | I | R, A | - |
| **Post-Launch Technical Support** | R, A | C | - |

---

## 7. ACCEPTANCE CRITERIA & TESTING

### 7.1 ACCEPTANCE PROCESS

All deliverables must be formally accepted by the client following this process:

1. **Developer Notification:** Developer notifies client when deliverable is ready for review
2. **Client Review Period:** Client has **5 business days** to review and test deliverable
3. **Feedback Submission:** Client submits feedback via email with specific, actionable items
4. **Revision Cycle:** Developer addresses feedback within **3 business days**
5. **Approval:** Client provides written approval via email ("I approve [Deliverable Name]")
6. **Sign-Off:** Approval constitutes formal acceptance; further changes require change request

**Revision Limits:**
- **Major Milestones (M1-M5):** Up to **2 revision rounds** included per milestone
- **Minor Revisions:** Unlimited for critical bugs (P1/P2 severity)
- **Beyond Limits:** Additional revisions require formal change request

---

### 7.2 DEFECT SEVERITY DEFINITIONS

| **Severity** | **Definition** | **Example** | **Resolution SLA** |
|-------------|---------------|-------------|-------------------|
| **P1 - Critical** | Complete feature failure; no workaround; blocks launch | Payment gateway not processing transactions; booking system crashes | 24 hours |
| **P2 - High** | Major feature impairment; workaround exists; significantly impacts user experience | Zoom link not generated for bookings; email notifications delayed >10 minutes | 48 hours |
| **P3 - Medium** | Minor feature issue; low user impact; cosmetic or edge-case bugs | Button alignment off by 5px; error message unclear; missing favicon | 5 business days or post-launch |
| **P4 - Low** | Cosmetic issues with no functional impact | Color shade slightly off; typo in non-critical text | Post-launch or backlog |

**Launch Criteria:** Zero P1/P2 defects. P3/P4 defects documented and addressed post-launch if time permits.

---

### 7.3 USER ACCEPTANCE TESTING (UAT) PLAN

#### **7.3.1 UAT Test Scenarios (Minimum Required)**

| **Test Scenario** | **Steps** | **Expected Result** | **Pass/Fail** |
|------------------|-----------|-------------------|--------------|
| **TC-01: Reiki Healing Session Booking** | 1. Navigate to Booking page<br>2. Select "Reiki Healing Session"<br>3. Choose date/time<br>4. Fill contact details<br>5. Complete payment via UPI<br>6. Check email | Booking confirmed<br>Payment successful<br>Confirmation email <2 min<br>Zoom link in email<br>Booking in calendar<br>Member account created | [ ] |
| **TC-02: Angelic Healing Session Booking** | 1. Select "Angelic Healing Session"<br>2. Choose date/time<br>3. Complete payment via card | Booking confirmed<br>Zoom link generated<br>Email sent<br>Member account accessible | [ ] |
| **TC-03: Specialized Healing Bookings** | 1. Book "Money Healing"<br>2. Book "Relationship Healing"<br>3. Book "Energy Blockage Clearing" | All specialized services bookable<br>Correct pricing applied<br>Confirmations sent | [ ] |
| **TC-04: Package Purchase** | 1. Select "Multi-session Package"<br>2. Complete payment<br>3. Verify can book individual sessions | Package purchased<br>Sessions available to schedule<br>Receipt shows package price | [ ] |
| **TC-05: Calendar Sync** | 1. Create booking in Wix<br>2. Check external calendar | Booking appears in external calendar within 5 min | [ ] |
| **TC-06: External Event Blocking** | 1. Create event in Google Calendar<br>2. Check Wix booking availability | Time slot unavailable in Wix Bookings | [ ] |
| **TC-07: Payment Methods** | Test payments with UPI, Debit card, Credit card, Netbanking | All methods successful<br>Receipt generated for each | [ ] |
| **TC-08: Failed Payment Handling** | 1. Initiate booking<br>2. Use test card that fails | User-friendly error message<br>Option to retry<br>Booking NOT confirmed | [ ] |
| **TC-09: Zoom Link Uniqueness** | Create 3 different bookings | Each booking has unique Zoom link | [ ] |
| **TC-10: Email Notifications** | Create booking | Confirmation <2 min<br>Reminder 24 hours before<br>Branded design | [ ] |
| **TC-11: Members Area Login** | 1. Login with booking email<br>2. View dashboard | Login successful<br>Upcoming bookings visible<br>Past bookings visible<br>Can access Zoom links | [ ] |
| **TC-12: Members Area - Reschedule** | Reschedule booking from member dashboard | Reschedule successful<br>Email sent<br>Calendar updated<br>Zoom link updated | [ ] |
| **TC-13: Members Area - Cancel** | Cancel booking from member dashboard | Cancellation successful<br>Email sent<br>Removed from calendar<br>Policy enforced | [ ] |
| **TC-14: WhatsApp Templates** | Verify WhatsApp Business templates | Templates created<br>Documentation provided<br>Can manually send messages | [ ] |
| **TC-15: Blog Functionality** | 1. Create blog post<br>2. View on website | Blog post published<br>Displays correctly<br>Mobile responsive | [ ] |
| **TC-16: Mobile Booking Flow** | Repeat TC-01 on mobile device | Full flow functional on mobile<br>No horizontal scroll<br>Touch elements work | [ ] |
| **TC-17: Responsive Design** | View all pages on desktop, tablet, mobile | All pages render correctly<br>No layout breaks<br>Images load properly | [ ] |
| **TC-18: Admin Dashboard Access** | Log in to Wix backend | All bookings visible<br>Can manage availability<br>Can view reports<br>Can post to blog | [ ] |

**UAT Pass Criteria:** All test cases marked "Pass" with zero P1/P2 defects.

---

### 7.4 PERFORMANCE ACCEPTANCE CRITERIA

| **Metric** | **Target** | **Measurement Tool** | **Pass/Fail** |
|-----------|-----------|---------------------|--------------|
| **Page Load Time (Desktop)** | <3 seconds on 4G | Google PageSpeed Insights | [ ] |
| **Mobile PageSpeed Score** | ≥80 (Performance) | Google PageSpeed Insights | [ ] |
| **Booking Confirmation Email** | <2 minutes delivery | Test booking + email timestamp | [ ] |
| **Payment Processing** | <30 seconds checkout flow | Test transaction timing | [ ] |
| **Zoom Link Generation** | <2 minutes from booking | Test booking + email timestamp | [ ] |
| **Calendar Sync Delay** | <5 minutes | Test booking + calendar check | [ ] |
| **Members Area Load Time** | <2 seconds | Member dashboard access test | [ ] |
| **Blog Page Load Time** | <3 seconds on 4G | Google PageSpeed Insights | [ ] |

---

## 8. CHANGE MANAGEMENT PROCESS

### 8.1 CHANGE REQUEST POLICY

Any deviation from this SOW requires a formal change request. Changes include:
- Adding features not listed in Section 2.1 (In-Scope)
- Modifying deliverable specifications
- Extending timeline beyond agreed milestones
- Adding new integrations or third-party services
- Changes to approved designs after sign-off

**Exception:** Minor bug fixes and clarifications within existing scope do not require change requests.

---

### 8.2 CHANGE REQUEST PROCESS

1. **Request Submission:** Client or developer submits written change request via email with:
   - Description of change
   - Reason for change
   - Affected deliverables/milestones
   - Requested timeline

2. **Impact Assessment:** Developer assesses within **2 business days**:
   - Scope impact (features affected)
   - Timeline impact (delay in weeks)
   - Cost impact (if applicable)
   - Risk assessment

3. **Change Proposal:** Developer provides written proposal with:
   - Detailed impact analysis
   - Revised timeline (if applicable)
   - Revised budget (if applicable)
   - Recommendation (approve/reject/modify)

4. **Approval:** Client reviews proposal and:
   - Approves: Change request becomes SOW amendment
   - Rejects: Original SOW remains in effect
   - Requests modification: Return to step 2

5. **SOW Amendment:** Approved changes documented as SOW addendum, signed by both parties

6. **Implementation:** Developer implements change per revised timeline

---

### 8.3 CHANGE THRESHOLD GUIDELINES

| **Change Type** | **Process** | **Timeline Impact** |
|----------------|-----------|-------------------|
| **Minor (Clarifications)** | Email confirmation, no formal CR | None |
| **Medium (Feature Modification)** | Formal CR required | 1-2 weeks |
| **Major (New Features/Scope)** | Formal CR + SOW amendment | 2+ weeks |

---

### 8.4 SCOPE FREEZE DATE

**Design Freeze:** End of Week 1 (after M1 approval)
**Functionality Freeze:** End of Week 3 (after M3 approval)

**IMPORTANT:** Due to compressed 4-week timeline, freeze dates are much earlier. Changes requested after freeze dates will delay development completion and require change request approval.

---

## 9. RISK REGISTER & MITIGATION

| **Risk ID** | **Risk Description** | **Probability** | **Impact** | **Mitigation Strategy** | **Contingency Plan** | **Owner** |
|------------|---------------------|----------------|-----------|------------------------|---------------------|-----------|
| **R1** | Figma designs not compatible with Wix Studio capabilities | Medium | High | Review Figma files immediately; identify incompatibilities Day 1 | Simplify design elements or use custom CSS within Wix limits | Developer |
| **R2** | Payment gateway KYC approval delayed beyond Week 2 | High | Critical | Submit KYC documents DAY 1; follow up daily with gateway provider | Use test/sandbox mode for UAT; extend timeline if necessary | Client |
| **R3** | Zoom API integration issues or account limitations | Low | Medium | Verify Zoom account type (Pro required) in Week 1 | Use manual Zoom link generation as temporary workaround | Developer |
| **R4** | Client delays in content/asset delivery (HIGHEST RISK) | High | Critical | ALL assets must be provided Week 1; daily reminders if missing | Extend development timeline day-for-day with delay | Client |
| **R5** | Wix platform downtime or breaking changes | Low | High | Monitor Wix status page; maintain backups | Pause development during outage; extend timeline accordingly | Developer |
| **R6** | Calendar sync fails or has excessive delay | Medium | Medium | Test calendar sync immediately in Week 2 | Document manual calendar management process as workaround | Developer |
| **R7** | Client approval delays (CRITICAL for 4-week timeline) | High | Critical | Request 24-48 hour approval turnaround; set clear expectations | Extend timeline proportionally; communicate impact clearly | Client |
| **R8** | UAT reveals major usability issues requiring redesign | Medium | High | Conduct rapid mid-week reviews (Week 1, Week 2, Week 3) | Extend Week 4 to accommodate P1/P2 fixes; communicate delay | Developer |
| **R9** | Insufficient time for comprehensive testing in Week 4 | Medium | High | Prioritize critical user flows; focus UAT on booking/payment flows | Client accepts risk of minor bugs discovered post-development | Both |

---

## 10. QUALITY STANDARDS & COMPLIANCE

### 10.1 DEVELOPMENT STANDARDS

| **Standard** | **Requirement** | **Verification** |
|-------------|----------------|-----------------|
| **Code Quality** | Use Wix Studio best practices; minimize custom code | Code review before each milestone |
| **Image Optimization** | All images <500KB; use WebP format where supported | Automated image analysis tool |
| **Performance** | PageSpeed score ≥80 (mobile); <3s page load (desktop) | Google PageSpeed Insights |
| **Accessibility** | Minimum WCAG 2.1 Level A | Manual accessibility checklist |
| **Cross-Browser Compatibility** | Chrome, Safari, Firefox, Edge (latest 2 versions) | Manual testing on all browsers |
| **Mobile Responsiveness** | 100% functional on iOS and Android | Device testing |

---

### 10.2 SECURITY STANDARDS

| **Standard** | **Requirement** | **Verification** |
|-------------|----------------|-----------------|
| **SSL/TLS** | HTTPS enforced on all pages | SSL certificate check |
| **Payment Security** | PCI DSS compliance via gateway; no card data stored | Gateway provider certification |
| **Data Privacy** | Privacy policy published; client data accessible only to practitioner | Privacy policy review |
| **Secure Forms** | Contact/booking forms use HTTPS | Form submission testing |

---

### 10.3 COMPLIANCE REQUIREMENTS

| **Compliance Area** | **Requirement** | **Responsibility** |
|--------------------|----------------|-------------------|
| **Privacy Policy** | Published page with data collection, usage, storage policies | Developer provides template; Client customizes |
| **Terms of Service** | Published page with service terms, cancellation policy | Client provides; Developer publishes |
| **Payment Gateway Compliance** | KYC verification, business registration | Client completes KYC |
| **Email Compliance** | Unsubscribe link in marketing emails | Developer implements |

**Note:** Client is solely responsible for ensuring Reiki services comply with all local health, wellness, and medical regulations.

---

## 11. POST-DELIVERY SUPPORT & MAINTENANCE

### 11.1 WARRANTY PERIOD (30 Days Post-Development Handover)

**Duration:** 30 calendar days from development completion/handover (end of Week 4)

**IMPORTANT NOTE:** Warranty period begins from development handover (Week 4), NOT from production launch. This ensures client has support during the entire period while deciding when to launch.

**Coverage:**
- Bug fixes for features delivered in this SOW (P1/P2 within 48 hours, P3 within 5 business days)
- Technical support for website functionality issues (business hours: Mon-Fri, 9 AM - 6 PM IST)
- Assistance with Wix backend questions related to delivered features
- Resolution of integration issues (Zoom, payment gateway, calendar, notifications)
- Performance optimization if PageSpeed score drops below 80
- Support for production deployment when client decides to launch

**Exclusions:**
- Issues caused by client modifications to website after handover
- Third-party service outages (Wix, Zoom, payment gateway)
- New feature development or scope additions
- Content updates (text, images, new pages)
- Training beyond provided documentation

**Support Channels:**
- Email: [Developer Email]
- Response Time: 24 hours for all inquiries (business hours)
- Critical Issues (P1): 4-hour response time

---

### 11.2 TRAINING & DOCUMENTATION

**Included:**
- **D16: Website Administration Guide (PDF)** covering:
  - Wix dashboard navigation
  - Managing bookings (view, cancel, reschedule)
  - Updating availability/blocked dates
  - Viewing booking reports and revenue
  - Managing Members Area and client accounts
  - Creating and publishing blog posts
  - Manual WhatsApp messaging workflow
  - Basic content editing
  - Troubleshooting common issues
  - Contact information for third-party support

---

### 11.3 HANDOVER CHECKLIST

Upon development completion (Week 4), developer will provide:

- [ ] Staging/development website URL with all features functional and ready to launch
- [ ] Wix Studio account access (client admin role)
- [ ] Wix Bookings dashboard access
- [ ] Wix Members Area management access
- [ ] Blog administration access
- [ ] Payment gateway dashboard access and credentials
- [ ] Zoom integration credentials (if applicable)
- [ ] Calendar sync verification
- [ ] Email notification configuration documentation
- [ ] WhatsApp Business setup and templates documentation
- [ ] Website Administration Guide (D16)
- [ ] List of all third-party accounts and login credentials
- [ ] UAT sign-off document (approved by client)
- [ ] Instructions for production launch when client is ready

---

## 12. TERMS & CONDITIONS

### 12.1 INTELLECTUAL PROPERTY

1. **Client-Provided Content:** Client retains all rights to provided content (text, images, logos, Figma designs)
2. **Developed Website:** Upon launch, client owns all rights to website content and design implementation
3. **Third-Party Licenses:** Wix platform, apps, and integrations subject to respective providers' terms
4. **Developer Portfolio Rights:** Developer may showcase website in portfolio with client's prior written approval

---

### 12.2 CONFIDENTIALITY

Both parties agree to:
- Maintain confidentiality of proprietary information shared during project
- Not disclose client's business strategies, pricing, or personal data
- Not disclose developer's methodologies or technical implementations
- Confidentiality obligation survives project completion indefinitely

---

### 12.3 LIABILITY & INDEMNIFICATION

1. **Developer Liability:** Developer is not liable for:
   - Third-party service failures (Wix, Zoom, payment gateway, SMS providers)
   - Client's use of website for illegal purposes or non-compliance with regulations
   - Revenue loss due to website downtime outside developer's control
   - Client's failure to maintain subscriptions or pay operational costs

2. **Client Indemnification:** Client indemnifies developer against claims arising from:
   - Client's Reiki service delivery or medical/health claims
   - Copyright infringement of client-provided content
   - Violation of laws/regulations related to wellness services
   - Payment disputes with end customers

---

### 12.4 TERMINATION

1. **Termination by Client:** Client may terminate project with 7 days' written notice
   - Client retains all completed deliverables up to termination date
   - No refund required (project is free)

2. **Termination by Developer:** Developer may terminate if:
   - Client fails to provide required dependencies after 2 written reminders
   - Client requests changes outside scope without approving change requests
   - Project stalled >30 days due to client inaction

3. **Effect of Termination:** Upon termination:
   - Developer provides all work completed to date
   - All third-party accounts remain client's responsibility
   - Confidentiality and IP clauses remain in effect

---

### 12.5 DISPUTE RESOLUTION

1. **Informal Resolution:** Disputes resolved via good-faith discussion within 14 days
2. **Mediation:** If unresolved, parties agree to mediation before legal action
3. **Governing Law:** This SOW governed by laws of India

---

## 13. SIGN-OFF & ACCEPTANCE

### 13.1 STATEMENT OF WORK APPROVAL

By signing below, both parties acknowledge they have read, understood, and agree to all terms, deliverables, timelines, and responsibilities outlined in this Statement of Work.

---

**CLIENT:**

**Name:** Banani Ghosh
**Business Name:** Aura Divine
**Email:** banani.ghosh.here@gmail.com
**Signature:** ______________________________________
**Date:** ______________________________________

---

**DEVELOPER:**

**Name:** Vedansh Kumar
**Signature:** ______________________________________
**Date:** ______________________________________

---

### 13.2 MILESTONE APPROVAL LOG

| **Milestone** | **Deliverables** | **Completion Date** | **Client Approval Signature** | **Date Approved** |
|--------------|-----------------|--------------------|-----------------------------|------------------|
| M1: Design & Setup | D1, D2: Wix Setup, Website Design | | | |
| M2: Core Development | D3, D4, D5: Responsive Testing, Bookings, Calendar | | | |
| M3: Integrations & Features | D6-D11: Payment, Zoom, Email, Members Area, WhatsApp, Blog | | | |
| M4: Testing & Handover | D12-D16: UAT, Bug Fixes, Development Complete, Admin Guide | | | |
| M5: Post-Development Support | D17: 30-day support period | | | |
| M6: Production Launch (TBD) | Production deployment when client ready | | | |

---

### 13.3 FINAL DEVELOPMENT SIGN-OFF

**I, Banani Ghosh, confirm that:**
- [ ] All deliverables (D1-D17) have been received and approved
- [ ] Website development is complete and ready to launch as of [Development Completion Date - Week 4]
- [ ] All UAT test cases passed with zero P1/P2 defects
- [ ] Website Administration Guide (D16) received
- [ ] All third-party account credentials provided
- [ ] 30-day warranty period (starting from development handover) has been explained and understood
- [ ] I understand that production launch timing is at my discretion (TBD)
- [ ] I accept the website development as complete per this SOW

**Client Signature:** ______________________________________
**Date:** ______________________________________

---

**Developer Confirmation:**
- [ ] All deliverables completed per SOW specifications
- [ ] Website fully functional on staging/development environment
- [ ] All integrations tested and functional
- [ ] Handover documentation provided
- [ ] Ready to deploy to production when client decides
- [ ] 30-day warranty support period begins on [Development Handover Date - Week 4]

**Developer Signature:** ______________________________________
**Date:** ______________________________________

---

### 13.4 PRODUCTION LAUNCH SIGN-OFF (COMPLETED WHEN CLIENT LAUNCHES)

**I, Banani Ghosh, confirm that:**
- [ ] Production launch completed on [Launch Date - TBD]
- [ ] Wix Standard Plan subscription activated
- [ ] Website live and accepting real bookings/payments
- [ ] First real booking processed successfully
- [ ] Production launch successful

**Client Signature:** ______________________________________
**Date:** ______________________________________

**Developer Confirmation:**
- [ ] Website deployed to production domain
- [ ] All features verified working on live site
- [ ] Production launch successful

**Developer Signature:** ______________________________________
**Date:** ______________________________________

---

## APPENDICES

### APPENDIX A: ACRONYMS & DEFINITIONS

| **Term** | **Definition** |
|---------|---------------|
| **API** | Application Programming Interface |
| **DNS** | Domain Name System |
| **GST** | Goods and Services Tax - 18% tax in India |
| **HTTPS** | Hypertext Transfer Protocol Secure |
| **KYC** | Know Your Customer |
| **PCI DSS** | Payment Card Industry Data Security Standard |
| **RACI** | Responsible, Accountable, Consulted, Informed |
| **SOW** | Statement of Work |
| **SSL** | Secure Sockets Layer |
| **UAT** | User Acceptance Testing |
| **UPI** | Unified Payments Interface |
| **WCAG** | Web Content Accessibility Guidelines |

---

### APPENDIX B: CONTACT INFORMATION

**Client:**
- **Name:** Banani Ghosh
- **Business Name:** Aura Divine
- **Email:** banani.ghosh.here@gmail.com
- **Phone:** [Phone]

**Developer:**
- **Name:** Vedansh Kumar
- **Email:** [Email]
- **Phone:** [Phone]
- **Support Hours:** Monday-Friday, 9 AM - 6 PM IST

**Third-Party Service Support:**
- **Wix Support:** https://support.wix.com/
- **Zoom Support:** https://support.zoom.us/
- **Payment Gateway Support:** [Provider-specific contact]

---

### APPENDIX C: TECHNICAL SPECIFICATIONS

| **Specification** | **Value** |
|---------------|-------|
| **Platform** | Wix Studio |
| **Plan** | Standard (₹399/month + GST) |
| **Storage** | 50 GB |
| **Bandwidth** | Unlimited |
| **SSL** | Included |
| **Uptime SLA** | 99.9% |
| **Payment Gateway** | Wix Payments / PayU India |
| **Video Platform** | Zoom (Pro or higher) |
| **Notifications** | Email (automated) + WhatsApp (manual with free Business app) |
| **Browser Support** | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| **Performance Target** | PageSpeed ≥80, Load time <3s |

---

## DOCUMENT VERSION HISTORY

| **Version** | **Date** | **Author** | **Changes** |
|------------|---------|-----------|-------------|
| 1.0 | 2025-12-24 | Vedansh Kumar | Initial SOW creation for Aura Divine - Reiki and Angelic Healing website with specific service offerings, Members Area, Blog, and WhatsApp integration options |
| 1.1 | 2025-12-24 | Vedansh Kumar | Updated timeline to 4-week development cycle; separated development completion from launch; launch timing now TBD and client-controlled; warranty period starts from development handover (Week 4) not launch; compressed all milestones and dependencies to fit 4-week timeline |

---

**END OF STATEMENT OF WORK**

---

*This comprehensive Statement of Work serves as the complete contractual agreement for the Aura Divine - Reiki and Angelic Healing Website project. All parties should retain signed copies for reference throughout the project lifecycle and beyond.*