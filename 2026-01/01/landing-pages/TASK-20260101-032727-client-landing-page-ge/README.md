# Brew Haven Landing Page

A modern Next.js landing page with email capture functionality.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Email Setup (Optional)

The page works without email configuration. To send actual emails:

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Create `.env.local` and add:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

Without the API key, subscriptions are logged to console (test mode).

## Deploy

Deploy instantly to Vercel:

```bash
npm run build
```

Or connect your repo to Vercel for automatic deployments.

## Customization

- **Colors**: Edit `tailwind.config.js` primary/accent colors
- **Copy**: Edit text in `pages/index.js`
- **Fonts**: Configured in `pages/index.js` Head section
- **Email Template**: Edit `pages/api/subscribe.js`

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS 3
- Resend (email delivery)

Built with 2026 design trends: glassmorphism, generous whitespace, subtle animations, mobile-first responsive layout.