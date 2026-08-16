# Mono Code website

The V1 marketing site for Mono Code, a small remote-first digital agency helping established local businesses improve how customers find, trust, and contact them online.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS with a custom editorial design system
- Motion for restrained, reduced-motion-aware interaction
- shadcn/ui with Radix primitives, initialized for future accessible functional components
- Vercel Web Analytics
- Playwright, axe-core, and Lighthouse CI for quality checks

The site is static and does not require a CMS, Supabase, or an on-site form.

## Local setup

Copy `.env.example` to `.env.local`, then set:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BOOKING_URL` once the Google Calendar Appointment Schedule is ready

Run `npm run dev` for local development and `npm run build` for a production build.

## Verification

- `npm run lint`
- `npm run build`
- `npm run test:e2e`
- `npm run lighthouse` after a production build

## Launch dependencies

- Final Google Calendar booking URL
- Verified `khuram@monocode.space` inbox
- Approved founder portraits
- Approved authenticated CRM screenshots, if they are added
- GitHub repository, Vercel project, and `monocode.space` DNS connection
