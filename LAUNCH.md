# Mono Code V1 launch handoff

_Status: production-ready code; external launch inputs pending_

## Completed

- All public routes, navigation, footer, 404, privacy, and terms pages
- Editorial design system, responsive layouts, wordmark, and favicon
- Find → Trust → Contact motion with reduced-motion support
- Honest founder-project CRM case study with a direct public-login capture
- Static metadata, canonicals, sitemap, robots, Open Graph image, and defensible structured data
- Vercel Web Analytics integration, enabled automatically on Vercel
- Playwright, axe-core, and Lighthouse CI checks

## Inputs required before production

1. Confirm production delivery for `khuram@monocode.space` after deployment.
2. Approve only authenticated CRM screenshots that contain no personal, prospect, or commercially sensitive information.
3. Create the GitHub repository and grant both founders appropriate access.
4. Create the Vercel project from the GitHub repository, using `website` as the root directory if the wider Mono Code workspace is the repository root.
5. Add the production environment variables, connect `monocode.space`, choose apex as canonical, redirect `www`, and verify HTTPS.

## Google Calendar configuration

- Appointment: 30-minute discovery call
- Host: primary calendar owner
- Conferencing: Google Meet
- Availability: Tuesday and Thursday 8–10 PM PKT; Saturday 7–10 PM PKT
- Minimum notice: 24 hours
- Buffer: 15 minutes
- Maximum: 2 discovery calls per day
- Required fields: first name, last name, email
- Optional context: request it through a reply to the confirmation rather than a required brief
- Add the second participant manually when their input is relevant
- Before launch: test timezone conversion, reminders, rescheduling, cancellation, host conflicts, and shared-calendar conflicts

Current booking URL: <https://calendar.app.google/b4sK6vopgYTupQKX6>

Manual check on August 13, 2026 found configuration differences that must be corrected in Google Calendar:

- The organizer identity is displayed as `MonoCode Labs`; the public company name should be `Mono Code`.
- The live calendar exposes Monday–Friday daytime slots around 9 AM–4 PM PKT and no Saturday times. Availability will be updated later; this is intentionally deferred.
- The required name and email fields plus optional Contact Info, Company Name, and discussion-context fields are approved for the current booking flow.
- Google Meet and the 30-minute duration are configured correctly.

## Deployment sequence

1. Push the reviewed project to GitHub.
2. Import it into Vercel and set the project root.
3. Set `NEXT_PUBLIC_SITE_URL=https://monocode.space` and the final booking URL.
4. Deploy a preview and run the full verification suite against it.
5. Record the current Spaceship DNS values, then apply Vercel's domain records without removing future mail records.
6. Verify apex/`www` redirects, SSL, sitemap, CRM link, booking flow, email, legal links, and analytics.
7. Submit the sitemap to Google Search Console and Bing Webmaster Tools.

## Verified locally

- Lint, TypeScript, and production build: pass
- Playwright/axe: 42 checks pass across desktop, mobile, tablet, wide desktop, keyboard focus, and reduced-motion behavior; 2 duplicate project runs are intentionally skipped
- Lighthouse: Home 97, Services 98, Start a Project 98 performance; all 3 score 100 for accessibility, best practices, and SEO
- Runtime dependency audit: 0 known vulnerabilities

The Google booking flow, domain connection, inbox delivery, and completed-booking measurement require their real external accounts and cannot be considered verified from the local build.
