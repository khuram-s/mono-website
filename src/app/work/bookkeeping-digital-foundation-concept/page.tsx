import type { Metadata } from "next";
import Link from "next/link";
import { BookkeepingConceptFrame } from "@/components/bookkeeping-concept-frame";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Northline Bookkeeping Website Study",
  description: "An independent Mono Code project covering positioning, content structure, visual design, and a responsive homepage direction for a bookkeeping practice.",
  alternates: { canonical: "/work/bookkeeping-digital-foundation-concept" },
};

const deliveredWork = [
  ["01", "Positioning and opening promise", "A plain-language proposition leads with the practical value of dependable books: clearer decisions about the business."],
  ["02", "Page hierarchy and service paths", "The structure helps an owner understand the offer, find the relevant service direction, and move through the page without decoding accounting language."],
  ["03", "Trust-information framework", "The content plan gives credentials, people, service area, and evidence defined positions close to the claims they support."],
  ["04", "Responsive front-end and direct CTA", "The homepage direction adapts across screen sizes and keeps one clear consultation action available without competing routes."],
] as const;

export default function BookkeepingConceptPage() {
  return <>
    <BreadcrumbSchema items={[{name:"Home",path:"/"},{name:"Work",path:"/work"},{name:"Northline Bookkeeping",path:"/work/bookkeeping-digital-foundation-concept"}]}/>
    <section className="page-hero section-dark"><div className="shell">
      <p className="eyebrow">Independent project · Northline Bookkeeping</p>
      <h1 className="display display-small">When the digital presence catches up with the firm behind it.</h1>
      <p className="lede">Mono Code created Northline Bookkeeping as an independent website project for the bookkeeping market. We defined the positioning, content structure, enquiry journey, visual system, and responsive homepage direction shown here.</p>
      <div className="case-facts" style={{marginTop:"3rem"}}>
        <div className="case-fact"><span className="meta">Type</span><p>Independent website project</p></div>
        <div className="case-fact"><span className="meta">Scope</span><p>Strategy, design, and responsive front-end</p></div>
        <div className="case-fact"><span className="meta">Status</span><p>Completed homepage direction</p></div>
      </div>
    </div></section>

    <section className="section section-white"><div className="shell">
      <article className="case-content"><p className="meta">01 / Context</p><div><h2 className="title">A steady bookkeeping practice deserves a digital presence that feels equally dependable.</h2><p>The project starts with a common professional-services gap: valuable work can be difficult to judge when the website does not make the offer, trust information, or next step easy to understand. Creating Northline gave Mono Code a focused setting in which to solve that problem.</p></div></article>
      <article className="case-content"><p className="meta">02 / Challenge</p><div><h2 className="title">Turn a broad service into a clear path for the right owner.</h2><p>The homepage needed to explain who the practice helps, make recurring bookkeeping feel concrete, leave clear positions for credibility information, and guide visitors toward one conversation without crowding the page.</p></div></article>
      <article className="case-content"><p className="meta">03 / Approach</p><div><h2 className="title">Use a working ledger as both the visual idea and the organizing logic.</h2><p>Rules, balances, status language, and restrained colour create a system that feels precise without becoming cold. The same discipline shapes the content: answer the buyer&apos;s questions in order, then make the next step obvious.</p><div className="concept-stage"><BookkeepingConceptFrame /></div></div></article>
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-head"><p className="eyebrow">04 / What Mono Code built</p><h2 className="title">Four decisions shaped into one responsive homepage direction.</h2></div>
      <div className="concept-change-grid">{deliveredWork.map(([number,title,copy])=><article className="concept-change" key={title}><span className="number">{number}</span><div><h3 className="h3">{title}</h3><p>{copy}</p></div></article>)}</div>
    </div></section>

    <section className="section section-dark"><div className="shell split">
      <div><p className="eyebrow">05 / What the work demonstrates</p></div>
      <div><h2 className="title">A completed responsive homepage direction, shaped from strategy through front-end.</h2><p className="lede">The project outcome is a clearer hierarchy, a coherent ledger-inspired visual system, and a more direct enquiry path. It demonstrates Mono Code&apos;s strategy, design, and front-end capability at homepage scope.</p><div className="button-row" style={{marginTop:"2rem"}}><Link className="button button-light" href="/start-a-project">Discuss a similar project <span className="arrow">→</span></Link><Link className="button button-ghost button-on-dark" href="/work">View all work</Link></div></div>
    </div></section>
  </>;
}
