# Nonprofit Landing Page

A conversion-focused Next.js landing page with email capture functionality.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Responsive design (mobile-first)
- Email capture form with validation
- Loading states and error handling
- Accessible (semantic HTML, ARIA labels)
- SEO optimized (meta tags)
- Tailwind CSS styling
- API route ready for email provider integration

## Connect Email Provider

Edit `pages/api/subscribe.js` to connect your email service:

- Mailchimp
- ConvertKit
- Buttondown
- EmailOctopus
- Or any other provider

## Deploy

Deploy instantly to Vercel:

```bash
npm run build
```

Then connect to your Vercel account or deploy to any Node.js hosting platform.

## Customization

- Colors: Edit `tailwind.config.js`
- Content: Edit `pages/index.js`
- Styling: Edit `styles/globals.css`
