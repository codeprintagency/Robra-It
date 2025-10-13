# Robra IT - Premium IT Staffing Website

A stunning, single-page website built with Next.js 14, React, TailwindCSS, and Framer Motion. Designed for Robra IT, an IT staffing company, with a premium, dynamic aesthetic inspired by **Deel.com** — featuring layered gradients, depth, and sophisticated animations.

## ✨ Premium Features

- **Dynamic Hero Section**: Dark gradient background with animated blobs and moving gradients
- **Layered Depth**: Multiple background gradients and decorative elements throughout
- **Advanced Animations**: Framer Motion with scroll-triggered effects, gradient borders, and micro-interactions
- **Split Layout Design**: Modern 2-column layouts with sticky positioning
- **Gradient Borders**: Animated gradient borders on key cards and form
- **Trust Section**: Statistics showcase with professional credibility indicators
- **Dark Footer**: Premium dark-themed footer with gradient accents
- **Custom Logo Integration**: SVG logo with hover effects in header
- **Enhanced Forms**: Elevated shadow cards with focus animations
- **Smooth Scrolling**: Anchor-based navigation with scroll padding

## 🚀 Technical Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, TailwindCSS
- **Premium UI**: shadcn/ui components with extensive customization
- **Advanced Animations**: Framer Motion for elegant transitions and scroll effects
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Form Handling**: React Hook Form with complete validation
- **SMS Compliance**: Built-in Zoom SMS consent disclosures (TCPA compliant)
- **SEO Optimized**: Complete meta tags, OpenGraph, and Twitter cards
- **Custom Scrollbar**: Gradient-styled scrollbar matching brand colors
- **Performance**: Optimized build at 151 KB First Load JS

## 📁 Project Structure

```
robra-it/
├── app/
│   ├── layout.tsx          # Root layout with Inter font + SEO metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles + custom animations
├── components/
│   ├── Header.tsx          # Sticky nav with logo & backdrop blur
│   ├── Hero.tsx            # Dark hero with animated gradient blobs
│   ├── About.tsx           # Split-layout services section
│   ├── HowItWorks.tsx      # 3-step process with gradient borders
│   ├── Trust.tsx           # Statistics & credibility banner
│   ├── ContactForm.tsx     # Elevated form card with SMS consent
│   ├── Footer.tsx          # Dark footer with privacy policy
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── label.tsx
├── public/
│   └── robra-it.svg        # Company logo
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Premium Design System

### Color Palette
- **Primary Blue**: `#2F54EB` - Main brand color
- **Accent Teal**: `#00C7B7` - Secondary highlights
- **Deep Blue**: `#0E2035` - Hero and footer backgrounds
- **Gradients**: Multi-layer gradients for depth and movement

### Typography
- **Font**: Inter (Google Fonts) - Professional, modern
- **Headings**: Bold, large sizes (text-5xl to text-8xl) with tight tracking
- **Gradient Text**: Key headlines use animated gradient text effects
- **Body**: Comfortable 1.1+ line height for readability

### Visual Elements
- **Animated Blobs**: Moving gradient backgrounds in hero
- **Gradient Borders**: 2px animated gradient borders on cards
- **Shadow Depth**: Multi-layer shadows for elevation
- **Backdrop Blur**: Translucent elements with blur effects
- **Grid Patterns**: Subtle grid overlays for texture
- **Custom Scrollbar**: Gradient-styled to match brand

### Animations
- **Scroll Triggers**: Elements fade/slide in on viewport entry
- **Gradient Animation**: Continuously moving gradient backgrounds
- **Hover Effects**: Scale, shadow, and translation transforms
- **Micro-interactions**: Button arrows, icon scales, focus rings
- **Floating Elements**: Subtle floating animations on decorative elements

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will auto-reload when you make changes to the code.

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
npm start
```

**Build Stats:**
- Main page: 151 KB First Load JS
- Optimized for performance and SEO
- Static generation for instant loading

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live in minutes!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables are required for the basic setup. If you add a backend or email service later, add them in your Vercel project settings.

## 📝 Customization

### Update Content

- **Hero Section**: Edit `components/Hero.tsx` (headline, tagline, CTAs)
- **Logo**: Replace `public/robra-it.svg` with your logo
- **Services**: Modify the `services` array in `components/About.tsx`
- **Process Steps**: Update the `steps` array in `components/HowItWorks.tsx`
- **Statistics**: Edit the `stats` array in `components/Trust.tsx`
- **Contact Email**: Change support email in `components/Footer.tsx`

### Styling

- **Colors**: Modify `tailwind.config.js` and `app/globals.css`
  - Update primary/accent colors
  - Customize gradient definitions
  - Adjust shadow and blur values
- **Fonts**: Change font in `app/layout.tsx`
- **Animations**: Edit animation speeds in `app/globals.css`
- **Components**: Update shadcn/ui components in `components/ui/`

### Form Submission

The contact form currently logs to the console. To connect it to a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the `onSubmit` function in `components/ContactForm.tsx`
3. Add your preferred email service (SendGrid, Resend, Postmark, etc.)

Example API route:
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Send email with your service
  return Response.json({ success: true })
}
```

## 📋 Compliance

The site includes complete SMS consent disclosures:

- **Contact form**: Full opt-in disclosure above submit button
- **Footer**: Complete privacy policy and SMS terms
- **TCPA Compliant**: Meets all US SMS marketing requirements
- **No Data Sharing**: Clear statement about no third-party sharing

## 🎯 SEO & Metadata

Complete SEO implementation:
- Title and description tags
- OpenGraph tags for social sharing
- Twitter card support
- Keyword optimization
- Robots.txt directives
- Structured data ready

## 🧰 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3.4+
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion 11+
- **Forms**: React Hook Form 7+
- **Icons**: lucide-react
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel

## 🌟 Premium Design Inspiration

This design draws inspiration from:
- **Deel.com**: Layered gradients, movement, depth
- **Modern SaaS**: Clean, professional, conversion-focused
- **Material Design 3**: Elevation, blur, shadows
- **Apple Design**: Minimalism, typography, whitespace

## 📄 License

This project is created for Robra IT.

## 🤝 Support

For questions or support, contact: support@robrait.com

---

Built with Next.js, TailwindCSS, and Framer Motion
© 2025 Robra IT. All Rights Reserved.
