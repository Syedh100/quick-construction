# Quick Fix Construction Website

A premium, custom-built website for Quick Fix Construction showcasing their construction and renovation services.

## Features

- **Modern Design**: Premium gold and black color scheme matching the company branding
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Portfolio**: Filterable gallery with lightbox modal
- **Contact Forms**: Functional contact and quote request forms
- **Smooth Animations**: Professional animations using Framer Motion
- **SEO Optimized**: Built with Next.js for optimal search engine visibility

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS (optional)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Set up EmailJS for form submissions:
   - Sign up at https://www.emailjs.com/
   - Create email service and templates
   - Add your credentials to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   - Note: Forms will work without EmailJS (data will be logged to console)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
quick-fix-construction/
├── app/                    # Next.js app router pages
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── portfolio/        # Portfolio gallery page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Navigation.tsx    # Site navigation
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── ServiceCard.tsx   # Service display card
│   ├── PortfolioCard.tsx # Portfolio item card
│   ├── ContactForm.tsx   # Contact form
│   ├── QuoteForm.tsx     # Quote request form
│   └── Button.tsx        # Reusable button component
├── lib/                   # Utility functions
│   ├── utils.ts          # General utilities
│   └── emailjs.ts        # EmailJS integration
└── public/                # Static assets
    └── images/
        └── portfolio/     # Portfolio images
```

## Customization

### Adding Portfolio Images

1. Replace placeholder images in `public/images/portfolio/`
2. Recommended size: 1200x900 pixels (4:3 aspect ratio)
3. Update portfolio items in `app/portfolio/page.tsx` if needed

### Updating Content

- **Services**: Edit `app/services/page.tsx`
- **About**: Edit `app/about/page.tsx`
- **Contact Info**: Edit `components/Footer.tsx` and `app/contact/page.tsx`
- **Company Info**: Edit `app/layout.tsx` (metadata)

### Color Scheme

Colors are defined in `app/globals.css`:
- Primary Gold: `#D4AF37`
- Dark Background: `#0A0A0A`
- Text Light: `#F5F5F5`

## Building for Production

```bash
npm run build
npm start
```

## Form Configuration

The website includes two forms:
1. **Contact Form**: General inquiries
2. **Quote Request Form**: Project-specific quote requests

### Without EmailJS

Forms will log data to the browser console. This is useful for development.

### With EmailJS

1. Create an account at https://www.emailjs.com/
2. Set up email service (Gmail, Outlook, etc.)
3. Create two email templates:
   - `contact_template`: For contact form submissions
   - `quote_template`: For quote requests
4. Add environment variables to `.env.local`
5. Forms will send emails automatically

## Deployment

This website can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**

For Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables if using EmailJS
4. Deploy!

## Support

For questions or issues, please contact the development team.

---

Built with ❤️ for Quick Fix Construction