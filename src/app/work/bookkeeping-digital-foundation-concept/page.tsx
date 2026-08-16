import type { Metadata } from "next";
import Link from "next/link";
import { BookkeepingConceptFrame } from "@/components/bookkeeping-concept-frame";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Bookkeeping Digital Foundation Concept",
  description: "A clearly labelled fictional concept showing how Mono Code would improve service clarity, trust, local visibility foundations, and contact paths for a bookkeeping firm.",
  alternates: { canonical: "/work/bookkeeping-digital-foundation-concept" },
};

const changes = [
  ["01", "Lead with the operating promise", "The opening message explains who the firm helps and why its bookkeeping stays useful, instead of leading with a generic list of tasks."],
  ["02", "Turn services into a decision path", "Monthly bookkeeping, cleanup, and reporting would each explain the situation they fit, the expected inputs, and the next useful step."],
  ["03", "Use trust without theatre", "Credentials, team information, service area, process, and genuine client evidence belong close to the claims they support. Empty badge walls and invented numbers do not."],
  ["04", "Keep contact friction low", "A named conversation, visible response expectation, and reliable form or calendar route replace vague contact language and competing calls to action."],
] as const;

export default function BookkeepingConceptPage() {
  return <>
    <BreadcrumbSchema items={[{name:"Home",path:"/"},{name:"Work",path:"/work"},{name:"Bookkeeping concept",path:"/work/bookkeeping-digital-foundation-concept"}]}/>
    <section className="page-hero section-dark"><div className="shell">
      <p className="eyebrow">Concept study · Fictional example · Not client work</p>
      <h1 className="display display-small">When the digital presence catches up with the firm behind it.</h1>
      <p className="lede">Northline Bookkeeping is a fictional practice created to demonstrate Mono Code&apos;s judgment for a specific audience. It has no real client, testimonial, ranking, or performance result behind it.</p>
      <div className="case-facts" style={{marginTop:"3rem"}}>
        <div className="case-fact"><span className="meta">Type</span><p>Transparent concept study</p></div>
        <div className="case-fact"><span className="meta">Audience</span><p>Established local bookkeeping firms</p></div>
        <div className="case-fact"><span className="meta">Claim boundary</span><p>Design reasoning only</p></div>
      </div>
    </div></section>

    <section className="section section-white"><div className="shell">
      <article className="case-content"><p className="meta">01 / Brief</p><div><h2 className="title">Show the quality of a steady professional service without making it feel anonymous.</h2><p>The concept assumes a credible local firm whose website has fallen behind the business. The job is not to decorate bookkeeping. It is to make the services, working relationship, trust information, and next step easier to understand.</p></div></article>
      <article className="case-content"><p className="meta">02 / Direction</p><div><h2 className="title">A working ledger becomes the visual and structural idea.</h2><p>Rules, balances, statuses, and plain labels shape the interface. The direction uses Mono Code&apos;s ink, paper, and signal-blue system while introducing a ledger-green accent specific to the bookkeeping subject.</p><div className="concept-stage"><BookkeepingConceptFrame /></div></div></article>
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-head"><p className="eyebrow">What the concept tests</p><h2 className="title">Four improvements tied to a buyer&apos;s actual questions.</h2></div>
      <div className="concept-change-grid">{changes.map(([number,title,copy])=><article className="concept-change" key={title}><span className="number">{number}</span><div><h3 className="h3">{title}</h3><p>{copy}</p></div></article>)}</div>
    </div></section>

    <section className="section section-dark"><div className="shell split">
      <div><p className="eyebrow">What this does not prove</p></div>
      <div><h2 className="title">A concept can demonstrate judgment. It cannot demonstrate client results.</h2><p className="lede">This page does not claim that a bookkeeping firm hired Mono Code, that the direction was launched, or that it produced traffic, rankings, enquiries, or revenue. Those claims require real delivery and verified evidence.</p><div className="button-row" style={{marginTop:"2rem"}}><Link className="button button-light" href="/start-a-project">Discuss a real project <span className="arrow">→</span></Link><Link className="button button-ghost button-on-dark" href="/work">View all work</Link></div></div>
    </div></section>
  </>;
}
