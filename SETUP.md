# Robra IT Setup Guide

## Environment Variables

### Resend API Key

The contact form uses Resend to send emails to alex.rubio@robrait.com.

1. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

2. Get your API key from [Resend Dashboard](https://resend.com/api-keys)

3. (Optional) Update the "from" email address in `app/api/contact/route.ts` once you verify your domain with Resend:
   ```typescript
   from: "Robra IT Contact Form <contact@yourdomain.com>"
   ```

   By default, it uses Resend's test email: `onboarding@resend.dev`

## Development

Run the development server:
```bash
npm run dev
```

## Deployment

Make sure to add the `RESEND_API_KEY` environment variable to your deployment platform (Vercel, etc.).
