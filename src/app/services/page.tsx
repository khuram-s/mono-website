import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tailored website, launch SEO, local visibility, analytics, and selected creative support for established local businesses.",
  alternates: { canonical: "/services" },
};

const serviceDetails = [
  {
    number: "01",
    title: "Website strategy, design, and development",
    description:
      "We shape the site around the questions a potential customer needs answered: what you do, why they should trust you, and how they can take the next step.",
    included: [
      "Page, content, and enquiry-path planning",
      "Responsive interface design and development",
      "Core service, credibility, and contact pages",
    ],
    boundary:
      "Page count, copywriting depth, booking tools, and other integrations are agreed after we review the current setup.",
  },
  {
    number: "02",
    title: "Launch SEO foundations",
    description:
      "The website is structured so search engines can understand it and people can scan it clearly. This establishes a sound launch baseline rather than promising instant rankings.",
    included: [
      "Search-aware page structure and on-page hierarchy",
      "Titles, descriptions, indexing, and technical essentials",
      "Structured data and internal-linking foundations where relevant",
    ],
    boundary:
      "Ongoing content production, link building, and continuing SEO campaigns are separate from the launch foundation.",
  },
  {
    number: "03",
    title: "Google Business Profile improvement",
    description:
      "For eligible businesses, we align the profile with the website so customers encounter accurate, consistent information across local search and the site.",
    included: [
      "Profile information, category, and service review",
      "Website and profile consistency checks",
      "Practical recommendations for missing or weak profile content",
    ],
    boundary:
      "Google controls eligibility and visibility. We cannot guarantee profile approval, reinstatement, placement, or ranking.",
  },
  {
    number: "04",
    title: "Analytics and enquiry tracking",
    description:
      "We establish a practical measurement baseline so you can see whether people reach the site and use the actions that matter to the business.",
    included: [
      "Page-level traffic measurement",
      "Tracking for agreed enquiry actions and key links",
      "Account access and a clear explanation of what is measured",
    ],
    boundary:
      "The exact platform and events depend on the website, privacy requirements, and the decisions you need the data to support.",
  },
  {
    number: "05",
    title: "QA, launch, and handover",
    description:
      "Before launch, we review the finished experience across common devices and browsers, then publish it through a controlled handover.",
    included: [
      "Responsive, browser, accessibility, and performance checks",
      "Launch coordination and final technical review",
      "Account access, essential guidance, and agreed handover materials",
    ],
    boundary:
      "Hosting, domain, third-party subscriptions, maintenance, and post-launch support are stated separately in the proposal.",
  },
] as const;

const addOns = [
  ["Copy and brand refinement", "Focused help sharpening website language and existing brand elements so the final experience feels consistent."],
  ["Graphic design", "Supporting digital graphics, diagrams, and visual assets needed by the agreed pages or campaign."],
  ["Video editing", "Editing supplied or separately planned footage into concise website and social-ready material."],
  ["Additional landing pages", "Dedicated pages for a priority service, location, audience, or campaign beyond the core site structure."],
  ["Ongoing SEO", "Post-launch technical, content, and search improvement work shaped by priorities and available evidence."],
  ["Maintenance", "Planned software updates, small content changes, monitoring, and technical support after handover."],
] as const;

const scopeFactors = [
  ["Current position", "What already works, what needs replacing, and which accounts or assets can be reused."],
  ["Content depth", "The number of services, locations, audiences, and decisions the website needs to support."],
  ["Production needs", "The copy, photography, graphics, video, and technical integrations required to complete the experience."],
  ["Ongoing role", "Whether the project ends at handover or continues into maintenance, content, or search improvement."],
] as const;

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Services</p>
          <h1 className="display display-small">A practical digital foundation, scoped around your business.</h1>
          <p className="lede">
            Our core engagement connects your website, search foundations, local credibility, and enquiry journey. We recommend the exact scope after discovery, then provide a clear quote.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Standard core engagement</p>
            <h2 className="title">Five connected parts, shaped into one useful foundation.</h2>
            <p className="lede">
              These are the disciplines we expect most projects to need. Their depth changes with the business; the responsibility to make them work together does not.
            </p>
          </div>

          <div className="service-detail-list">
            {serviceDetails.map((service) => (
              <article className="service-detail" key={service.title}>
                <span className="number">{service.number}</span>
                <div className="service-detail-main">
                  <h2 className="h3">{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="included-list">
                    {service.included.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <aside className="service-detail-scope">
                  <span className="meta">Scope note</span>
                  <p>{service.boundary}</p>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Selected add-ons</p>
            <h2 className="title">Add what strengthens the outcome.</h2>
            <p className="lede">Add-ons are recommended selectively when they solve a real project need.</p>
          </div>
          <div className="card-grid">
            {addOns.map(([title, description], index) => (
              <article className="card" key={title}>
                <span className="number">0{index + 1}</span>
                <div>
                  <h3 className="h3">{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">What shapes the scope</p>
            <h2 className="title">The same foundation should not produce the same proposal for every business.</h2>
          </div>
          <div className="scope-factors">
            {scopeFactors.map(([title, description], index) => (
              <article className="scope-factor" key={title}>
                <span className="number">0{index + 1}</span>
                <h3 className="h3" style={{ marginTop: "2rem" }}>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="shell split">
          <p className="eyebrow">How quoting works</p>
          <div>
            <h2 className="title">A clear recommendation before any work starts.</h2>
            <p className="lede" style={{ color: "white", margin: "1.5rem 0 2rem" }}>
              We review the current position, identify the useful next step, and document the scope, responsibilities, timing, and quote. You can assess the whole recommendation before committing.
            </p>
            <Link className="button button-light" href="/start-a-project">
              Discuss your project <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
