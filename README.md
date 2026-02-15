# 🚀 Rising Stock of India

> **SEBI-Registered Stock Advisory & Investment Education Platform**

A premium, modern Progressive Web Application (PWA) for stock market advisory services, investment education, and portfolio management. Designed with mobile-first approach, featuring beautiful animations, WhatsApp connectivity, and Google Analytics tracking.

---

## 📋 Table of Contents

- [Vision & Overview](#vision--overview)
- [Tech Stack](#tech-stack)
- [Features Overview](#features-overview)
- [Pages](#pages)
- [Analytics Integration](#analytics-integration)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)

---

## 🎯 Vision & Overview

Rising Stock of India is a **frontend-only** web application that serves as the digital presence for a SEBI-registered stock advisory firm. The platform showcases services, courses, investment tools, and blog content while driving lead generation through **WhatsApp** as the primary communication channel.

### Key Highlights

- ✅ **No Backend Required** – Fully static frontend, no server or database needed
- 📱 **Mobile-First Design** – Responsive design optimized for mobile devices
- 💬 **WhatsApp Integration** – All CTAs drive users to WhatsApp for instant engagement
- 📊 **Google Analytics 4** – Free analytics tracking for all user interactions
- 🎨 **Premium Dark Theme** – Modern glassmorphism UI with smooth micro-animations
- ⚡ **Progressive Web App** – Installable, offline-capable via Service Worker
- 🔍 **SEO Optimized** – Proper meta tags, semantic HTML, structured data

---

## 🛠 Tech Stack

| Category  | Technology                              |
| --------- | --------------------------------------- |
| Framework | Angular 20+ (Standalone Components)     |
| Language  | TypeScript                              |
| Styling   | SCSS with custom design system          |
| Fonts     | Inter, Outfit, Fira Code (Google Fonts) |
| Analytics | Google Analytics 4 (GA4)                |
| PWA       | Angular Service Worker                  |
| Build     | Angular CLI / esbuild                   |

---

## ✨ Features Overview

### 1. 📈 Live Market Ticker

- Animated stock ticker showing market data
- Hover to pause animation
- Mock data with realistic stock symbols and prices

### 2. 🏠 Landing Page (Home)

- Hero section with animated chart background
- SEBI registration badge
- Trust indicators (clients count, success rate)
- Services grid with hover animations
- How-it-works 4-step flow
- What to expect / what not to expect section
- Client testimonials with ratings
- FAQ accordion
- Bottom CTA with WhatsApp integration

### 3. 🛎 Services Showcase

- 6 advisory service cards with pricing
- Individual service detail pages
- Popular service badge highlighting
- Each service links to WhatsApp for inquiry

### 4. 📚 Courses Catalog

- Stock market courses with thumbnails
- Course metadata (duration, lessons, rating)
- Original vs discounted pricing display
- Level badges (beginner, intermediate, advanced)
- Individual course detail pages

### 5. 🔧 Investment Tools (SIP & CAGR Calculators)

- **SIP Calculator** – Monthly investment, expected return rate, time period
  - Shows invested amount, estimated returns, total value
- **CAGR Calculator** – Initial investment, final value, number of years
  - Calculates compound annual growth rate and absolute returns
- All calculations done client-side (no backend needed)

### 6. 📝 Blog & Insights

- Blog article cards with color-coded thumbnails
- Category badges, reading time, dates
- Individual blog detail pages
- Static content (no CMS needed)

### 7. 📞 Contact Page

- WhatsApp as primary contact (highlighted)
- Phone, Email, Office address
- Working hours display
- **Smart Contact Form** – Fills in details and opens WhatsApp with pre-filled message
- No backend form submission required

### 8. ℹ️ About Us

- Company story, mission, values
- Key statistics (clients, experience, success rate)
- Team credentials

### 9. ⚖️ Legal Pages

- Terms & Conditions
- Privacy Policy
- Disclaimer
- Refund Policy
- Client Complaints / Grievance Redressal

### 10. 🔍 404 Not Found

- Custom branded 404 page
- Quick navigation links

### 11. 💬 Floating WhatsApp Button

- Appears after scrolling
- Expands on hover ("Chat with us")
- Ping animation for attention
- Analytics tracked on every click

---

## 📊 Analytics Integration

### Google Analytics 4 (GA4)

We use **Google Analytics 4** for tracking – it's **completely free** for basic analytics.

#### Events Tracked:

| Event                 | Description                         | Source                                              |
| --------------------- | ----------------------------------- | --------------------------------------------------- |
| `page_view`           | Every page navigation               | Auto (router)                                       |
| `whatsapp_click`      | WhatsApp button/link clicks         | Floating button, header, footer, contact page, CTAs |
| `email_click`         | Email link clicks                   | Footer, contact page                                |
| `phone_click`         | Phone number clicks                 | Footer, contact page                                |
| `social_click`        | Social media link clicks            | Footer                                              |
| `contact_form_submit` | Contact form submitted via WhatsApp | Contact page                                        |
| `service_click`       | Service card clicks                 | Services page                                       |
| `course_click`        | Course card clicks                  | Courses page                                        |
| `cta_click`           | CTA button clicks                   | Various sections                                    |

#### Setup:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Replace `G-XXXXXXXXXX` in `src/index.html` (appears twice)

---

## 📁 Project Structure

```
src/
├── index.html                    # Entry HTML with GA4 script
├── main.ts                       # Angular bootstrap
├── styles.scss                   # Global styles
├── styles/
│   ├── _variables.scss           # Design system tokens
│   └── _mixins.scss              # SCSS utility mixins
├── app/
│   ├── app.ts                    # Root component with analytics
│   ├── app.routes.ts             # Route configuration
│   ├── app.config.ts             # App configuration
│   ├── layout/
│   │   ├── header/               # Navigation header
│   │   └── footer/               # Site footer
│   ├── shared/
│   │   ├── components/
│   │   │   ├── whatsapp-button/  # Floating WhatsApp FAB
│   │   │   └── loader/           # Loading component
│   │   └── services/
│   │       └── analytics.service.ts  # GA4 analytics service
│   └── features/
│       ├── home/                 # Landing page
│       ├── about/                # About us
│       ├── services/             # Services list + detail
│       ├── courses/              # Courses list + detail
│       ├── tools/                # SIP & CAGR calculators
│       ├── blog/                 # Blog list + detail
│       ├── contact/              # Contact with WhatsApp form
│       ├── legal/                # Terms, Privacy, etc.
│       └── not-found/            # 404 page
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd market-insight-hub

# Install dependencies
npm install

# Start development server
ng serve
# or
npm start
```

The app will be available at `http://localhost:4200`

### Build for Production

```bash
ng build
```

Production files will be in `dist/` directory.

---

## ⚙️ Configuration

### 1. Google Analytics Measurement ID

Replace `G-XXXXXXXXXX` in `src/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_ID"></script>
<script>
  gtag('config', 'YOUR_GA4_ID');
</script>
```

### 2. WhatsApp Number

The default WhatsApp number is `9999999999`. To change it, update these files:

- `src/app/shared/components/whatsapp-button/whatsapp-button.component.ts`
- `src/app/layout/header/header.component.html`
- `src/app/layout/footer/footer.component.html`
- `src/app/features/contact/contact.component.ts`
- `src/app/features/home/home.component.html`

### 3. SEBI Registration Number

Replace `INH000XXXXXX` with your actual SEBI registration number in:

- `src/app/layout/footer/footer.component.html`
- `src/app/features/home/home.component.ts`

### 4. Company Details

Update company name, address, email in:

- `src/app/layout/footer/footer.component.ts` and `.html`
- `src/app/features/contact/contact.component.ts`
- `src/app/features/about/about.component.ts`

---

## 📱 Responsive Breakpoints

| Breakpoint | Min Width | Use Case      |
| ---------- | --------- | ------------- |
| xs         | 480px     | Small phones  |
| sm         | 640px     | Large phones  |
| md         | 768px     | Tablets       |
| lg         | 1024px    | Laptops       |
| xl         | 1280px    | Desktops      |
| 2xl        | 1536px    | Large screens |

---

## 🎨 Design System

### Colors

- **Primary**: Teal/Green (#00BFA6) – Trust, Growth
- **Background**: Dark theme (#0d1117)
- **Success**: Green for positive indicators
- **Stock Green/Red**: Market indicators

### Typography

- **Headings**: Outfit (bold, modern)
- **Body**: Inter (clean, readable)
- **Code/Numbers**: Fira Code (monospace)

---

## 📝 License

© 2026 Rising Stock of India. All rights reserved.

---

## 🤝 Support

For any questions or issues, contact us on WhatsApp: [+91 99999 99999](https://wa.me/919999999999)
