# 🚀 Rising Stock of India

> **SEBI-Registered Stock Advisory & Investment Education Platform**

A premium, modern Progressive Web Application (PWA) for stock market advisory services, investment education, and portfolio management. Designed with mobile-first approach, featuring beautiful animations, seamless payment integration, and WhatsApp connectivity.

---

## 📋 Table of Contents

- [Vision & Overview](#vision--overview)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Features Overview](#features-overview)
- [UI/UX Design Specifications](#uiux-design-specifications)
- [Customer Portal Features](#customer-portal-features)
- [Admin Dashboard Features](#admin-dashboard-features)
- [Security & Compliance](#security--compliance)
- [PWA Implementation](#pwa-implementation)
- [Payment Integration](#payment-integration)
- [Market Research Findings](#market-research-findings)
- [Pages & Screens](#pages--screens)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Development Roadmap](#development-roadmap)

---

## 🎯 Vision & Overview

**Rising Stock of India** transforms from a WhatsApp-based stock advisory service to a full-fledged digital platform offering:

- 📊 Stock market research and recommendations
- 📚 Investment education courses (online & offline)
- 💼 Premium advisory group memberships
- 📈 Portfolio tracking and management
- 🎓 E-books and learning resources
- 💬 WhatsApp community integration

### Reference Websites Analyzed

| Website                                                       | Key Strengths                                                                                                                |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [thecharteredsolutions.in](https://thecharteredsolutions.in/) | SEBI compliance prominence, 4-step user journey, multiple service tiers, Cashfree payment integration                        |
| [niveshartha.com](https://niveshartha.com)                    | Research-based messaging, client complaints transparency, product tiers (Max, Smart, Arc, Vital), clear expectations section |

---

## 🛠️ Tech Stack

### Frontend

| Technology                | Version              | Purpose                       |
| ------------------------- | -------------------- | ----------------------------- |
| **Angular**               | 15+ (Currently 20.x) | Core frontend framework       |
| **TypeScript**            | 5.9+                 | Type-safe development         |
| **SCSS**                  | Latest               | Styling with variables/mixins |
| **Angular Material**      | Latest               | UI component library          |
| **Angular PWA**           | Latest               | Progressive Web App support   |
| **RxJS**                  | 7.8+                 | Reactive programming          |
| **GSAP**                  | 3.x                  | Premium animations            |
| **Chart.js / ApexCharts** | Latest               | Data visualization            |
| **AOS**                   | Latest               | Scroll animations             |

### Backend

| Technology     | Version | Purpose                 |
| -------------- | ------- | ----------------------- |
| **Node.js**    | 18+ LTS | Runtime environment     |
| **Express.js** | 4.x     | Web framework           |
| **MongoDB**    | 6.x+    | Primary database        |
| **Mongoose**   | 7.x     | ODM for MongoDB         |
| **Socket.io**  | 4.x     | Real-time communication |
| **JWT**        | Latest  | Authentication tokens   |
| **Bcrypt**     | Latest  | Password hashing        |

### Infrastructure & Services

| Service                      | Purpose                         |
| ---------------------------- | ------------------------------- |
| **Razorpay**                 | Payment gateway                 |
| **Firebase Cloud Messaging** | Push notifications              |
| **AWS S3 / Cloudinary**      | Media storage                   |
| **SendGrid / Nodemailer**    | Email services                  |
| **Twilio / MSG91**           | SMS notifications               |
| **WhatsApp Business API**    | WhatsApp integration            |
| **Redis**                    | Session caching & rate limiting |

---

## 🏗️ Project Architecture

```
rising-stock-of-india/
├── frontend/                    # Angular PWA Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/           # Core services, guards, interceptors
│   │   │   ├── shared/         # Shared components, pipes, directives
│   │   │   ├── features/       # Feature modules
│   │   │   │   ├── auth/       # Login, Register, Password Reset
│   │   │   │   ├── home/       # Landing page
│   │   │   │   ├── courses/    # Course listings & details
│   │   │   │   ├── services/   # Advisory services
│   │   │   │   ├── portfolio/  # Portfolio tracker
│   │   │   │   ├── tools/      # Calculators & tools
│   │   │   │   ├── blog/       # Blogs & articles
│   │   │   │   ├── profile/    # User profile & settings
│   │   │   │   └── admin/      # Admin dashboard
│   │   │   └── layout/         # Header, footer, sidebar
│   │   ├── assets/             # Images, icons, fonts
│   │   ├── environments/       # Environment configs
│   │   └── styles/             # Global SCSS, themes
│   ├── angular.json
│   ├── ngsw-config.json        # PWA service worker config
│   └── manifest.webmanifest    # PWA manifest
│
├── backend/                     # Node.js Express API
│   ├── src/
│   │   ├── config/             # Database, auth, env configs
│   │   ├── controllers/        # Route controllers
│   │   ├── middleware/         # Auth, validation, error handling
│   │   ├── models/             # Mongoose schemas
│   │   ├── routes/             # API routes
│   │   ├── services/           # Business logic
│   │   ├── utils/              # Helper functions
│   │   └── app.js              # Express app setup
│   ├── package.json
│   └── .env
│
└── docs/                        # Documentation
    ├── API.md
    ├── DEPLOYMENT.md
    └── DESIGN_SYSTEM.md
```

---

## ✨ Features Overview

### 🎨 UI/UX Features

- [x] **Modern Dark Theme** - Professional financial aesthetic with animated chart backgrounds
- [x] **Smooth Animations** - GSAP-powered micro-interactions and scroll animations
- [x] **Mobile-First Design** - Optimized for all screen sizes
- [x] **Premium Loader** - Animated stock chart loader during page transitions
- [x] **Glassmorphism Elements** - Modern glass-effect cards and overlays
- [x] **Floating Action Buttons** - WhatsApp chat button, scroll-to-top
- [x] **Interactive Charts** - Live-like stock chart animations
- [x] **Gradient Accents** - Premium color gradients (Green-Teal-Blue theme)

### 📱 PWA Features

- [x] **Installable** - Add to home screen on mobile devices
- [x] **Offline Mode** - Access cached content without internet
- [x] **Push Notifications** - Real-time alerts for stock tips, market updates
- [x] **Background Sync** - Sync data when connection restored
- [x] **Fast Loading** - Service worker caching strategies
- [x] **App-like Experience** - Full-screen mode, splash screen

### 🔐 Authentication & Authorization

- [x] **Email/Password Login** - Traditional authentication
- [x] **OTP Verification** - Phone number verification
- [x] **Social Login** - Google OAuth integration
- [x] **Role-Based Access Control (RBAC)** - Admin, Customer roles
- [x] **JWT with Refresh Tokens** - Secure token management
- [x] **Email Verification** - Account activation via email
- [x] **Password Recovery** - Forgot password flow
- [x] **Two-Factor Authentication (2FA)** - Optional enhanced security

---

## 🎨 UI/UX Design Specifications

### Color Palette

```scss
// Primary Colors
$primary-green: #00bfa6; // Main accent - Trust, Growth
$primary-green-dark: #00896b; // Hover states
$primary-green-light: #b2f5ea; // Backgrounds

// Background Colors (Dark Theme)
$bg-primary: #0d1117; // Main background
$bg-secondary: #161b22; // Cards, sections
$bg-tertiary: #21262d; // Elevated elements

// Text Colors
$text-primary: #f0f6fc; // Main text
$text-secondary: #8b949e; // Muted text
$text-accent: #00bfa6; // Highlighted text

// Chart Colors
$chart-green: #26c281; // Profit, uptrend
$chart-red: #e74c3c; // Loss, downtrend
$chart-blue: #3498db; // Neutral, info

// Gradient Definitions
$gradient-primary: linear-gradient(135deg, #00bfa6 0%, #00796b 100%);
$gradient-hero: linear-gradient(180deg, rgba(0, 191, 166, 0.1) 0%, transparent 50%);
$gradient-card: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
```

### Typography

```scss
// Font Families
$font-primary:
  'Inter',
  -apple-system,
  BlinkMacSystemFont,
  sans-serif;
$font-heading: 'Outfit', 'Inter', sans-serif;
$font-mono: 'Fira Code', 'Monaco', monospace; // For numbers/data

// Font Sizes
$text-xs: 0.75rem; // 12px
$text-sm: 0.875rem; // 14px
$text-base: 1rem; // 16px
$text-lg: 1.125rem; // 18px
$text-xl: 1.25rem; // 20px
$text-2xl: 1.5rem; // 24px
$text-3xl: 1.875rem; // 30px
$text-4xl: 2.25rem; // 36px
$text-5xl: 3rem; // 48px

// Font Weights
$font-normal: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;
```

### Animation Guidelines

```scss
// Timing Functions
$ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
$ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
$ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);

// Duration
$duration-fast: 150ms;
$duration-normal: 300ms;
$duration-slow: 500ms;
$duration-slower: 800ms;

// Animation Types
// - Page transitions: Fade + slight slide
// - Card hovers: Scale + shadow enhancement
// - Chart animations: Sequential line drawing
// - Counter animations: Number counting up
// - Scroll reveals: AOS library integration
```

### Breakpoints (Mobile-First)

```scss
$breakpoint-xs: 320px; // Small phones
$breakpoint-sm: 576px; // Large phones
$breakpoint-md: 768px; // Tablets
$breakpoint-lg: 992px; // Small laptops
$breakpoint-xl: 1200px; // Desktops
$breakpoint-2xl: 1400px; // Large screens
```

---

## 👥 Customer Portal Features

### 1. **Landing Page / Home**

- Animated hero section with stock chart background
- SEBI registration badge prominently displayed
- "How It Works" 4-step journey visualization
- Service cards with hover animations
- Client testimonials carousel
- Live market ticker simulation
- Call-to-action buttons (WhatsApp, Subscribe)
- FAQ accordion section
- Trust indicators (SEBI, Client count, Years of experience)

### 2. **Services & Products**

- **Premium Advisory Groups**
  - MaxGroup - High-value stock picks
  - SmartGroup - Technical analysis based
  - VitalGroup - Long-term investments
- **Personalized Advisory**
  - 1-on-1 consultation scheduling
  - Custom portfolio advisory
- **Single Share Advice**
  - Buy/Sell/Hold recommendations
  - Per-query pricing

### 3. **Courses & Education**

- **Online Video Courses**
  - Technical Analysis Masterclass
  - Fundamental Analysis Course
  - Options Trading for Beginners
  - Advanced Chart Patterns
- **E-Books & Resources**
  - "Decoding The Operator's Game"
  - Market Psychology Guide
- **Offline Workshops**
  - Face-to-face training sessions
  - Location & schedule info
- **Free Resources**
  - Blog articles
  - YouTube video embeds
  - Market updates

### 4. **Investment Tools**

- **SIP Calculator**
  - Monthly investment input
  - Expected return rate
  - Time period selection
  - Visual chart output
- **Returns Calculator**
  - CAGR calculations
  - Absolute returns
- **Stock Valuation Tool**
  - PE ratio analysis
  - Intrinsic value estimation
- **Risk Assessment Quiz**
  - Investor profile determination
  - Personalized recommendations

### 5. **Portfolio Tracker**

- Add stocks to watchlist
- Track portfolio value
- Profit/Loss visualization
- Performance analytics
- Export reports (PDF)

### 6. **User Dashboard**

- Active subscriptions status
- Payment history
- Upcoming renewals
- Course progress
- Stock tips history
- Notification preferences
- Profile management

### 7. **Subscription Management**

- View active plans
- Upgrade/Downgrade options
- Auto-renewal settings
- Cancellation flow

---

## 👨‍💼 Admin Dashboard Features

### 1. **Overview Dashboard**

- **Key Metrics Cards**
  - Total customers
  - Active subscriptions
  - Monthly revenue
  - New signups (today/week/month)
- **Revenue Charts**
  - Daily/Weekly/Monthly trends
  - Service-wise breakdown
  - Year-over-year comparison
- **Recent Activity Feed**
  - New signups
  - Payments received
  - Support tickets

### 2. **Customer Management**

- **Customer List**
  - Search & filter functionality
  - Sortable columns
  - Bulk actions
- **Customer Profile View**
  - Personal details
  - Subscription history
  - Payment history
  - Communication log
  - Notes & tags
- **Customer Analytics**
  - Lifetime value
  - Engagement metrics
  - Churn risk indicators

### 3. **Subscription & Payment Management**

- **Subscription Overview**
  - Active/Expired/Cancelled breakdown
  - Renewal alerts
  - Plan-wise distribution
- **Payment History**
  - Transaction search
  - Status filters (Success/Failed/Pending)
  - Refund management
  - Invoice generation
- **Payment Analytics**
  - Success rate trends
  - Average transaction value
  - Payment method breakdown

### 4. **Content Management System (CMS)**

- **Courses Manager**
  - Create/Edit/Delete courses
  - Video upload/embed
  - Pricing configuration
  - Course outline builder
  - Sample preview management
- **Blog Manager**
  - WYSIWYG editor
  - Category management
  - SEO settings
  - Publishing scheduler
- **Stock Tips Manager**
  - Create recommendations
  - Target/Stop-loss settings
  - Push notification trigger
  - Historical performance tracking
- **E-Books Manager**
  - Upload PDF resources
  - Pricing & access control

### 5. **Service Package Configuration**

- Create/Edit service tiers
- Pricing management
- Feature toggle per tier
- Discount & coupon codes
- Limited-time offers

### 6. **Communication Center**

- **Notification Manager**
  - Push notification campaigns
  - Email templates
  - SMS templates
- **WhatsApp Integration**
  - Group link management
  - Broadcast message templates
- **Support Tickets**
  - Ticket queue
  - Assignment & resolution
  - Response templates

### 7. **Reports & Analytics**

- Revenue reports
- Customer acquisition reports
- Service performance reports
- Churn analysis
- Export to Excel/PDF

### 8. **Settings & Configuration**

- Admin user management
- Role & permission setup
- Payment gateway settings
- Email/SMS provider settings
- Website settings (Logo, Contact info)
- Legal pages (Terms, Privacy, Disclaimer)

---

## 🔒 Security & Compliance

### Authentication & Authorization

```typescript
// JWT Token Structure
{
  sub: "userId",
  email: "user@example.com",
  role: "customer" | "admin",
  iat: timestamp,
  exp: timestamp (15 minutes)
}

// Refresh Token: Stored in HttpOnly secure cookie
// Access Token: Short-lived, stored in memory
```

### Security Measures

| Feature                      | Implementation                          |
| ---------------------------- | --------------------------------------- |
| Password Hashing             | bcrypt with salt rounds: 12             |
| Input Validation             | express-validator + sanitization        |
| Rate Limiting                | express-rate-limit (100 req/15min)      |
| CORS                         | Strict origin configuration             |
| Security Headers             | Helmet.js middleware                    |
| MongoDB Injection Prevention | Mongoose sanitization                   |
| XSS Protection               | Content Security Policy                 |
| HTTPS                        | SSL/TLS enforced                        |
| Brute Force Protection       | Account lockout after 5 failed attempts |

### SEBI Compliance Features

- ✅ SEBI Registration Number display (prominent)
- ✅ Client complaints disclosure page (monthly update)
- ✅ Investor Charter display
- ✅ Disclaimer on all recommendation pages
- ✅ "What to expect vs not expect" section
- ✅ No execution services messaging
- ✅ Risk disclosure statements
- ✅ Terms & Conditions
- ✅ Privacy Policy
- ✅ Refund/Cancellation Policy

### Legal Pages Required

1. **Disclaimer** - Investment risk disclosure
2. **Terms & Conditions** - Service usage terms
3. **Privacy Policy** - Data handling practices
4. **Refund Policy** - Cancellation & refund terms
5. **Client Consent Form** - KYC documentation
6. **Service Disclosure** - Service terms
7. **Complaints & Grievance Redressal** - SEBI-mandated

---

## 📱 PWA Implementation

### Service Worker Strategy

```javascript
// ngsw-config.json configuration
{
  "cacheConfig": {
    // App Shell - Cache First
    "staticAssets": {
      "strategy": "freshness",
      "timeout": "10s"
    },
    // API Calls - Network First
    "apiCalls": {
      "strategy": "performance",
      "maxSize": 100,
      "maxAge": "1h"
    },
    // Images - Cache First
    "images": {
      "strategy": "performance",
      "maxSize": 50,
      "maxAge": "7d"
    }
  }
}
```

### PWA Features Implementation

| Feature                | Details                                          |
| ---------------------- | ------------------------------------------------ |
| **Manifest**           | App name, icons (192x192, 512x512), theme colors |
| **Install Prompt**     | Custom banner for A2HS                           |
| **Offline Page**       | Branded fallback page                            |
| **Push Notifications** | Firebase Cloud Messaging                         |
| **Background Sync**    | Retry failed form submissions                    |
| **App Updates**        | SwUpdate service for version management          |
| **Splash Screen**      | Branded loading screen                           |

### Push Notification Types

- 🔔 New stock tip alert
- 💰 Payment reminder
- 📊 Market opening/closing updates
- 🎓 New course available
- 💬 WhatsApp message teaser
- ⚡ Flash sale/discount offers

---

## 💳 Payment Integration

### Razorpay Implementation

```typescript
// Frontend Service
@Injectable()
export class PaymentService {
  initiatePayment(order: Order): Observable<PaymentResponse> {
    const options: RazorpayOptions = {
      key: environment.razorpayKey,
      amount: order.amount * 100, // in paise
      currency: 'INR',
      name: 'Rising Stock of India',
      description: order.description,
      image: '/assets/logo.png',
      order_id: order.razorpayOrderId,
      prefill: {
        name: this.user.name,
        email: this.user.email,
        contact: this.user.phone,
      },
      theme: {
        color: '#00BFA6',
      },
      handler: (response) => this.verifyPayment(response),
    };

    const rzp = new Razorpay(options);
    rzp.open();
  }
}
```

### Payment Flow

```
1. Customer selects service →
2. Create Order (Backend) →
3. Razorpay Checkout opens →
4. Customer completes payment →
5. Webhook receives confirmation →
6. Backend verifies signature →
7. Update subscription status →
8. Send confirmation email + SMS →
9. Grant service access
```

### Pricing Structure (Suggested)

| Service             | Duration  | Price (₹) |
| ------------------- | --------- | --------- |
| Premium Max Group   | 1 Month   | ₹4,999    |
| Premium Max Group   | 3 Months  | ₹12,999   |
| Premium Max Group   | 1 Year    | ₹44,999   |
| Smart Group         | 1 Month   | ₹2,999    |
| Single Share Advice | Per Query | ₹499      |
| Video Course        | Lifetime  | ₹6,999    |
| E-Book              | Lifetime  | ₹999      |
| 1-on-1 Consultation | Per Hour  | ₹2,499    |
| Portfolio Review    | One-time  | ₹3,999    |

---

## 📊 Market Research Findings

### Competitor Analysis Summary

| Feature                 | thecharteredsolutions.in | niveshartha.com | Rising Stock of India |
| ----------------------- | ------------------------ | --------------- | --------------------- |
| Dark Theme              | ✅                       | ❌              | ✅                    |
| Mobile App              | ❌                       | ✅ (Native)     | ✅ (PWA)              |
| Algo Trading            | ❌                       | ✅              | 🔮 Phase 2            |
| SIP Calculator          | ❌                       | ❌              | ✅                    |
| Portfolio Tracker       | ❌                       | ❌              | ✅                    |
| WhatsApp Integration    | ✅                       | ✅              | ✅                    |
| Video Courses           | ✅                       | ❌              | ✅                    |
| Offline Courses         | ✅                       | ❌              | ✅                    |
| Blog/Content            | ❌                       | ✅              | ✅                    |
| Client Reviews Display  | ✅                       | ✅              | ✅                    |
| Complaints Transparency | ❌                       | ✅              | ✅                    |

### Unique Value Propositions (USPs)

1. **PWA Technology** - Works as both website and mobile app
2. **Investment Tools Suite** - SIP/Returns calculators, Risk assessment
3. **Portfolio Tracker** - Track investments in one place
4. **Modern UI/UX** - Premium dark theme with animations
5. **Push Notifications** - Real-time alerts for tips
6. **Comprehensive Learning** - Videos, E-books, Offline workshops

### Additional Features to Implement (Based on Research)

#### High Priority 🔴

- [ ] Referral Program (Earn ₹500 per referral)
- [ ] Free Trial (7-day premium access)
- [ ] Live Chat Support
- [ ] Mobile OTP Login
- [ ] UPI Payment Support (via Razorpay)

#### Medium Priority 🟡

- [ ] Multi-language Support (Hindi)
- [ ] Voice Notification Option
- [ ] Social Sharing of Success Stories
- [ ] Affiliate Partner Program
- [ ] Bundle Discounts

#### Future Enhancements 🟢

- [ ] Live Market Data Integration (NSE/BSE API)
- [ ] Algo Trading Signals (Phase 2)
- [ ] AI-based Stock Recommendations
- [ ] Community Discussion Forum
- [ ] Mobile Native App (React Native)

---

## 📄 Pages & Screens

### Public Pages (No Auth Required)

| Page               | Route                   | Description             |
| ------------------ | ----------------------- | ----------------------- |
| Home/Landing       | `/`                     | Main marketing page     |
| About Us           | `/about`                | Company story, team     |
| Services           | `/services`             | All service offerings   |
| Service Detail     | `/services/:slug`       | Individual service page |
| Courses            | `/courses`              | Course catalog          |
| Course Detail      | `/courses/:slug`        | Course info & purchase  |
| Blog               | `/blog`                 | Articles listing        |
| Blog Post          | `/blog/:slug`           | Individual article      |
| Tools              | `/tools`                | Calculator tools        |
| Contact            | `/contact`              | Contact form            |
| Login              | `/auth/login`           | Customer login          |
| Register           | `/auth/register`        | Customer registration   |
| Forgot Password    | `/auth/forgot-password` | Password reset          |
| Terms & Conditions | `/legal/terms`          | Legal page              |
| Privacy Policy     | `/legal/privacy`        | Privacy policy          |
| Disclaimer         | `/legal/disclaimer`     | Investment disclaimer   |
| Refund Policy      | `/legal/refund`         | Refund terms            |
| Complaints         | `/legal/complaints`     | SEBI complaints page    |

### Customer Portal (Auth Required)

| Page          | Route                          | Description       |
| ------------- | ------------------------------ | ----------------- |
| Dashboard     | `/dashboard`                   | Customer home     |
| My Courses    | `/dashboard/courses`           | Enrolled courses  |
| Course Player | `/dashboard/courses/:id/learn` | Video player      |
| Portfolio     | `/dashboard/portfolio`         | Stock tracker     |
| Watchlist     | `/dashboard/watchlist`         | Saved stocks      |
| Stock Tips    | `/dashboard/tips`              | Advisory feed     |
| Subscriptions | `/dashboard/subscriptions`     | Active plans      |
| Payments      | `/dashboard/payments`          | Payment history   |
| Profile       | `/dashboard/profile`           | Account settings  |
| Notifications | `/dashboard/notifications`     | All notifications |

### Admin Portal (Admin Auth Required)

| Page            | Route                     | Description         |
| --------------- | ------------------------- | ------------------- |
| Dashboard       | `/admin`                  | Admin overview      |
| Customers       | `/admin/customers`        | Customer management |
| Customer Detail | `/admin/customers/:id`    | Customer profile    |
| Subscriptions   | `/admin/subscriptions`    | All subscriptions   |
| Payments        | `/admin/payments`         | Payment management  |
| Courses         | `/admin/courses`          | Course CMS          |
| Course Editor   | `/admin/courses/:id/edit` | Edit course         |
| Blog            | `/admin/blog`             | Blog CMS            |
| Stock Tips      | `/admin/tips`             | Tips management     |
| Services        | `/admin/services`         | Service packages    |
| Reports         | `/admin/reports`          | Analytics           |
| Settings        | `/admin/settings`         | System config       |

---

## 🗄️ Database Schema

### Collections Overview

```typescript
// users
{
  _id: ObjectId,
  email: string,
  phone: string,
  password: string (hashed),
  name: string,
  role: 'customer' | 'admin',
  isVerified: boolean,
  avatar: string,
  address: {
    city: string,
    state: string,
    country: string
  },
  preferences: {
    notifications: boolean,
    newsletter: boolean
  },
  referralCode: string,
  referredBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}

// subscriptions
{
  _id: ObjectId,
  userId: ObjectId,
  serviceId: ObjectId,
  planId: ObjectId,
  status: 'active' | 'expired' | 'cancelled',
  startDate: Date,
  endDate: Date,
  autoRenew: boolean,
  paymentId: ObjectId,
  createdAt: Date
}

// payments
{
  _id: ObjectId,
  userId: ObjectId,
  razorpayOrderId: string,
  razorpayPaymentId: string,
  amount: number,
  currency: string,
  status: 'created' | 'paid' | 'failed' | 'refunded',
  description: string,
  metadata: {
    serviceId: ObjectId,
    planId: ObjectId
  },
  paidAt: Date,
  createdAt: Date
}

// services
{
  _id: ObjectId,
  name: string,
  slug: string,
  description: string,
  shortDescription: string,
  image: string,
  features: string[],
  plans: [{
    _id: ObjectId,
    name: string,
    duration: number, // days
    price: number,
    originalPrice: number,
    isPopular: boolean
  }],
  isActive: boolean,
  order: number,
  createdAt: Date
}

// courses
{
  _id: ObjectId,
  title: string,
  slug: string,
  description: string,
  instructor: string,
  thumbnail: string,
  previewVideo: string,
  price: number,
  originalPrice: number,
  duration: string,
  level: 'beginner' | 'intermediate' | 'advanced',
  language: string,
  modules: [{
    _id: ObjectId,
    title: string,
    lessons: [{
      _id: ObjectId,
      title: string,
      videoUrl: string,
      duration: number,
      isFree: boolean
    }]
  }],
  enrolledCount: number,
  rating: number,
  isPublished: boolean,
  createdAt: Date
}

// enrollments
{
  _id: ObjectId,
  userId: ObjectId,
  courseId: ObjectId,
  paymentId: ObjectId,
  progress: {
    completedLessons: ObjectId[],
    lastWatched: ObjectId,
    percentage: number
  },
  enrolledAt: Date
}

// stockTips
{
  _id: ObjectId,
  stock: {
    name: string,
    symbol: string
  },
  action: 'BUY' | 'SELL' | 'HOLD',
  entryPrice: number,
  targetPrice: number,
  stopLoss: number,
  timeframe: string,
  rationale: string,
  serviceId: ObjectId, // Which tier/service this belongs to
  status: 'active' | 'targetHit' | 'stopLossHit' | 'exited',
  result: {
    exitPrice: number,
    profitLoss: number,
    exitDate: Date
  },
  publishedAt: Date,
  createdAt: Date
}

// blogs
{
  _id: ObjectId,
  title: string,
  slug: string,
  content: string, // Rich HTML
  excerpt: string,
  thumbnail: string,
  author: ObjectId,
  category: string,
  tags: string[],
  seo: {
    metaTitle: string,
    metaDescription: string
  },
  isPublished: boolean,
  publishedAt: Date,
  views: number,
  createdAt: Date
}

// portfolio (user's tracked stocks)
{
  _id: ObjectId,
  userId: ObjectId,
  stocks: [{
    symbol: string,
    quantity: number,
    buyPrice: number,
    buyDate: Date,
    notes: string
  }],
  updatedAt: Date
}

// notifications
{
  _id: ObjectId,
  userId: ObjectId,
  title: string,
  body: string,
  type: 'tip' | 'payment' | 'course' | 'system',
  data: object,
  isRead: boolean,
  sentAt: Date
}

// leads (contact form submissions)
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  message: string,
  source: string,
  status: 'new' | 'contacted' | 'converted' | 'closed',
  notes: string,
  createdAt: Date
}
```

---

## 🔌 API Endpoints

### Authentication

```
POST   /api/auth/register          Create new account
POST   /api/auth/login             Login with email/password
POST   /api/auth/login/otp         Request OTP login
POST   /api/auth/verify-otp        Verify OTP
POST   /api/auth/google            Google OAuth login
POST   /api/auth/refresh           Refresh access token
POST   /api/auth/logout            Logout
POST   /api/auth/forgot-password   Request password reset
POST   /api/auth/reset-password    Reset with token
GET    /api/auth/me                Get current user
```

### Users (Customer)

```
GET    /api/users/profile          Get profile
PUT    /api/users/profile          Update profile
PUT    /api/users/password         Change password
GET    /api/users/subscriptions    Get my subscriptions
GET    /api/users/payments         Get my payments
GET    /api/users/enrollments      Get my enrolled courses
```

### Services

```
GET    /api/services               List all services
GET    /api/services/:slug         Get service details
GET    /api/services/:id/plans     Get service plans
```

### Courses

```
GET    /api/courses                List courses
GET    /api/courses/:slug          Get course details
POST   /api/courses/:id/enroll     Enroll in course
GET    /api/courses/:id/learn      Get course content (enrolled only)
PUT    /api/courses/:id/progress   Update progress
```

### Payments

```
POST   /api/payments/create-order  Create Razorpay order
POST   /api/payments/verify        Verify payment
GET    /api/payments/:id           Get payment details
GET    /api/payments/:id/invoice   Download invoice PDF
```

### Portfolio

```
GET    /api/portfolio              Get portfolio
POST   /api/portfolio/add          Add stock
PUT    /api/portfolio/:id          Update holding
DELETE /api/portfolio/:id          Remove stock
```

### Stock Tips (Subscribed)

```
GET    /api/tips                   Get tips (filtered by subscription)
GET    /api/tips/:id               Get tip details
```

### Blog

```
GET    /api/blogs                  List published blogs
GET    /api/blogs/:slug            Get blog post
GET    /api/blogs/categories       Get categories
```

### Tools

```
POST   /api/tools/sip-calculator   Calculate SIP returns
POST   /api/tools/cagr-calculator  Calculate CAGR
```

### Contact

```
POST   /api/contact                Submit contact form
```

### Admin APIs

```
// Customers
GET    /api/admin/customers        List all customers
GET    /api/admin/customers/:id    Get customer details
PUT    /api/admin/customers/:id    Update customer
DELETE /api/admin/customers/:id    Delete customer

// Subscriptions
GET    /api/admin/subscriptions    List subscriptions
PUT    /api/admin/subscriptions/:id Update subscription

// Payments
GET    /api/admin/payments         List all payments
POST   /api/admin/payments/:id/refund Process refund

// Courses CRUD
POST   /api/admin/courses          Create course
PUT    /api/admin/courses/:id      Update course
DELETE /api/admin/courses/:id      Delete course

// Services CRUD
POST   /api/admin/services         Create service
PUT    /api/admin/services/:id     Update service
DELETE /api/admin/services/:id     Delete service

// Blog CRUD
POST   /api/admin/blogs            Create blog
PUT    /api/admin/blogs/:id        Update blog
DELETE /api/admin/blogs/:id        Delete blog

// Stock Tips CRUD
POST   /api/admin/tips             Create tip
PUT    /api/admin/tips/:id         Update tip
DELETE /api/admin/tips/:id         Delete tip

// Notifications
POST   /api/admin/notifications/send Send push notification

// Dashboard
GET    /api/admin/dashboard        Get dashboard stats
GET    /api/admin/reports/revenue  Revenue reports
GET    /api/admin/reports/customers Customer reports

// Settings
GET    /api/admin/settings         Get settings
PUT    /api/admin/settings         Update settings
```

### Webhooks

```
POST   /api/webhooks/razorpay      Razorpay payment webhook
```

---

## 📅 Development Roadmap

### Phase 1: Foundation (Weeks 1-3)

- [ ] Project setup (Angular PWA + Node.js backend)
- [ ] Design system implementation (Colors, Typography, Components)
- [ ] Authentication module (Login, Register, JWT)
- [ ] Database schemas & models
- [ ] Basic API structure

### Phase 2: Core Features (Weeks 4-6)

- [ ] Landing page with animations
- [ ] Services listing & details
- [ ] Course catalog & details
- [ ] Payment integration (Razorpay)
- [ ] Customer dashboard

### Phase 3: Content & Admin (Weeks 7-9)

- [ ] Admin dashboard
- [ ] CMS for courses & blogs
- [ ] Stock tips management
- [ ] Subscription management
- [ ] Email notification system

### Phase 4: Advanced Features (Weeks 10-11)

- [ ] Portfolio tracker
- [ ] Investment calculators
- [ ] Push notifications
- [ ] WhatsApp integration
- [ ] Referral system

### Phase 5: Polish & Launch (Week 12)

- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Security audit
- [ ] UAT testing
- [ ] Production deployment

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ LTS
- MongoDB 6+
- Angular CLI 15+
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/your-repo/rising-stock-of-india.git

# Frontend setup
cd frontend
npm install
ng serve

# Backend setup
cd backend
npm install
cp .env.example .env
# Configure environment variables
npm run dev
```

### Environment Variables (Backend)

```env
# Database
MONGODB_URI=mongodb://localhost:27017/rising-stock

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your-refresh-secret
JWT_REFRESH_EXPIRES_IN=7d

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx

# Email
SMTP_HOST=smtp.example.com
SMTP_USER=your-email
SMTP_PASS=your-password

# Firebase (Push Notifications)
FIREBASE_PROJECT_ID=your-project
FIREBASE_PRIVATE_KEY=xxxxx
FIREBASE_CLIENT_EMAIL=xxxxx

# WhatsApp Business API
WHATSAPP_API_URL=https://api.whatsapp.com
WHATSAPP_API_TOKEN=xxxxx

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:4200
```

---

## 📝 Notes & Considerations

### Must-Have Before Launch

1. ✅ SEBI Registration clearly displayed
2. ✅ All legal/compliance pages
3. ✅ SSL certificate
4. ✅ Payment gateway approval
5. ✅ WhatsApp Business verification
6. ✅ Privacy policy & cookie consent
7. ✅ Proper disclaimers on all stock-related pages

### Critical Business Rules

- Never provide execution services (SEBI compliance)
- Show client complaints data (updated monthly)
- Display "past performance doesn't guarantee future results" disclaimers
- KYC required before service activation
- Clear refund policy (usually no refund on advisory services)

---

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

## 🤝 Contact

**Rising Stock of India**

- Website: www.risingstockofindia.com (coming soon)
- Email: support@risingstockofindia.com
- WhatsApp: +91-XXXXXXXXXX

---

_Last Updated: February 7, 2026_
