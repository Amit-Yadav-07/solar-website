# ☀️ LuxSolar — Premium Solar Energy Website

A luxury, dark-themed solar energy company website built with **React + Vite + Tailwind CSS**.

## ✨ Features

- **Luxury Dark Theme** — Cormorant Garamond + Outfit fonts, carbon blacks and gold accents
- **Animated Hero** — Animated SVG sun with ray animations, floating stats, staggered reveals
- **Auto-scroll Trust Bar** — Marquee of certifications and awards
- **3-Tier Solutions** — Essential / Pro Home / Enterprise packages with pricing
- **4-Step Process** — How installation works, with connector timeline
- **Interactive Savings Calculator** — Live ROI calc by state & bill amount, bar chart
- **Why Us Features** — 6 differentiators + awards grid on dark section
- **Projects Portfolio** — 6 real case studies, filterable by type, SVG illustrations
- **Testimonials Carousel** — 6 reviews, auto-rotating with savings data
- **4-Step Quote Form** — Multi-step lead capture with summary & success state
- **FAQ Accordion** — 11 Q&As, filterable by category
- **Contact + Map** — SVG US map with office pins, 3 office cards
- **Footer** — Full links, certifications, social media, CTA band
- **Floating CTAs** — Sticky call + free quote buttons
- **Scroll Progress Bar** — Gold gradient top bar
- **Fully Mobile Responsive** — Every section optimized for all screen sizes

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** — Download at [nodejs.org](https://nodejs.org)

### Run Locally

```bash
# 1. Enter the project folder
cd solar-website

# 2. Install all dependencies (first time only, ~30 seconds)
npm install

# 3. Launch the dev server
npm run dev
```

Open **http://localhost:5173** in your browser. Hot reload is enabled.

### Production Build

```bash
npm run build      # builds to /dist
npm run preview    # preview the production build locally
```

## 📁 File Structure

```
solar-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         Sticky transparent → solid scroll nav
│   │   ├── Hero.jsx           Full-screen hero with animated SVG sun
│   │   ├── TrustBar.jsx       Auto-scrolling credentials marquee
│   │   ├── Solutions.jsx      3-tier pricing cards
│   │   ├── Process.jsx        4-step installation timeline
│   │   ├── Calculator.jsx     Interactive ROI calculator + bar chart
│   │   ├── WhyUs.jsx          Features grid + awards (dark section)
│   │   ├── Projects.jsx       Portfolio with filterable project cards
│   │   ├── Reviews.jsx        Testimonials carousel with savings data
│   │   ├── QuoteForm.jsx      4-step lead capture form
│   │   ├── FAQ.jsx            Accordion FAQ with category filter
│   │   ├── Contact.jsx        SVG map + office contacts
│   │   └── Footer.jsx         Full footer with CTA band
│   ├── hooks/
│   │   └── useScrollReveal.js Intersection Observer scroll animations
│   ├── App.jsx                Root component
│   ├── main.jsx               Entry point
│   └── index.css              Global styles + Tailwind + animations
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary font | Cormorant Garamond (display) |
| Body font | Outfit (UI) |
| Background | `#0e0e08` (carbon-950) |
| Accent | `#f59e0b` (gold-500) |
| Card bg | `rgba(255,255,255,0.04)` glass |
| Border | `rgba(255,255,255,0.08)` |
| Gold gradient | `#f59e0b → #fcd47a → #d97706` |

## 🛠 Customization

### Business Info
Replace in these files:
- `Navbar.jsx` → Phone number, company name
- `Footer.jsx` → Address, email, social links
- `Contact.jsx` → Office locations
- `index.html` → Meta title & description

### Pricing
Edit the `solutions` array in `Solutions.jsx`

### Color Palette
Edit `tailwind.config.js` → `carbon` and `gold` color scales

### Fonts
Edit `index.html` → Google Fonts link tags
Edit `tailwind.config.js` → `fontFamily`

### Adding Real Photos
Replace SVG `<svg>` blocks in:
- `Hero.jsx` → `<img src="/hero-panel.jpg" .../>`
- `Projects.jsx` → `<img src="/project-1.jpg" .../>`

---

Made with ☀️ for a cleaner planet
