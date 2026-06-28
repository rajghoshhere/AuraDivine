# Software Requirements Specification (SRS)
## Reiki and Angelic Healing Website

**Version:** 1.0
**Date:** December 24, 2025
**Client Name:** Banani Ghosh
**Brand Name:** Aura Divine
**Developer:** Vedansh Kumar
**Prepared by:** Development Team
**Project:** Reiki and Angelic Healing Website on Wix Studio

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 [Purpose](#11-purpose)
   - 1.2 [Scope](#12-scope)
   - 1.3 [Definitions, Acronyms, and Abbreviations](#13-definitions-acronyms-and-abbreviations)
   - 1.4 [References](#14-references)
   - 1.5 [Overview](#15-overview)
2. [Overall Description](#2-overall-description)
   - 2.1 [Product Perspective](#21-product-perspective)
   - 2.2 [Product Functions](#22-product-functions)
   - 2.3 [User Classes and Characteristics](#23-user-classes-and-characteristics)
   - 2.4 [Operating Environment](#24-operating-environment)
   - 2.5 [Design and Implementation Constraints](#25-design-and-implementation-constraints)
   - 2.6 [Assumptions and Dependencies](#26-assumptions-and-dependencies)
3. [System Features](#3-system-features)
   - 3.1 [Service Browsing and Information Display](#31-service-browsing-and-information-display)
   - 3.2 [Appointment Booking System](#32-appointment-booking-system)
   - 3.3 [Payment Processing](#33-payment-processing)
   - 3.4 [Virtual Session Management](#34-virtual-session-management)
   - 3.5 [Communication and Notifications](#35-communication-and-notifications)
   - 3.6 [Client Management](#36-client-management)
   - 3.7 [Practitioner Admin Dashboard](#37-practitioner-admin-dashboard)
4. [External Interface Requirements](#4-external-interface-requirements)
   - 4.1 [User Interfaces](#41-user-interfaces)
   - 4.2 [Hardware Interfaces](#42-hardware-interfaces)
   - 4.3 [Software Interfaces](#43-software-interfaces)
   - 4.4 [Communication Interfaces](#44-communication-interfaces)
5. [Non-Functional Requirements](#5-non-functional-requirements)
   - 5.1 [Performance Requirements](#51-performance-requirements)
   - 5.2 [Security Requirements](#52-security-requirements)
   - 5.3 [Usability Requirements](#53-usability-requirements)
   - 5.4 [Reliability Requirements](#54-reliability-requirements)
   - 5.5 [Compliance Requirements](#55-compliance-requirements)
6. [Data Requirements](#6-data-requirements)
   - 6.1 [Data Models](#61-data-models)
   - 6.2 [Data Storage](#62-data-storage)
   - 6.3 [Data Retention](#63-data-retention)
7. [Appendices](#7-appendices)
   - 7.1 [Appendix A: Wix Studio Platform Specifications](#71-appendix-a-wix-studio-platform-specifications)
   - 7.2 [Appendix B: User Journey Maps](#72-appendix-b-user-journey-maps)
   - 7.3 [Appendix C: Payment Gateway Integration](#73-appendix-c-payment-gateway-integration)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document provides a comprehensive description of the Reiki and Angelic Healing Website to be developed on the Wix Studio platform. The document outlines the functional and non-functional requirements, system features, interfaces, and constraints for the website that enables a single Reiki and Angelic Healing practitioner to offer virtual healing sessions, manage bookings, process payments, and maintain client relationships.

This document is intended for:
- **Developers/Designers:** To understand system requirements and design specifications
- **Project Stakeholders:** To validate business requirements and functionality
- **Quality Assurance Team:** To develop test plans and verify system compliance
- **Healing Practitioner:** To understand system capabilities and workflow

### 1.2 Scope

The Reiki and Angelic Healing Website (Aura Divine) is a no-code web application built on Wix Studio (Standard Plan) that serves as a digital platform for a single Reiki and Angelic Healing practitioner to:

**In Scope:**
- Provide information about Reiki and Angelic Healing services and the practitioner
- Enable clients to browse available services and time slots
- Facilitate online booking of individual healing sessions
- Process secure payments through integrated payment gateways (Wix Payments/PayU India)
- Automatically generate and distribute Zoom meeting links for virtual sessions
- Send automated communications (email, SMS) for confirmations and reminders
- Optional WhatsApp integration for automated reminders (if available)
- Manage client records and appointment history
- Provide practitioner with administrative tools to manage bookings and calendar
- Support package purchases for multi-session programs
- Enable session cancellation and rescheduling
- Blog section for educational content and spiritual insights
- Members area with client login, "My Bookings" page, session history, and profile management

**Out of Scope:**
- E-commerce store for physical products
- Multi-practitioner scheduling and management
- In-person session booking and location management
- Video conferencing solution beyond Zoom integration
- Custom mobile application development
- Community forum or social features
- Training courses and certification programs
- Advanced CRM features beyond Wix's native capabilities

**Benefits:**
- Streamlined booking process for clients
- Automated administrative tasks for practitioner
- Secure payment processing with Indian payment methods
- Professional online presence
- Enhanced client communication and engagement
- Scalable platform for business growth

### 1.3 Definitions, Acronyms, and Abbreviations

| Term | Definition |
|------|------------|
| **API** | Application Programming Interface |
| **CTA** | Call To Action - Interactive elements prompting user action |
| **GDPR** | General Data Protection Regulation |
| **HIPAA** | Health Insurance Portability and Accountability Act |
| **No-code** | Platform allowing website creation without programming |
| **Practitioner** | The Reiki and Angelic Healing practitioner providing services |
| **Reiki** | Japanese energy healing technique |
| **Angelic Healing** | Energy healing modality working with angelic energies |
| **Responsive Design** | Web design approach for optimal viewing across devices |
| **SEO** | Search Engine Optimization |
| **SLA** | Service Level Agreement |
| **SMS** | Short Message Service |
| **SSL** | Secure Sockets Layer |
| **UPI** | Unified Payments Interface (Indian payment system) |
| **Wix Bookings** | Wix's native appointment scheduling system |
| **Wix Payments** | Wix's integrated payment processing solution |
| **Wix Studio** | Advanced Wix platform with enhanced design capabilities |
| **Zoom** | Video conferencing platform for virtual sessions |

### 1.4 References

- Wix Studio Documentation: https://www.wix.com/studio
- Wix Bookings Documentation: https://support.wix.com/en/wix-bookings
- Wix Payments Documentation: https://support.wix.com/en/article/wix-payments
- PayU India Integration Guide: https://payumoney.com/dev-guide/
- Zoom API Documentation: https://marketplace.zoom.us/docs/api-reference/
- GDPR Compliance Guidelines: https://gdpr.eu/
- Web Content Accessibility Guidelines (WCAG 2.1): https://www.w3.org/WAI/WCAG21/

### 1.5 Overview

This SRS document is organized into seven main sections:

- **Section 2** provides an overall description of the system, including product perspective, functions, user characteristics, and constraints
- **Section 3** details specific system features and functional requirements
- **Section 4** describes external interface requirements including UI, hardware, software, and communication interfaces
- **Section 5** outlines non-functional requirements related to performance, security, usability, reliability, and compliance
- **Section 6** specifies data requirements including models, storage, and retention policies
- **Section 7** contains appendices with supplementary information

---

## 2. Overall Description

### 2.1 Product Perspective

The Reiki Spiritual Healing Website is a standalone web-based system built on the Wix Studio platform. It operates as a self-contained solution integrating multiple third-party services and Wix native features.

**System Context:**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         Reiki & Angelic Healing Website                │
│         Aura Divine (Wix Studio Platform)              │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐            │
│  │   User   │  │ Booking  │  │  Payment  │            │
│  │Interface │  │  System  │  │Processing │            │
│  └──────────┘  └──────────┘  └───────────┘            │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐            │
│  │  Zoom    │  │Notification│ │   Admin   │            │
│  │Integration│  │  System  │  │ Dashboard │            │
│  └──────────┘  └──────────┘  └───────────┘            │
│                                                         │
└─────────────────────────────────────────────────────────┘
         │              │              │
         ▼              ▼              ▼
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  Zoom   │    │  Wix    │    │  PayU    │
   │   API   │    │Payments │    │  India   │
   └─────────┘    └─────────┘    └──────────┘
         │              │              │
         ▼              ▼              ▼
   ┌─────────┐    ┌─────────┐    ┌──────────┐
   │  Email  │    │   SMS   │    │WhatsApp  │
   │ Service │    │ Service │    │  Service │
   └─────────┘    └─────────┘    └──────────┘
```

**Platform Dependencies:**
- **Wix Studio (Standard Plan):** Primary hosting and development platform
- **Wix Bookings:** Appointment scheduling engine
- **Wix Payments/PayU India:** Payment processing
- **Zoom API:** Virtual meeting generation
- **Communication Services:** Email, SMS, WhatsApp notifications

### 2.2 Product Functions

The system provides the following major functions:

1. **Information Presentation**
   - Display practitioner profile and credentials
   - Present service offerings with detailed descriptions
   - Showcase testimonials and healing philosophy
   - Provide educational content about Reiki and Angelic Healing
   - Blog section with spiritual insights and healing guidance

2. **Service Discovery and Booking**
   - Browse available services and pricing
   - View real-time availability calendar
   - Select service type and duration
   - Book appointments with instant confirmation
   - Join waitlists for fully booked sessions

3. **Payment Management**
   - Process secure online payments
   - Support multiple Indian payment methods (UPI, cards, net banking)
   - Offer package deals and memberships
   - Generate automated invoices
   - Handle refunds for cancellations

4. **Virtual Session Facilitation**
   - Auto-generate Zoom meeting links
   - Distribute secure meeting credentials
   - Support both individual and group sessions
   - Integrate with client calendars

5. **Communication and Engagement**
   - Send booking confirmations
   - Deliver session reminders (24 hours prior)
   - Provide post-session follow-up
   - Enable newsletter subscriptions
   - Facilitate client-practitioner messaging

6. **Administrative Operations**
   - Manage booking calendar
   - Track payment history
   - View client records
   - Generate business reports
   - Configure service offerings and pricing

### 2.3 User Classes and Characteristics

#### 2.3.1 Visitors (Anonymous Users)

**Characteristics:**
- First-time website visitors
- Exploring Reiki and Angelic Healing services
- May have varying levels of familiarity with energy healing
- Accessing from various devices (mobile, tablet, desktop)

**Technical Expertise:** Low to medium
**Frequency of Use:** Occasional to first-time
**Primary Functions:**
- Browse services and pricing
- Read about practitioner
- View testimonials
- Access contact information
- Sign up for newsletter

#### 2.3.2 Clients (Registered Users)

**Characteristics:**
- Interested in booking Reiki and Angelic Healing sessions
- Age range: 25-65 years (primary demographic)
- Located primarily in India
- Varying technical proficiency
- Seeking spiritual wellness, energy healing, and personal transformation

**Technical Expertise:** Low to medium
**Frequency of Use:** Regular (weekly/monthly)
**Primary Functions:**
- Create and manage account
- Book and pay for sessions
- Reschedule or cancel appointments
- Receive session links and reminders
- Purchase packages and memberships
- Access booking history
- Communicate with practitioner

**Privileges:**
- View personal booking history
- Update profile information
- Manage payment methods
- Access members-only content (if applicable)

#### 2.3.3 Practitioner/Admin

**Characteristics:**
- Single Reiki and Angelic Healing practitioner
- Business owner (Aura Divine)
- Requires simple, intuitive administrative tools
- Needs mobile access to manage bookings on-the-go

**Technical Expertise:** Medium
**Frequency of Use:** Daily
**Primary Functions:**
- Manage availability calendar
- Review and confirm bookings
- Process refunds/cancellations
- View client information
- Track payments and revenue
- Send communications to clients
- Configure services and pricing
- Generate business reports
- Manage website content

**Privileges:**
- Full administrative access
- All client functions
- Content management
- System configuration
- Financial reporting

### 2.4 Operating Environment

**Client-Side Requirements:**

- **Supported Browsers:**
  - Google Chrome (version 90+)
  - Mozilla Firefox (version 88+)
  - Safari (version 14+)
  - Microsoft Edge (version 90+)
  - Mobile browsers (iOS Safari, Chrome Mobile)

- **Devices:**
  - Desktop computers (Windows, macOS, Linux)
  - Tablets (iPad, Android tablets)
  - Smartphones (iOS 13+, Android 9+)
  - Minimum screen resolution: 320px width (mobile-first)

- **Internet Connection:**
  - Minimum 2 Mbps for browsing and booking
  - Recommended 5+ Mbps for optimal experience
  - Zoom session requirements: 10+ Mbps recommended

**Server-Side Environment:**

- **Hosting:** Wix Studio cloud infrastructure
- **Platform:** Wix Studio (Standard Plan)
- **Database:** Wix managed database system
- **CDN:** Wix global content delivery network

**Third-Party Integrations:**

- Zoom (video conferencing)
- Wix Payments / PayU India (payment processing)
- Email service provider (Wix integrated)
- SMS gateway (Wix integrated)
- WhatsApp Business API (if available through Wix)

### 2.5 Design and Implementation Constraints

#### 2.5.1 Platform Constraints

- **No-Code Platform:** Limited to Wix Studio's capabilities and built-in features
- **Template Restrictions:** Must work within Wix Studio's design framework
- **Code Limitations:** Custom functionality limited to Velo (Wix's development platform) if needed
- **Plugin Dependency:** Reliant on Wix App Market for extended features
- **Storage Limits:** Bound by Wix Standard Plan storage allocation

#### 2.5.2 Technical Constraints

- **Responsive Design:** Must be fully responsive across all device types
- **Browser Compatibility:** Must support all major modern browsers
- **Figma Import:** Design must be compatible with Wix Studio's Figma import feature
- **Zoom Integration:** Limited to Wix's native Zoom integration capabilities
- **Payment Gateway:** Must use Wix Payments or compatible gateway (PayU India)

#### 2.5.3 Regulatory Constraints

- **Data Privacy:** Must comply with GDPR for international clients
- **Payment Security:** PCI-DSS compliance through payment gateway
- **Health Information:** Adherence to privacy best practices for wellness information
- **Indian Regulations:** Compliance with Indian IT Act and payment regulations

#### 2.5.4 Business Constraints

- **Budget:** Limited to Wix Studio Standard Plan subscription costs
- **Single Practitioner:** System designed for one admin user
- **India-Focused:** Primary payment methods and communication for Indian market
- **Virtual Only:** No support for physical location-based sessions

#### 2.5.5 Aesthetic Constraints

- **Brand Identity:** Must reflect spiritual, calming, healing aesthetic
- **Color Palette:** Soft, serene colors appropriate for healing practice
- **Imagery:** Professional, peaceful, culturally appropriate visuals
- **Typography:** Readable, accessible fonts that convey tranquility

### 2.6 Assumptions and Dependencies

#### 2.6.1 Assumptions

1. **User Assumptions:**
   - Clients have access to internet-enabled devices
   - Clients have email addresses for communication
   - Clients have access to Zoom for virtual sessions
   - Clients have valid payment methods (UPI, cards, or net banking)
   - Users understand basic website navigation

2. **Technical Assumptions:**
   - Wix Studio platform maintains 99.9% uptime
   - Third-party integrations (Zoom, payment gateways) remain stable
   - Internet connectivity is generally reliable in target market
   - Mobile devices support modern web standards

3. **Business Assumptions:**
   - Practitioner can manage bookings within business hours
   - Demand will not exceed single practitioner's capacity
   - Virtual sessions are acceptable to target clientele
   - Pricing is competitive in the market

#### 2.6.2 Dependencies

1. **Platform Dependencies:**
   - **Wix Studio availability:** Continuous operation of Wix infrastructure
   - **Wix Bookings:** Functional scheduling system
   - **Wix Payments:** Active payment processing
   - **Wix hosting:** Reliable server infrastructure

2. **Integration Dependencies:**
   - **Zoom API:** Active and accessible for meeting creation
   - **PayU India:** Operational payment gateway for Indian transactions
   - **Email service:** Reliable email delivery
   - **SMS gateway:** Functional SMS delivery service
   - **WhatsApp Business:** Available messaging integration

3. **Third-Party Service Dependencies:**
   - Payment gateway uptime and processing
   - Zoom service availability during session times
   - Email deliverability
   - SMS/WhatsApp service reliability

4. **Content Dependencies:**
   - Practitioner-provided content (bio, service descriptions)
   - Professional imagery and photographs
   - Testimonials from clients
   - Educational content about Reiki

5. **Legal Dependencies:**
   - Valid business registration and licenses
   - Terms of service and privacy policy documentation
   - Payment gateway merchant account approval
   - Compliance certifications

---

## 3. System Features

### 3.1 Service Browsing and Information Display

**Priority:** High
**Description:** Allows visitors and clients to browse available Reiki healing services, view detailed information, and understand practitioner credentials.

#### 3.1.1 Functional Requirements

**FR-3.1.1:** The system shall display a home page featuring:
- Welcoming hero section with calming, angelic imagery
- Brief introduction to Reiki and Angelic Healing
- Overview of practitioner credentials
- Clear call-to-action buttons for booking
- Featured services carousel
- Client testimonials section
- Newsletter signup form

**FR-3.1.2:** The system shall provide an "About the Healer" page containing:
- Practitioner biography and photo
- Reiki and Angelic Healing certifications and credentials
- Healing philosophy and approach (dual modality)
- Professional training and experience in both healing modalities
- Personal healing journey (if applicable)

**FR-3.1.3:** The system shall display a "Services" page listing all available offerings:
- Reiki Healing Session
- Angelic Healing Session
- Money Healing
- Relationship Healing
- Energy Blockage Clearing
- Protection Healing
- Distance/Remote Healing
- Multi-session Packages

**FR-3.1.4:** For each service, the system shall display:
- Service name and duration
- Detailed description of what's included
- Benefits and outcomes
- Pricing (individual session and package options)
- Virtual session format information
- Prerequisites (if any)
- Booking availability indicator
- "Book Now" call-to-action button

**FR-3.1.5:** The system shall provide a searchable FAQ section addressing:
- What is Reiki and Angelic Healing?
- What to expect during a session
- How virtual sessions work
- Payment and cancellation policies
- Technical requirements for virtual sessions
- Package details

**FR-3.1.6:** The system shall include a Blog section featuring:
- Educational articles about Reiki and Angelic Healing
- Spiritual insights and guidance
- Healing tips and practices
- Client success stories
- Energy healing concepts
- Categorized blog posts
- Search functionality
- Archive by date/category

**FR-3.1.7:** The system shall display a "Contact" page with:
- Contact form for general inquiries
- Email address
- Phone number (optional)
- Social media links
- Business hours
- Response time expectations

**FR-3.1.8:** The system shall implement SEO optimization for all pages:
- Meta titles and descriptions
- Keyword optimization for Reiki, Angelic Healing, and energy healing terms
- Schema markup for local business
- Alt text for all images
- Clean URL structure

#### 3.1.2 Performance Requirements

- Pages shall load within 3 seconds on 4G mobile connection
- Images shall be optimized for web (compressed without quality loss)
- Content shall be cached for faster repeat visits
- Lazy loading shall be implemented for below-fold images

#### 3.1.3 Design Requirements

- Mobile-first responsive design
- Consistent navigation across all pages
- Soft, angelic, elegant color scheme (lavender, blush pink, gold accents)
- Elegant typography suitable for healing/spiritual brand (minimum 16px body text)
- Accessibility compliance (WCAG 2.1 Level AA)
- Professional imagery reflecting angelic healing and spiritual transformation
- Clear visual hierarchy
- Ample white space for calm, ethereal aesthetic

---

### 3.2 Appointment Booking System

**Priority:** Critical
**Description:** Core functionality enabling clients to view availability, select services, book appointments, and manage their schedules.

#### 3.2.1 Functional Requirements

**FR-3.2.1:** The system shall integrate Wix Bookings for all scheduling functionality.

**FR-3.2.2:** The system shall display a real-time availability calendar showing:
- Available time slots in client's local timezone
- Blocked/unavailable times (greyed out)
- Service duration indicators
- Next 90 days of availability

**FR-3.2.3:** The booking flow shall require clients to:
1. Select service type
2. Choose date from calendar
3. Select available time slot
4. Provide client information (name, email, phone)
5. Create account or login (if returning client)
6. Review booking details
7. Complete payment
8. Receive confirmation

**FR-3.2.4:** For first-time clients, the system shall:
- Offer guest checkout option
- Encourage account creation for future bookings
- Collect essential information: name, email, phone, brief health background
- Present terms of service and privacy policy for acceptance
- Provide option to subscribe to newsletter

**FR-3.2.5:** For returning clients, the system shall:
- Auto-fill personal information from profile
- Display booking history
- Suggest services based on previous bookings
- Show available package balance

**FR-3.2.6:** The system shall support booking modifications:
- Reschedule appointments up to 24 hours before session
- Show available alternative time slots
- Maintain payment status when rescheduling
- Cancel bookings with refund according to policy
- Send confirmation of changes

**FR-3.2.7:** The system shall implement booking rules:
- Minimum advance booking: 2 hours before session time
- Maximum advance booking: 90 days
- Cancellation deadline: 24 hours before session
- No-show policy: Mark and track no-shows
- Rescheduling limit: Up to 2 times per booking

**FR-3.2.8:** The system shall provide a Members Area with client dashboard showing:
- "My Bookings" page with upcoming appointments and countdown
- Past session history with details
- Package status and remaining balance
- Quick rebook option
- Session preparation resources
- Profile management (update personal info, preferences)
- Download invoices and receipts
- Client login/logout functionality (via Wix Members Area)

**FR-3.2.9:** The system shall handle timezone management:
- Detect client's timezone automatically
- Allow manual timezone selection
- Display all times in client's local timezone
- Store all bookings in UTC internally
- Handle daylight saving time transitions

#### 3.2.2 Integration Requirements

**FR-3.2.10:** The booking system shall integrate with:
- Payment processing (process payment before confirmation)
- Zoom meeting creation (generate link upon booking)
- Email notification system (send confirmations)
- SMS/WhatsApp (send reminders)
- Calendar systems (Google Calendar, iCal)

---

### 3.3 Payment Processing

**Priority:** Critical
**Description:** Secure online payment system supporting Indian payment methods, packages, memberships, and automated invoicing.

#### 3.3.1 Functional Requirements

**FR-3.3.1:** The system shall integrate with Wix Payments as primary payment gateway.

**FR-3.3.2:** The system shall integrate with PayU India for India-specific payment methods.

**FR-3.3.3:** The system shall accept the following payment methods:
- UPI (Google Pay, PhonePe, Paytm, etc.)
- Credit Cards (Visa, Mastercard, RuPay)
- Debit Cards (all major banks)
- Net Banking (all major Indian banks)
- Digital Wallets (if supported by gateway)

**FR-3.3.4:** The payment flow shall:
1. Display order summary with service details and total
2. Apply any discount codes or package credits
3. Show tax breakdown (if applicable)
4. Redirect to secure payment gateway
5. Process payment
6. Return to website with confirmation
7. Generate and send invoice

**FR-3.3.5:** The system shall support multi-session package purchases:
- Various package options for different healing modalities
- Package credits applied automatically at booking
- Display remaining balance in client dashboard
- Package validity: 6 months from purchase
- Package pricing with discounts compared to individual sessions

**FR-3.3.6:** The system shall implement pricing rules:
- Individual session pricing (full price)
- Package pricing (discounted per-session rate)
- Service-specific pricing

**FR-3.3.7:** The system shall generate automated invoices containing:
- Invoice number (sequential)
- Date and time of transaction
- Client details (name, email)
- Service details (name, date, time, duration)
- Price breakdown
- Taxes (if applicable)
- Payment method
- Transaction ID
- Aura Divine business details
- PDF download option

**FR-3.3.8:** The system shall handle refunds for cancellations:
- Full refund if cancelled 24+ hours before session
- 50% refund if cancelled 12-24 hours before
- No refund if cancelled less than 12 hours before or no-show
- Process refund to original payment method
- Send refund confirmation email
- Update booking status

**FR-3.3.9:** The system shall implement security measures:
- SSL/TLS encryption for all payment pages
- PCI-DSS compliance through payment gateway
- No storage of complete card details
- Secure tokenization for saved payment methods
- Fraud detection through gateway
- 3D Secure authentication for cards

**FR-3.3.10:** The system shall provide payment confirmation:
- Instant on-screen confirmation
- Email receipt with invoice attached
- SMS confirmation (optional)
- Transaction reference number
- Booking confirmation with payment status

**FR-3.3.11:** The system shall handle payment failures:
- Display clear error message
- Suggest troubleshooting steps
- Offer retry option
- Allow alternative payment method
- Hold booking for 15 minutes pending payment
- Release time slot if payment not completed

#### 3.3.2 Discount and Promotion Features

**FR-3.3.12:** The system shall support promotional codes:
- Percentage discount codes
- Fixed amount discount codes
- First-time client discounts
- Referral discounts
- Seasonal promotional codes
- Code validation and expiry management
- One-time or multi-use codes

**FR-3.3.13:** The system shall apply discounts in priority order:
1. Package credits (if available)
2. Promotional codes
3. Loyalty discounts

#### 3.3.3 Financial Reporting

**FR-3.3.14:** The system shall track for admin:
- Daily/weekly/monthly revenue
- Payment method breakdown
- Package sales vs individual sessions
- Refund history
- Outstanding balances
- Export financial data to CSV/Excel

---

### 3.4 Virtual Session Management

**Priority:** Critical
**Description:** Automated integration with Zoom to create, manage, and distribute virtual meeting links for all healing sessions.

#### 3.4.1 Functional Requirements

**FR-3.4.1:** The system shall integrate with Zoom using Wix's native Zoom integration.

**FR-3.4.2:** Upon successful booking and payment, the system shall:
- Automatically create a unique Zoom meeting
- Generate secure meeting link
- Create unique meeting ID and password
- Set meeting duration based on service type
- Configure meeting settings (waiting room, etc.)

**FR-3.4.3:** The system shall configure Zoom meetings with:
- **For individual healing sessions:**
  - Host video: On
  - Participant video: On
  - Waiting room: Enabled
  - Join before host: Disabled
  - Mute upon entry: No
  - Screen sharing: Host only

**FR-3.4.4:** The system shall distribute Zoom meeting details:
- Include link in booking confirmation email
- Include meeting ID and password
- Provide calendar invite with meeting link
- Send reminder 24 hours before with meeting link
- Send reminder 1 hour before with meeting link
- Display link in client dashboard under upcoming appointments

**FR-3.4.5:** The system shall handle rescheduled sessions:
- Update existing Zoom meeting time (if possible)
- Or create new meeting and cancel old meeting
- Send updated meeting details
- Update calendar invites

**FR-3.4.6:** The system shall handle cancelled sessions:
- Delete scheduled Zoom meeting
- Send cancellation confirmation
- Prevent access to meeting link

**FR-3.4.7:** The system shall provide technical support information:
- Link to Zoom system requirements
- Instructions for joining a Zoom meeting
- Troubleshooting guide for common issues
- Contact information for technical assistance
- Test meeting link option (if available)

**FR-3.4.8:** The system shall allow practitioner to:
- Access all scheduled Zoom meetings from admin dashboard
- Manually create ad-hoc meetings
- Access meeting recordings (if feature enabled)
- Generate new meeting links if needed

**FR-3.4.9:** The system shall implement security measures:
- Unique meeting IDs for each session
- Password protection for all meetings
- Waiting room to control entry
- Meeting expiry after scheduled end time
- No reuse of meeting links

#### 3.4.2 Calendar Integration

**FR-3.4.10:** The system shall generate calendar files (.ics) containing:
- Session date and time
- Service name and duration
- Zoom meeting link
- Practitioner contact information
- Session preparation notes
- Compatible with Google Calendar, Outlook, Apple Calendar

**FR-3.4.11:** The system shall sync with practitioner's calendar:
- Block booked time slots
- Prevent double-booking
- Display availability in real-time
- Option to sync with Google Calendar
- Manual override for special availability

---

### 3.5 Communication and Notifications

**Priority:** High
**Description:** Automated and manual communication system for client engagement, appointment reminders, and post-session follow-up.

#### 3.5.1 Email Communications

**FR-3.5.1:** The system shall send automated emails for:
- Booking confirmation
- Payment receipt
- Session reminders (24 hours and 1 hour before)
- Cancellation confirmation
- Rescheduling confirmation
- Refund confirmation
- Welcome email for new clients
- Newsletter (periodic)
- Waitlist notifications

**FR-3.5.2:** Booking confirmation email shall include:
- Service details (name, date, time, duration)
- Zoom meeting link and credentials
- Calendar invite attachment
- Payment confirmation and invoice
- Cancellation/rescheduling policy
- Session preparation instructions
- Contact information for questions

**FR-3.5.3:** Session reminder emails shall include:
- **24-hour reminder:**
  - Upcoming session details
  - Zoom meeting link
  - Preparation guidelines
  - Rescheduling option (if within policy)
- **1-hour reminder:**
  - Session starting soon notification
  - Quick access Zoom link
  - Contact information for issues

**FR-3.5.4:** Post-session follow-up email shall include:
- Thank you message
- Session recap or notes (optional)
- Aftercare recommendations
- Feedback request
- Booking link for next session
- Package/membership promotion (if applicable)

**FR-3.5.5:** The system shall provide newsletter functionality:
- Signup form on website
- Double opt-in confirmation
- Monthly or bi-weekly distribution
- Content: healing tips, upcoming events, testimonials
- Easy unsubscribe option
- Subscriber list management

**FR-3.5.6:** All emails shall feature:
- Professional branding and logo
- Consistent design template
- Clear subject lines
- Mobile-responsive design
- Unsubscribe link (for marketing emails)
- Contact information
- Privacy policy link

#### 3.5.2 SMS Notifications

**FR-3.5.7:** The system shall send SMS for:
- Booking confirmation (short version)
- Session reminder 24 hours before
- Last-minute changes or cancellations by practitioner

**FR-3.5.8:** SMS messages shall be:
- Concise and clear
- Include essential details only
- Provide link to full details online
- Limited to 160 characters per message
- Opt-in based (client preference)

**FR-3.5.9:** Sample SMS format:
```
Aura Divine Session Reminder: Your [Service Name] session is tomorrow at [Time].
Join: [Short Zoom Link].
Questions? Reply or call [Phone].
```

#### 3.5.3 WhatsApp Notifications (Optional Enhancement)

**FR-3.5.10:** If WhatsApp integration is available, the system may integrate WhatsApp Business API for:
- Automated booking confirmations with rich formatting
- Automated session reminders with embedded meeting links
- Quick replies for rescheduling
- Direct messaging with practitioner

**FR-3.5.11:** WhatsApp messages may support:
- Text with formatting
- Links (Zoom meeting)
- Images (calming graphics)
- Quick action buttons
- Opt-in based messaging

#### 3.5.4 Client Communication Preferences

**FR-3.5.12:** The system shall allow clients to set preferences for:
- Email notifications (on/off for each type)
- SMS notifications (on/off)
- WhatsApp notifications (on/off)
- Newsletter subscription
- Communication language (English/Hindi if applicable)
- Preferred contact time

**FR-3.5.13:** The system shall respect communication preferences:
- Store preferences in client profile
- Honor opt-out requests immediately
- Provide easy preference update option
- Required notifications (booking confirmations) override opt-out

#### 3.5.5 Manual Communication Tools

**FR-3.5.14:** The practitioner shall be able to:
- Send individual emails to specific clients
- Send bulk emails to all clients or filtered groups
- Create email templates for common messages
- Schedule emails for future delivery
- Track email open rates and clicks

**FR-3.5.15:** The system shall provide message templates for:
- Welcome message for new clients
- Seasonal greetings
- Special promotions
- Event announcements
- Educational content about Reiki

---

### 3.6 Client Management

**Priority:** High
**Description:** System for managing client accounts, profiles, booking history, and packages/memberships.

#### 3.6.1 Client Account Management

**FR-3.6.1:** The system shall provide client registration with:
- Email and password
- Or social login (Google, Facebook if available)
- Email verification required
- Secure password requirements (min 8 characters, mix of characters)
- Password reset functionality

**FR-3.6.2:** Client profile shall include:
- Personal information: Name, email, phone
- Optional: Date of birth, address
- Health background (brief questionnaire)
- Communication preferences
- Timezone settings
- Emergency contact (optional)

**FR-3.6.3:** The system shall allow clients to:
- Update profile information
- Change password
- Manage communication preferences
- View and download data (GDPR compliance)
- Delete account (with confirmation)

**FR-3.6.4:** The system shall track client history:
- Total sessions attended
- No-shows and cancellations
- Preferred session types
- Total spending
- Member since date
- Last session date

#### 3.6.2 Client Dashboard

**FR-3.6.5:** Client dashboard (Members Area) shall display:
- **My Bookings Page:**
  - Upcoming sessions with date, time, service type
  - Countdown timer
  - Quick access to Zoom link
  - Reschedule/cancel options
- **Past Sessions:**
  - Session history (last 12 months)
  - Session notes (if provided by practitioner)
  - Rebook option
- **Packages:**
  - Active packages with remaining balance
  - Purchase history
  - Quick purchase option
- **Account Information:**
  - Profile details with edit option
  - Saved payment methods
  - Communication preferences
  - Invoices and receipts

**FR-3.6.6:** The dashboard shall provide quick actions:
- "Book Next Session" button
- "Buy Package" button
- "Contact Practitioner" button
- "View Resources" button (educational content, blog)

#### 3.6.3 Package Management

**FR-3.6.7:** For package holders, the system shall:
- Display remaining session credits prominently
- Auto-apply credits at booking
- Show package expiry date with warnings as it approaches
- Allow manual credit adjustment by admin (for exceptions)
- Prevent use after expiry

#### 3.6.4 Client Data Security

**FR-3.6.8:** The system shall protect client data:
- Encrypted storage of personal information
- Secure password hashing
- HTTPS for all data transmission
- Access logging for admin actions
- Regular automated backups
- Compliance with GDPR and data protection laws

**FR-3.6.9:** The system shall provide GDPR compliance features:
- Clear privacy policy
- Consent for data collection
- Data export functionality
- Right to be forgotten (account deletion)
- Data retention policies
- Cookie consent banner

---

### 3.7 Practitioner Admin Dashboard

**Priority:** High
**Description:** Administrative interface for the practitioner to manage all aspects of the website, bookings, clients, and business operations.

#### 3.7.1 Dashboard Overview

**FR-3.7.1:** The admin dashboard shall display:
- **Today's Snapshot:**
  - Today's scheduled sessions
  - Upcoming session notifications
  - Recent bookings (last 24 hours)
  - Today's revenue
  - Pending actions (cancellations, inquiries)
- **Weekly/Monthly Overview:**
  - Total sessions this week/month
  - Revenue trends (graph)
  - New clients count
  - Package sales
  - Cancellation rate
- **Quick Actions:**
  - View calendar
  - Add manual booking
  - Process refund
  - Send message to client
  - Update availability

#### 3.7.2 Calendar and Booking Management

**FR-3.7.2:** The admin calendar shall:
- Display all bookings in calendar view (day/week/month)
- Color-code by service type
- Show client names on appointments
- Allow click-through to booking details
- Display blocked/unavailable times
- Sync with external calendar (Google Calendar)

**FR-3.7.3:** The system shall allow admin to:
- Manually create bookings (waive payment if needed)
- Block specific time slots (personal time off)
- Set recurring unavailability (weekly day off)
- Adjust service duration for specific appointments
- Add notes to bookings (visible to admin only)
- Mark sessions as completed
- Record no-shows

**FR-3.7.4:** For each booking, admin can view:
- Client full details
- Service type and duration
- Payment status and method
- Zoom meeting link
- Client's booking history
- Health background information
- Session notes (add/edit)
- Communication history

**FR-3.7.5:** The system shall allow admin to:
- Cancel bookings with automatic refund
- Reschedule on behalf of client
- Send custom messages to clients
- Mark sessions as no-show
- Waive cancellation fees (exceptions)

#### 3.7.3 Client Management

**FR-3.7.6:** The admin shall have access to client directory with:
- Searchable list of all clients
- Filter by: active, inactive, package holders
- Sort by: name, join date, total sessions, last session
- Client details page for each client

**FR-3.7.7:** For each client, admin can view:
- Complete profile information
- Booking history with dates and services
- Total revenue from client
- Package status
- Communication history
- Session notes across all sessions
- No-show and cancellation history

**FR-3.7.8:** The admin shall be able to:
- Add manual credits to client account
- Extend package expiry dates
- Grant complimentary sessions
- Add internal notes (not visible to client)
- Export client data
- Merge duplicate accounts

#### 3.7.4 Service and Pricing Management

**FR-3.7.9:** The admin shall be able to configure:
- Service names and descriptions
- Service duration
- Pricing for each service
- Package options and pricing
- Service availability (enable/disable)

**FR-3.7.10:** The admin shall be able to create promotional codes:
- Define code name
- Set discount type (percentage or fixed amount)
- Set expiry date
- Limit number of uses
- Apply to specific services or all
- Track code usage

#### 3.7.5 Availability Management

**FR-3.7.11:** The admin shall set:
- Weekly availability schedule
  - Days of week available
  - Operating hours for each day
  - Break times
- Custom availability for specific dates
- Time off / vacations (date ranges)
- Buffer time between sessions
- Maximum sessions per day

**FR-3.7.12:** The system shall automatically:
- Block time slots when capacity reached
- Prevent overlapping bookings
- Apply buffer times
- Show/hide availability based on advance booking rules

#### 3.7.6 Financial Reporting

**FR-3.7.13:** The system shall provide financial reports:
- **Revenue Reports:**
  - Daily/weekly/monthly revenue
  - Revenue by service type
  - Revenue by payment method
  - Package vs individual session revenue
- **Transaction Reports:**
  - All transactions with details
  - Refund history
  - Failed payment attempts
  - Outstanding balances
- **Sales Reports:**
  - Session bookings count
  - Package sales
  - Promotional code usage

**FR-3.7.14:** Reports shall be:
- Exportable to CSV/Excel
- Filterable by date range
- Printable
- Visualized with charts and graphs
- Shareable via email

#### 3.7.7 Content Management

**FR-3.7.15:** The admin shall be able to edit:
- Website pages (via Wix Studio editor)
- Service descriptions and pricing
- About page content
- FAQ entries
- Testimonials (add/remove/edit)
- Blog posts (if blog enabled)
- Images and media

**FR-3.7.16:** The admin shall manage:
- Newsletter content and scheduling
- Email templates for automated messages
- Promotional banners on website
- Pop-ups for special offers

#### 3.7.8 Communication Tools

**FR-3.7.17:** The admin shall have tools to:
- Send individual emails to clients
- Send bulk emails to filtered client groups
- View communication history with each client
- Create and save email templates
- Schedule emails for future sending
- Track email delivery and open rates

#### 3.7.9 Settings and Configuration

**FR-3.7.18:** The admin shall configure:
- Business information (name, address, contact)
- Payment settings (gateway, tax rates)
- Cancellation and refund policies
- Booking rules (advance time, limits)
- Notification settings
- Zoom integration settings
- Email/SMS preferences
- Privacy policy and terms of service

#### 3.7.10 Mobile Admin Access

**FR-3.7.19:** The admin dashboard shall be:
- Fully responsive and mobile-friendly
- Accessible via Wix mobile app
- Provide push notifications for new bookings
- Allow quick actions on mobile (confirm, cancel, reschedule)
- Display today's schedule prominently

---

## 4. External Interface Requirements

### 4.1 User Interfaces

#### 4.1.1 General UI Requirements

**UI-4.1.1:** All user interfaces shall follow a consistent design language:
- **Color Palette (Aura Divine Brand):**
  - Primary: Lavender (#C8A2D0 or similar soft lavender)
  - Secondary: Blush Pink (#F4C2C2 or soft rose)
  - Accent: Gold (#D4AF37 or #E8C547) for CTAs and highlights
  - Neutrals: White (#FFFFFF), off-white (#F9F9F9), light gray (#E8E8E8)
  - Text: Charcoal (#333333), soft gray (#666666)
- **Typography (Elegant & Spiritual):**
  - Headings: Elegant serif font (e.g., Cormorant Garamond, Playfair Display, Cinzel)
  - Body: Clean sans-serif font (e.g., Montserrat, Lato, Open Sans)
  - Minimum body text size: 16px
  - Line height: 1.6 for readability
- **Spacing:**
  - Generous padding and margins for ethereal feel
  - Ample white space for calm, angelic aesthetic
  - Consistent spacing scale (8px base unit)

**UI-4.1.2:** Navigation shall be:
- Sticky header with logo and main menu
- Mobile: Hamburger menu
- Clear visual indicator of current page
- Maximum 5-7 main navigation items
- Dropdown for sub-menus if needed
- Search functionality (optional)

**UI-4.1.3:** Call-to-action (CTA) buttons shall:
- Use accent color for primary actions
- Have clear, action-oriented text ("Book Now", "Get Started")
- Provide visual feedback on hover/click
- Be large enough for easy clicking (min 44x44px)
- Stand out from surrounding content

**UI-4.1.4:** Forms shall feature:
- Clear labels for all fields
- Helpful placeholder text
- Inline validation with error messages
- Required field indicators
- Progress indicators for multi-step forms
- Large, easy-to-tap inputs on mobile

**UI-4.1.5:** Images and media shall:
- Feature soft, angelic, calming imagery
- Depict angels, divine light, meditation, nature, peaceful scenes
- Include practitioner photo(s)
- Convey spiritual elegance and transformation
- Be culturally appropriate and inclusive
- Have proper alt text for accessibility
- Be optimized for web performance

#### 4.1.2 Responsive Design Requirements

**UI-4.1.6:** The website shall be fully responsive:
- **Mobile (320px - 767px):**
  - Single column layout
  - Stacked navigation
  - Full-width images
  - Touch-friendly buttons (min 44x44px)
  - Simplified navigation
- **Tablet (768px - 1023px):**
  - Two-column layouts where appropriate
  - Horizontal navigation possible
  - Optimized image sizes
- **Desktop (1024px+):**
  - Multi-column layouts
  - Full navigation menu
  - Large hero images
  - Sidebar elements

**UI-4.1.7:** Touch targets shall:
- Be minimum 44x44 pixels
- Have adequate spacing between them (8px minimum)
- Provide visual feedback on interaction

#### 4.1.3 Accessibility Requirements

**UI-4.1.8:** The website shall meet WCAG 2.1 Level AA standards:
- **Color Contrast:**
  - Text: Minimum 4.5:1 contrast ratio
  - Large text (18px+): Minimum 3:1
  - Interactive elements: Clear visual focus indicators
- **Keyboard Navigation:**
  - All functionality accessible via keyboard
  - Logical tab order
  - Skip navigation links
  - Visible focus indicators
- **Screen Reader Support:**
  - Semantic HTML structure
  - Proper heading hierarchy (H1 → H2 → H3)
  - Alt text for all images
  - ARIA labels where needed
  - Form labels associated with inputs
- **Content:**
  - Clear, simple language
  - Readable fonts
  - Sufficient line spacing
  - No content that flashes more than 3 times per second

#### 4.1.4 Page-Specific UI Requirements

**UI-4.1.9: Home Page**
- Hero section with full-width image/video
- Headline and subheadline
- Primary CTA button ("Book a Session")
- Featured services (3-4 cards)
- Brief about section with photo
- Testimonials carousel (3-5 testimonials)
- Newsletter signup form
- Footer with contact info and social links

**UI-4.1.10: Services Page**
- Grid or list view of all services
- Each service card with:
  - Service icon or image
  - Name and duration
  - Brief description
  - Price
  - "Learn More" and "Book Now" buttons
- Detailed service pages with:
  - Full description
  - What's included
  - Benefits
  - Pricing options
  - Testimonials specific to service
  - FAQ
  - Booking widget

**UI-4.1.11: Booking Interface**
- Step indicator (e.g., "Step 2 of 5")
- Calendar widget with clear date selection
- Time slot grid with availability indicators
- Service summary sidebar (always visible)
- "Back" and "Continue" buttons
- Save progress for logged-in users
- Mobile: Full-screen calendar on date selection

**UI-4.1.12: Client Dashboard**
- Welcome message with client name
- Card-based layout for sections:
  - Upcoming sessions
  - Past sessions
  - Packages & memberships
  - Profile
- Quick action buttons
- Visual indicators (badges for new features)
- Mobile: Collapsible sections

**UI-4.1.13: Admin Dashboard**
- Sidebar navigation for admin sections
- Dashboard widgets for key metrics
- Data tables with sorting and filtering
- Action buttons for common tasks
- Notification center
- Mobile: Bottom navigation bar

### 4.2 Hardware Interfaces

**HW-4.2.1:** The system shall not require any specific hardware beyond:
- Standard computing devices (desktop, laptop, tablet, smartphone)
- Internet-connected devices
- Web browser support
- Camera and microphone for Zoom sessions (client-side)

**HW-4.2.2:** For optimal Zoom session experience, clients should have:
- Webcam (built-in or external)
- Microphone (built-in or headset)
- Speakers or headphones
- Stable internet connection (10+ Mbps recommended)

**HW-4.2.3:** No server hardware is managed directly as the system is hosted on Wix cloud infrastructure.

### 4.3 Software Interfaces

#### 4.3.1 Wix Studio Platform

**SW-4.3.1:** Integration with Wix Studio:
- **Platform Version:** Wix Studio (Standard Plan)
- **Interface Method:** Wix Studio Editor and Wix Dashboard
- **Data Exchange:** Wix database and APIs
- **Functionality:**
  - Website hosting and content management
  - Template and design system
  - Figma import for design
  - Mobile responsive framework
  - SEO tools
  - Analytics integration

#### 4.3.2 Wix Bookings

**SW-4.3.2:** Integration with Wix Bookings:
- **Service:** Wix Bookings app
- **Interface Method:** Wix Bookings API
- **Data Exchange:** JSON via API
- **Functionality:**
  - Service catalog management
  - Availability calendar
  - Booking creation and management
  - Staff scheduling (single practitioner)
  - Booking confirmations

#### 4.3.3 Payment Gateway - Wix Payments

**SW-4.3.3:** Integration with Wix Payments:
- **Service:** Wix Payments
- **Interface Method:** Wix Payments API
- **Data Exchange:** Secure HTTPS, JSON
- **Functionality:**
  - Payment processing
  - Card tokenization
  - Transaction management
  - Refund processing
  - Payment history

#### 4.3.4 Payment Gateway - PayU India

**SW-4.3.4:** Integration with PayU India:
- **Service:** PayU India payment gateway
- **Interface Method:** PayU API integration
- **Data Exchange:** HTTPS POST/GET, JSON/XML
- **Functionality:**
  - UPI payments
  - Indian cards and net banking
  - Payment verification
  - Webhook notifications
  - Transaction status

**SW-4.3.5:** Payment gateway communication protocol:
- Request/response via HTTPS
- SHA-512 hash for security
- Real-time payment status updates
- Webhook callbacks for async notifications

#### 4.3.5 Zoom Integration

**SW-4.3.6:** Integration with Zoom:
- **Service:** Zoom Meetings API
- **Interface Method:** REST API via Wix integration
- **Data Exchange:** JSON via HTTPS
- **Authentication:** OAuth 2.0 or JWT
- **Functionality:**
  - Create scheduled meetings
  - Update meeting details
  - Delete meetings
  - Retrieve meeting info
  - Generate meeting links

**SW-4.3.7:** Zoom meeting creation request:
```json
{
  "topic": "Aura Divine - [Service Name] - [Client Name]",
  "type": 2,
  "start_time": "2025-12-25T10:00:00Z",
  "duration": 60,
  "timezone": "Asia/Kolkata",
  "settings": {
    "host_video": true,
    "participant_video": true,
    "join_before_host": false,
    "mute_upon_entry": false,
    "waiting_room": true,
    "audio": "both"
  }
}
```

#### 4.3.6 Email Service

**SW-4.3.8:** Email service integration:
- **Service:** Wix integrated email or external SMTP
- **Interface Method:** SMTP or email API
- **Protocols:** SMTP, TLS/SSL
- **Functionality:**
  - Transactional emails (confirmations, receipts)
  - Marketing emails (newsletters)
  - Email templates
  - Delivery tracking

#### 4.3.7 SMS Gateway

**SW-4.3.9:** SMS service integration:
- **Service:** SMS gateway (via Wix or third-party like Twilio)
- **Interface Method:** REST API
- **Data Exchange:** JSON via HTTPS
- **Functionality:**
  - Send SMS notifications
  - Delivery status tracking
  - Opt-in/opt-out management

#### 4.3.8 WhatsApp Business

**SW-4.3.10:** WhatsApp integration (if available):
- **Service:** WhatsApp Business API
- **Interface Method:** API integration
- **Data Exchange:** JSON via HTTPS
- **Functionality:**
  - Send template messages
  - Deliver notifications
  - Two-way messaging

#### 4.3.9 Calendar Integration

**SW-4.3.11:** Calendar system integration:
- **Services:** Google Calendar, iCal, Outlook
- **Interface Method:** iCalendar (.ics) file format
- **Data Exchange:** iCal standard format
- **Functionality:**
  - Generate calendar invites
  - Sync with practitioner calendar
  - Update event details

#### 4.3.10 Analytics

**SW-4.3.12:** Analytics integration:
- **Services:** Wix Analytics, Google Analytics (optional)
- **Interface Method:** JavaScript tracking code
- **Data Exchange:** Event tracking, page views
- **Functionality:**
  - Website traffic monitoring
  - User behavior analysis
  - Conversion tracking
  - Revenue tracking

### 4.4 Communication Interfaces

**COM-4.4.1:** All communication shall use secure protocols:
- **HTTPS:** All web traffic encrypted with TLS 1.2 or higher
- **SSL Certificates:** Valid SSL certificate for domain
- **API Communication:** REST APIs using HTTPS
- **Websockets:** Secure WebSocket (WSS) if real-time features needed

**COM-4.4.2:** Email communication:
- **Protocol:** SMTP over TLS
- **Ports:** 587 (TLS) or 465 (SSL)
- **Authentication:** Required for sending
- **SPF/DKIM:** Configured for domain authentication

**COM-4.4.3:** Payment communication:
- **Protocol:** HTTPS with TLS 1.2+
- **Encryption:** 256-bit encryption
- **PCI-DSS:** Compliant through payment gateway
- **Tokenization:** Card details tokenized, not stored

**COM-4.4.4:** API rate limits:
- **Zoom API:** Respect Zoom's rate limits (varies by endpoint)
- **Payment Gateway:** Adhere to gateway rate limits
- **Wix API:** Follow Wix API usage policies

**COM-4.4.5:** Data formats:
- **API Requests/Responses:** JSON
- **Payment Gateway:** JSON or XML based on gateway
- **Email:** HTML and plain text versions
- **SMS:** Plain text, 160 characters max
- **Calendar:** iCalendar (.ics) format

**COM-4.4.6:** Error handling:
- Graceful error messages for API failures
- Retry logic for transient failures
- Logging of communication errors
- User-friendly error messages (no technical jargon)

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

**PERF-5.1.1: Page Load Time**
- All pages shall load within 3 seconds on a 4G mobile connection (minimum 10 Mbps)
- Initial page render (First Contentful Paint) shall occur within 1.5 seconds
- Time to Interactive (TTI) shall be under 4 seconds

**PERF-5.1.2: Image Optimization**
- Images shall be compressed to reduce file size without significant quality loss
- Responsive images shall be served based on device resolution
- Lazy loading shall be implemented for below-the-fold images
- WebP format with fallback to JPEG/PNG

**PERF-5.1.3: Booking System Performance**
- Calendar availability shall load within 2 seconds
- Booking form submission shall complete within 3 seconds
- Real-time availability updates shall occur within 1 second

**PERF-5.1.4: Payment Processing**
- Payment gateway redirect shall occur within 2 seconds
- Payment confirmation shall be received within 5 seconds after successful payment
- Payment failure detection within 5 seconds

**PERF-5.1.5: Scalability**
- System shall support up to 1000 active clients
- System shall handle up to 50 concurrent users browsing
- System shall process up to 10 simultaneous bookings
- Database queries shall execute in under 1 second

**PERF-5.1.6: Email/SMS Delivery**
- Booking confirmations shall be sent within 30 seconds of booking
- Reminder emails/SMS shall be sent exactly 24 hours and 1 hour before sessions
- Bulk emails shall be sent at rate of at least 100/hour

**PERF-5.1.7: Admin Dashboard**
- Dashboard shall load within 3 seconds
- Reports shall generate within 5 seconds for up to 1 year of data
- Calendar view shall render within 2 seconds for 1 month view

**PERF-5.1.8: Mobile Performance**
- Mobile site shall achieve Google PageSpeed score of 80+ (mobile)
- Minimize JavaScript execution time
- Reduce render-blocking resources
- Optimize CSS delivery

### 5.2 Security Requirements

**SEC-5.2.1: Data Encryption**
- All data transmission shall use HTTPS with TLS 1.2 or higher
- Passwords shall be hashed using bcrypt or equivalent
- Sensitive data at rest shall be encrypted
- Payment information shall be tokenized, never stored directly

**SEC-5.2.2: Authentication**
- Multi-factor authentication (MFA) option for admin account
- Strong password requirements:
  - Minimum 8 characters
  - Mix of uppercase, lowercase, numbers
  - Special characters recommended
- Account lockout after 5 failed login attempts
- Password reset via email with time-limited token

**SEC-5.2.3: Authorization**
- Role-based access control (Visitor, Client, Admin)
- Clients can only access their own data
- Admin has full access
- Session timeout after 30 minutes of inactivity
- Secure session management

**SEC-5.2.4: Payment Security**
- PCI-DSS compliance via payment gateway
- No storage of full card numbers
- CVV never stored
- 3D Secure authentication for card payments
- Fraud detection through payment gateway

**SEC-5.2.5: Data Privacy**
- Privacy policy clearly displayed
- Cookie consent banner
- Client data accessible only to client and admin
- Data export functionality (GDPR)
- Account deletion option with data purge
- Anonymization of deleted client data in reports

**SEC-5.2.6: Protection Against Attacks**
- Protection against SQL injection (via Wix platform)
- XSS (Cross-Site Scripting) prevention
- CSRF (Cross-Site Request Forgery) protection
- Rate limiting to prevent brute force attacks
- CAPTCHA on forms to prevent spam/bots

**SEC-5.2.7: Backup and Recovery**
- Automated daily backups of all data
- Backups stored securely and encrypted
- 30-day backup retention
- Ability to restore from backup within 24 hours
- Backup verification monthly

**SEC-5.2.8: Admin Security**
- Separate admin login page (not publicly linked)
- Activity logging for all admin actions
- IP restriction option for admin access (optional)
- Regular security updates via Wix platform

**SEC-5.2.9: Zoom Meeting Security**
- Unique meeting IDs for each session
- Password protection for all meetings
- Waiting room enabled
- Meeting links expire after session end time
- No meeting ID reuse

### 5.3 Usability Requirements

**USE-5.3.1: Ease of Use**
- New visitors shall be able to browse services without account creation
- Booking process shall be completable in 5 steps or fewer
- Average user shall complete a booking in under 5 minutes
- Navigation shall be intuitive without requiring instructions

**USE-5.3.2: Learning Curve**
- First-time users shall be able to book without assistance
- Admin shall be able to perform basic tasks after 1 hour of training
- Help documentation shall be available for all features
- Tooltips for complex features

**USE-5.3.3: Error Prevention and Handling**
- Form validation shall occur in real-time (inline)
- Clear error messages in plain language
- Suggestions for fixing errors
- Confirmation dialogs for destructive actions (cancel booking, delete account)
- Undo option where applicable

**USE-5.3.4: Consistency**
- Consistent terminology throughout the site
- Consistent button placement and styling
- Consistent navigation across all pages
- Consistent feedback for user actions

**USE-5.3.5: Accessibility**
- WCAG 2.1 Level AA compliance
- Screen reader compatibility
- Keyboard navigation for all functions
- Color contrast meeting standards
- Scalable text without breaking layout

**USE-5.3.6: Help and Documentation**
- FAQ page addressing common questions
- Help icons with tooltips
- Contact form for support
- How-to guides for booking and Zoom access
- Video tutorial for first-time users (optional)

**USE-5.3.7: Mobile Usability**
- Touch-friendly interface
- Minimal typing required on mobile
- Autofill support for forms
- Mobile-optimized checkout
- Zoom link easily accessible on mobile

**USE-5.3.8: Feedback and Confirmation**
- Visual feedback for all user actions (button clicks, form submissions)
- Success messages after completing actions
- Loading indicators during processing
- Progress indicators for multi-step processes

### 5.4 Reliability Requirements

**REL-5.4.1: Availability**
- System uptime shall be 99.9% (Wix SLA)
- Planned maintenance windows communicated 7 days in advance
- Maximum downtime of 8.76 hours per year
- Redundancy through Wix cloud infrastructure

**REL-5.4.2: Fault Tolerance**
- Graceful degradation if third-party services fail:
  - If Zoom API down: Display meeting creation pending message
  - If payment gateway down: Display maintenance message with retry option
  - If email service down: Queue messages for retry
- Automatic retry for failed API calls (3 attempts)
- Error logging for troubleshooting

**REL-5.4.3: Data Integrity**
- Database transactions shall be ACID compliant (via Wix)
- No booking conflicts (double-booking prevention)
- Payment and booking status always in sync
- Data validation on all inputs
- Regular data integrity checks

**REL-5.4.4: Recovery**
- Recovery Time Objective (RTO): 4 hours maximum
- Recovery Point Objective (RPO): 24 hours (daily backups)
- Disaster recovery plan documented
- Backup restoration tested quarterly

**REL-5.4.5: Consistency**
- Real-time availability updates
- Immediate payment confirmation
- Synchronized calendar across all views
- Consistent data across client and admin views

### 5.5 Compliance Requirements

**COMP-5.5.1: GDPR Compliance**
- Clear privacy policy displayed
- Explicit consent for data collection
- Right to access personal data
- Right to data portability (export)
- Right to erasure (delete account)
- Right to rectification (update data)
- Data processing records maintained
- Data breach notification procedures

**COMP-5.5.2: Payment Regulations**
- PCI-DSS compliance through payment gateway
- Compliance with Indian payment regulations
- Secure handling of financial data
- Clear pricing and refund policies
- Proper invoicing with all required details

**COMP-5.5.3: Accessibility Compliance**
- WCAG 2.1 Level AA compliance
- Accessibility statement on website
- Regular accessibility audits

**COMP-5.5.4: Cookie Compliance**
- Cookie consent banner
- Clear explanation of cookies used
- Option to reject non-essential cookies
- Cookie policy page

**COMP-5.5.5: Terms and Conditions**
- Clear terms of service
- Cancellation and refund policy
- Service limitations and disclaimers
- Liability limitations
- User responsibilities

**COMP-5.5.6: Business Compliance**
- Proper business registration
- Tax compliance (GST if applicable)
- Professional liability insurance (recommended)
- Adherence to ethical healing practices

**COMP-5.5.7: Data Localization**
- Compliance with Indian data localization requirements
- Data residency options if required by law
- Cross-border data transfer compliance

---

## 6. Data Requirements

### 6.1 Data Models

#### 6.1.1 Client Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| ClientID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| Email | String | Client email address | Yes | Unique, Valid email format |
| PasswordHash | String | Hashed password | Yes | Bcrypt hash |
| FirstName | String | Client first name | Yes | Max 50 characters |
| LastName | String | Client last name | Yes | Max 50 characters |
| Phone | String | Contact number | Yes | Valid phone format |
| DateOfBirth | Date | Birth date | No | Past date |
| Address | Text | Full address | No | Max 250 characters |
| Timezone | String | Preferred timezone | No | IANA timezone format |
| HealthBackground | Text | Brief health info | No | Max 500 characters |
| EmergencyContact | String | Emergency contact info | No | Max 150 characters |
| CreatedDate | DateTime | Account creation date | Yes | Auto-generated |
| LastLoginDate | DateTime | Last login timestamp | No | Auto-updated |
| EmailVerified | Boolean | Email verification status | Yes | Default: false |
| AccountStatus | Enum | Account status | Yes | Active/Inactive/Suspended |
| PreferEmailNotif | Boolean | Email notifications | Yes | Default: true |
| PreferSMSNotif | Boolean | SMS notifications | Yes | Default: false |
| PreferWhatsAppNotif | Boolean | WhatsApp notifications | Yes | Default: false |
| NewsletterSubscribed | Boolean | Newsletter subscription | Yes | Default: false |

#### 6.1.2 Service Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| ServiceID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| ServiceName | String | Name of service | Yes | Max 100 characters |
| Description | Text | Detailed description | Yes | Max 1000 characters |
| ShortDescription | String | Brief description | Yes | Max 200 characters |
| DurationMinutes | Integer | Session duration | Yes | Positive integer |
| Price | Decimal | Base price | Yes | Positive, 2 decimal places |
| ServiceType | Enum | Type of service | Yes | Reiki/Angelic/Money/Relationship/EnergyBlockage/Protection/Distance |
| MaxParticipants | Integer | Max for sessions | No | Default: 1 |
| IsActive | Boolean | Service availability | Yes | Default: true |
| ImageURL | String | Service image | No | Valid URL |
| Prerequisites | Text | Required prerequisites | No | Max 500 characters |

#### 6.1.3 Booking Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| BookingID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| ClientID | Integer | Foreign key to Client | Yes | Foreign Key |
| ServiceID | Integer | Foreign key to Service | Yes | Foreign Key |
| BookingDate | DateTime | Date and time of session | Yes | Future date/time |
| DurationMinutes | Integer | Session duration | Yes | Positive integer |
| BookingStatus | Enum | Status of booking | Yes | Pending/Confirmed/Cancelled/Completed/NoShow |
| CreatedDate | DateTime | Booking creation date | Yes | Auto-generated |
| PaymentStatus | Enum | Payment status | Yes | Pending/Completed/Refunded/Failed |
| ZoomMeetingID | String | Zoom meeting ID | No | Generated by Zoom |
| ZoomMeetingLink | String | Zoom meeting URL | No | Valid URL |
| ZoomPassword | String | Zoom password | No | Encrypted |
| CancellationDate | DateTime | Cancellation timestamp | No | Set when cancelled |
| CancellationReason | Text | Reason for cancellation | No | Max 500 characters |
| Notes | Text | Admin notes | No | Max 1000 characters |
| ReminderSent24h | Boolean | 24h reminder sent | Yes | Default: false |
| ReminderSent1h | Boolean | 1h reminder sent | Yes | Default: false |

#### 6.1.4 Payment Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| PaymentID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| BookingID | Integer | Foreign key to Booking | No | Foreign Key |
| PackageID | Integer | Foreign key to Package | No | Foreign Key |
| ClientID | Integer | Foreign key to Client | Yes | Foreign Key |
| Amount | Decimal | Payment amount | Yes | Positive, 2 decimal places |
| Currency | String | Currency code | Yes | Default: INR |
| PaymentMethod | Enum | Method used | Yes | UPI/Card/NetBanking/Wallet |
| PaymentGateway | Enum | Gateway used | Yes | WixPayments/PayU |
| TransactionID | String | Gateway transaction ID | Yes | Unique |
| PaymentStatus | Enum | Payment status | Yes | Pending/Success/Failed/Refunded |
| PaymentDate | DateTime | Payment timestamp | Yes | Auto-generated |
| RefundAmount | Decimal | Refunded amount | No | Positive, 2 decimal places |
| RefundDate | DateTime | Refund timestamp | No | Set when refunded |
| InvoiceNumber | String | Invoice number | Yes | Unique, Sequential |
| InvoiceURL | String | PDF invoice link | No | Valid URL |

#### 6.1.5 Package Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| PackageID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| ClientID | Integer | Foreign key to Client | Yes | Foreign Key |
| PackageType | Enum | Package type | Yes | MultiSession (Various session counts) |
| TotalSessions | Integer | Total sessions in package | Yes | Positive integer |
| UsedSessions | Integer | Sessions already used | Yes | Default: 0 |
| RemainingBalance | Integer | Sessions remaining | Yes | Calculated field |
| PurchaseDate | DateTime | Purchase date | Yes | Auto-generated |
| ExpiryDate | DateTime | Expiry date | Yes | 6 months from purchase |
| PurchasePrice | Decimal | Amount paid | Yes | Positive, 2 decimal places |
| IsActive | Boolean | Package active status | Yes | Default: true |

#### 6.1.6 PromotionalCode Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| PromoCodeID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| Code | String | Promo code string | Yes | Unique, Uppercase |
| DiscountType | Enum | Type of discount | Yes | Percentage/FixedAmount |
| DiscountValue | Decimal | Discount value | Yes | Positive |
| ExpiryDate | DateTime | Expiration date | No | Future date |
| MaxUses | Integer | Maximum total uses | No | Positive integer |
| CurrentUses | Integer | Times already used | Yes | Default: 0 |
| ApplicableServices | JSON | Service IDs eligible | No | Array of ServiceIDs |
| IsActive | Boolean | Code active status | Yes | Default: true |
| CreatedDate | DateTime | Creation date | Yes | Auto-generated |

#### 6.1.7 Communication Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| CommunicationID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| ClientID | Integer | Foreign key to Client | Yes | Foreign Key |
| BookingID | Integer | Foreign key to Booking | No | Foreign Key |
| CommunicationType | Enum | Type of communication | Yes | Email/SMS/WhatsApp |
| MessageType | Enum | Purpose of message | Yes | Confirmation/Reminder/Followup/Marketing |
| Subject | String | Email subject / SMS preview | No | Max 200 characters |
| MessageBody | Text | Full message content | Yes | Max 5000 characters |
| SentDate | DateTime | Send timestamp | Yes | Auto-generated |
| DeliveryStatus | Enum | Delivery status | Yes | Pending/Sent/Delivered/Failed |
| OpenedDate | DateTime | Email open timestamp | No | For emails only |

#### 6.1.8 Availability Entity

| Field | Type | Description | Required | Constraints |
|-------|------|-------------|----------|-------------|
| AvailabilityID | Integer | Unique identifier | Yes | Primary Key, Auto-increment |
| DayOfWeek | Enum | Day of the week | Yes | Mon-Sun |
| StartTime | Time | Start of availability | Yes | Valid time |
| EndTime | Time | End of availability | Yes | After StartTime |
| IsRecurring | Boolean | Repeats weekly | Yes | Default: true |
| EffectiveDate | Date | Specific date (if not recurring) | No | Future date |
| IsBlocked | Boolean | Time blocked/unavailable | Yes | Default: false |
| BlockReason | String | Reason for blocking | No | Max 200 characters |

### 6.2 Data Storage

**DS-6.2.1: Database System**
- Platform: Wix managed database (cloud-based)
- Database type: NoSQL or relational (Wix-managed)
- Storage location: Wix cloud infrastructure
- Redundancy: Automatic replication across Wix servers
- Scalability: Auto-scaling based on usage

**DS-6.2.2: Data Volume Estimates**
- Clients: ~500-1000 records
- Services: ~10-15 records
- Bookings: ~200-500 per month
- Payments: ~200-500 per month
- Communications: ~1000-2000 per month
- Total database size estimate: <500 MB for first year

**DS-6.2.3: File Storage**
- Images: Wix media manager
- PDFs (invoices): Wix document storage
- Backups: Wix automated backup system
- Media optimization: Automatic via Wix CDN

**DS-6.2.4: Caching**
- Page caching: Wix CDN
- Database query caching: Wix platform
- Asset caching: Browser cache + CDN
- Cache invalidation: Automatic on content update

**DS-6.2.5: Data Security**
- Encryption at rest: Wix platform encryption
- Encryption in transit: TLS 1.2+
- Access control: Role-based permissions
- Audit logging: Admin action logs

### 6.3 Data Retention

**DR-6.3.1: Active Data Retention**
- Client accounts: Retained while account is active
- Bookings: Retained indefinitely for historical records
- Payments: Retained for 7 years (tax/legal compliance)
- Communications: Retained for 2 years
- Session notes: Retained while client is active

**DR-6.3.2: Inactive Data Handling**
- Clients inactive for 3 years: Receive reactivation email
- Clients inactive for 4 years: Account deactivation notice
- Clients inactive for 5 years: Data archival or anonymization
- Client request for deletion: Honored within 30 days (GDPR)

**DR-6.3.3: Deleted Data Handling**
- Soft delete: Initial deletion (data marked as deleted)
- Hard delete: After 30-day grace period
- Anonymization: Personal data anonymized for retained bookings/payments
- Backup purging: Removed from backups after retention period

**DR-6.3.4: Backup Retention**
- Daily backups: Retained for 30 days
- Monthly backups: Retained for 1 year
- Annual backups: Retained for 7 years (legal compliance)
- Backup location: Secure Wix infrastructure

**DR-6.3.5: Legal Hold**
- Data subject to legal proceedings: Retained until resolution
- Payment disputes: Retained until dispute closed
- Fraud investigation: Retained as needed
- Tax audits: 7-year retention for financial records

**DR-6.3.6: Data Export and Portability**
- Clients can request data export anytime
- Export format: JSON or CSV
- Delivery within 30 days of request
- Includes all personal data and history

---

## 7. Appendices

### 7.1 Appendix A: Wix Studio Platform Specifications

#### A.1 Wix Studio Standard Plan Features

**Included Features:**
- Custom domain connection
- Wix branding removal
- Premium support
- 35 GB storage
- 50 GB bandwidth
- Unlimited pages
- Free SSL certificate
- Google Analytics integration
- Social media integration
- Mobile-optimized site
- Wix Logo Maker

**Wix Bookings Integration:**
- Service catalog
- Staff management (single staff)
- Booking calendar
- Automatic confirmations
- Payment processing integration
- Video conference integration
- Google Calendar sync
- Custom booking forms

**Wix Payments:**
- Accept credit/debit cards
- Local payment methods
- Recurring payments
- Automatic tax calculation
- Invoice generation
- Payment management
- Fraud protection
- PCI compliance

**Figma to Wix:**
- Import Figma designs
- Responsive breakpoint preservation
- Component conversion
- Style system import
- Interactive prototype support

#### A.2 Platform Limitations

**Design Limitations:**
- Template-based framework
- Limited custom code (Velo for advanced features)
- Wix editor constraints
- Pre-defined component library

**Functional Limitations:**
- Single practitioner focus (Wix Bookings limitation on Standard)
- Limited advanced CRM features
- Analytics limited to Wix + Google Analytics
- Email automation through Wix Automations

**Integration Limitations:**
- Third-party integrations via Wix App Market
- API access through Velo (Wix's dev platform)
- Custom integrations may require coding

**Scalability Limitations:**
- Bandwidth limits (50 GB/month on Standard)
- Storage limits (35 GB)
- May need upgrade to Business & eCommerce plan for growth

### 7.2 Appendix B: User Journey Maps

#### B.1 First-Time Visitor Journey

**Scenario:** Visitor discovers Aura Divine website and books first session

1. **Discovery:**
   - Arrives at homepage (search engine, social media, referral)
   - Sees hero section with soft, angelic imagery
   - Reads brief intro about Reiki and Angelic Healing and practitioner

2. **Exploration:**
   - Clicks "Services" to learn about offerings
   - Reads detailed service descriptions (Reiki, Angelic Healing, Money Healing, etc.)
   - Views testimonials
   - Checks "About" page to learn about practitioner's dual healing modality
   - Browses blog for spiritual insights

3. **Decision:**
   - Decides to book a healing session (e.g., Angelic Healing)
   - Clicks "Book Now" button

4. **Booking:**
   - Selects service type
   - Chooses date and time from calendar
   - Fills in personal information (name, email, phone)
   - Provides brief health background
   - Creates account (optional, recommended)
   - Reviews booking summary

5. **Payment:**
   - Reviews total amount
   - Selects payment method (UPI)
   - Redirected to PayU India
   - Completes payment
   - Returns to website

6. **Confirmation:**
   - Sees confirmation screen
   - Receives email with:
     - Booking details
     - Zoom meeting link
     - Calendar invite
     - Invoice
   - Receives SMS confirmation

7. **Preparation:**
   - 24 hours before: Receives reminder email and SMS
   - 1 hour before: Receives final reminder
   - Reviews session preparation guidelines

8. **Session:**
   - Clicks Zoom link
   - Attends virtual healing session

9. **Post-Session:**
   - Receives follow-up email with aftercare tips
   - Invited to book next session
   - Asked for feedback/testimonial
   - Can read blog for continued spiritual guidance

#### B.2 Returning Client Journey

**Scenario:** Client with package credits books another session

1. **Login:**
   - Visits Aura Divine website
   - Clicks "Login" to access Members Area
   - Enters credentials

2. **Members Dashboard:**
   - Views "My Bookings" page with upcoming sessions (if any)
   - Views package balance (e.g., "3 sessions remaining")
   - Sees quick "Book Next Session" button
   - Can access past session history and profile management

3. **Booking:**
   - Clicks "Book Next Session"
   - Selects service (or auto-selected if same as before)
   - Chooses date and time
   - Reviews booking summary (package credit applied)
   - Confirms booking (no payment needed)

4. **Confirmation:**
   - Receives confirmation email and SMS
   - Zoom link provided
   - Package balance updated (2 sessions remaining)

5. **Session and Follow-up:**
   - Attends session
   - Receives follow-up

#### B.3 Admin Daily Workflow

**Scenario:** Aura Divine practitioner manages daily bookings

1. **Morning Check:**
   - Logs into admin dashboard
   - Reviews today's healing session schedule
   - Checks new bookings from previous day
   - Confirms all sessions have Zoom links

2. **Client Communication:**
   - Reviews any client inquiries from contact form
   - Responds to messages
   - Sends personalized message to first-time client

3. **Session Management:**
   - Before each session: Reviews client notes/health background
   - Joins Zoom meeting 5 minutes early
   - Conducts Reiki or Angelic Healing session
   - After session: Adds session notes in client record

4. **Administrative Tasks:**
   - Marks completed sessions
   - Processes any cancellation requests
   - Approves refunds if applicable
   - Reviews financial report (weekly)

5. **Content & Marketing Activities:**
   - Posts testimonial received today
   - Schedules social media post
   - Writes new blog post about healing concepts
   - Drafts newsletter content (monthly)

### 7.3 Appendix C: Payment Gateway Integration

#### C.1 Wix Payments Integration

**Payment Flow:**
1. Client completes booking form
2. Redirected to Wix Payments checkout
3. Enters payment details (card, UPI, etc.)
4. Payment processed by Wix Payments
5. Confirmation returned to website
6. Booking confirmed, invoice generated

**Supported Payment Methods (Wix Payments):**
- Visa, Mastercard, American Express
- Indian debit cards
- UPI (via Razorpay or similar integration)
- Net Banking (select banks)

**Transaction Fees:**
- Variable based on Wix Payments agreement
- Typically 2.9% + currency conversion fees for international

**Integration Method:**
- Native Wix integration via Wix Bookings
- Automatic payment collection at booking
- Webhook notifications for payment events

#### C.2 PayU India Integration

**Payment Flow:**
1. Client completes booking form
2. Redirected to PayU payment page
3. Selects payment method (UPI, cards, net banking, wallets)
4. Completes payment on PayU interface
5. PayU processes payment
6. Redirects back to website with transaction status
7. Webhook confirms payment status
8. Booking confirmed

**Supported Payment Methods (PayU India):**
- Credit Cards: Visa, Mastercard, RuPay, Diners, Amex
- Debit Cards: All major banks
- Net Banking: 50+ banks including SBI, HDFC, ICICI, Axis
- UPI: All UPI apps (Google Pay, PhonePe, Paytm, BHIM)
- Wallets: Paytm, Mobikwik, Freecharge, Ola Money
- EMI options (for higher amounts)
- Pay Later options (LazyPay, Simpl)

**Transaction Fees:**
- Typically 2-3% per transaction
- Varies by payment method
- No setup fees

**Integration Method:**
- REST API integration via Velo (Wix custom code)
- Secure hash (SHA-512) for transaction verification
- Webhook for asynchronous status updates

**Integration Code Example (Conceptual):**
```javascript
// Backend (Velo)
import { fetch } from 'wix-fetch';

export async function initiatePayUPayment(bookingDetails) {
  const payuData = {
    key: 'MERCHANT_KEY',
    txnid: generateTransactionID(),
    amount: bookingDetails.amount,
    productinfo: bookingDetails.serviceName,
    firstname: bookingDetails.clientName,
    email: bookingDetails.clientEmail,
    phone: bookingDetails.clientPhone,
    surl: 'https://yoursite.com/payment-success',
    furl: 'https://yoursite.com/payment-failure',
    hash: generateHash(/* parameters */)
  };

  // Redirect to PayU
  return payuData;
}

export function verifyPayment(payuResponse) {
  // Verify hash from PayU response
  const calculatedHash = generateHash(/* response params */);
  return calculatedHash === payuResponse.hash;
}
```

#### C.3 Payment Security

**Security Measures:**
- PCI-DSS Level 1 compliance (via gateways)
- Tokenization of card details
- 3D Secure authentication (OTP for cards)
- SSL/TLS encryption for all payment pages
- No storage of CVV
- Fraud detection and monitoring
- Two-factor authentication for high-value transactions

**Refund Process:**
1. Admin initiates refund from dashboard
2. System calls payment gateway refund API
3. Refund processed to original payment method
4. Client notified via email
5. Refund typically processes in 5-7 business days
6. Invoice updated with refund details

#### C.4 Invoice Generation

**Invoice Details:**
```
-----------------------------------------
INVOICE #INV-2025-001234
-----------------------------------------
Date: December 25, 2025
Due Date: Paid

BILL TO:
[Client Name]
[Email]
[Phone]

FROM:
Banani Ghosh
Aura Divine
[Address]
[Email] | [Phone]
[GSTIN if applicable]

-----------------------------------------
DESCRIPTION              QTY    PRICE
-----------------------------------------
[Service Name]           1      ₹[Price]
(e.g., Reiki Healing,
Angelic Healing, etc.)

-----------------------------------------
                    SUBTOTAL:    ₹1500
               TAX (if applicable):  ₹0
                       TOTAL:    ₹1500
-----------------------------------------

Payment Method: UPI
Transaction ID: TXN1234567890
Status: PAID

Thank you for your booking!
-----------------------------------------
```

**Invoice Delivery:**
- PDF generated automatically upon payment
- Attached to confirmation email
- Available for download in client dashboard
- Stored in Wix database

---

## Document Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | December 24, 2025 | Development Team | Initial SRS document creation |

---

## Approval Signatures

**Prepared by:**
Vedansh Kumar (Developer)
Development Team
Date: December 24, 2025

**Reviewed by:**
[To be filled]

**Approved by:**
Banani Ghosh
Aura Divine - Business Owner
Date: _______________

---

**End of Software Requirements Specification Document**
