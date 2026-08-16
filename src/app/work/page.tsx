import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { BookkeepingConceptFrame } from "@/components/bookkeeping-concept-frame";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore Northline Bookkeeping, an independent Mono Code project covering strategy, design, and responsive front-end work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <>
    <BreadcrumbSchema items={[{name:"Home",path:"/"},{name:"Work",path:"/work"}]}/>
    <section className="page-hero"><div className="shell">
      <p className="eyebrow">Work</p>
      <h1 className="display display-small">Proof should be specific, honest, and open to inspection.</h1>
      <p className="lede">Northline Bookkeeping is an independent Mono Code project showing how we turn positioning, content structure, visual design, and front-end work into one coherent homepage direction.</p>
    </div></section>
    <section className="section section-white"><div className="shell work-stack">
      <div className="work-feature work-feature-concept">
        <div className="work-copy"><div>
          <span className="pill">Independent project</span>
          <h2 className="title" style={{marginTop:"1.5rem"}}>Northline Bookkeeping</h2>
          <p className="body-copy">Strategy, design, and responsive front-end for a bookkeeping homepage built around service clarity, credible trust information, and a direct enquiry path.</p>
        </div><Link className="button button-primary" href="/work/bookkeeping-digital-foundation-concept">View the project <span className="arrow">→</span></Link></div>
        <div className="work-visual work-visual-concept"><BookkeepingConceptFrame/></div>
      </div>
    </div></section>
  </>;
}
