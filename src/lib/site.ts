export const SITE_NAME = "Mono Code";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://monocode.space";
export const SITE_DESCRIPTION = "Mono Code designs and builds professional websites, local visibility foundations, and clearer enquiry journeys for established local businesses.";
export const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@monocode.example";
export const CRM_DEMO_URL = "https://linked-in-outreach-crm-mvp-lac.vercel.app/login";
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendar.app.google/b4sK6vopgYTupQKX6";
export const navItems = [
  { href: "/services", label: "Services" }, { href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/start-a-project", label: "Start a project" },
];
export const coreServices = [
  ["01", "Website strategy, design, and development", "A professional website shaped around your business, audience, and enquiry path."],
  ["02", "Launch SEO foundations", "Search-ready structure, metadata, technical essentials, and clear on-page hierarchy."],
  ["03", "Google Business Profile improvement", "Eligible profile cleanup and alignment so your key business information is easier to find and trust."],
  ["04", "Analytics and enquiry tracking", "A practical measurement setup for page traffic and the actions that matter."],
  ["05", "QA, launch, and handover", "Cross-device review, launch support, and a straightforward handover."],
] as const;
export const addOns = ["Copy and brand refinement", "Graphic design", "Video editing", "Additional landing pages", "Ongoing SEO", "Maintenance"] as const;
