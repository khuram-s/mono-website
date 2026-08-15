import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "About and process",
  description:
    "Learn how Mono Code approaches clear, practical digital work from discovery and scope through design, development, and launch.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["01", "Clear scope", "Define what is being solved, what will be delivered, and where the boundaries sit."],
  ["02", "Honest communication", "Surface questions and constraints early, then keep progress understandable."],
  ["03", "Tailored execution", "Use a repeatable process without pretending every business needs the same website."],
  ["04", "Practical outcomes", "Make decisions around clarity, credibility, discoverability, and easier contact."],
] as const;

const process = [
  ["01", "Discovery", "Understand the business, audience, current presence, and commercial priorities."],
  ["02", "Recommendation", "Turn the findings into a focused scope, structure, and quote."],
  ["03", "Design", "Set the visual direction and shape the key page experiences."],
  ["04", "Development", "Build the approved direction as a fast, responsive website."],
  ["05", "Review", "Test, refine, and confirm the details across devices."],
  ["06", "Launch and support", "Publish, measure, hand over, and support what comes next."],
] as const;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">About Mono Code</p>
          <h1 className="display display-small">Small by design. Serious about the work.</h1>
          <p className="lede">
            Mono Code is a focused digital agency helping established businesses build a clearer, more credible online presence.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split">
          <div>
            <p className="eyebrow">The agency</p>
            <h2 className="title" style={{ marginTop: "1.5rem" }}>Close collaboration without the agency theatre.</h2>
          </div>
          <div>
            <p className="lede">
              We keep the working model lean: direct communication, focused responsibility, and fewer layers between a decision and the work.
            </p>
            <p className="body-copy">
              Every engagement begins with the business need. We define a realistic scope, explain the decisions clearly, and build toward an outcome customers can understand and use.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Operating principles</p>
            <h2 className="title">The standards behind the process.</h2>
          </div>
          <div className="principles">
            {principles.map(([number, title, description]) => (
              <article className="principle" key={title}>
                <span className="number">{number}</span>
                <h3 className="h3" style={{ marginTop: "2rem" }}>{title}</h3>
                <p className="body-copy">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Process</p>
            <h2 className="title">From first conversation to a confident launch.</h2>
          </div>
          <div className="card-grid">
            {process.map(([number, title, description]) => (
              <article className="card" key={title}>
                <span className="number">{number}</span>
                <div>
                  <h3 className="h3">{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link className="button button-primary" href="/start-a-project">
              Start a conversation <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
