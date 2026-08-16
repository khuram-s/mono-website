import Link from "next/link";
import { BookkeepingConceptFrame } from "@/components/bookkeeping-concept-frame";
import { SignalJourney } from "@/components/signal-journey";
import { addOns, coreServices } from "@/lib/site";

const symptoms = [
  ["01", "Your website looks behind the business", "The quality of your work has moved on, but the first impression online has not."],
  ["02", "Your local presence feels inconsistent", "Customers see incomplete, unclear, or mismatched information across search and your site."],
  ["03", "Enquiries take too much effort", "Visitors have to hunt for the right service, proof, or way to contact you."],
] as const;

const process = [
  ["01", "Discover", "We learn how your business works, who needs to choose you, and where the current experience breaks down."],
  ["02", "Define", "We recommend the right scope, message, structure, and priorities before production begins."],
  ["03", "Build", "We design and develop the approved direction, then review it with you in clear stages."],
  ["04", "Launch", "We test, publish, connect measurement, and hand over a foundation you understand."],
] as const;

const faqs = [
  ["Do you offer fixed packages?", "We have a standard core engagement, but the final scope and quote are tailored after discovery. An established firm with a five-page site should not be treated the same as one with multiple locations, services, or content needs."],
  ["Do you publish pricing?", "Not at this stage. We first understand the business, current website, priorities, and required integrations, then recommend a clear scope and quote."],
  ["How long does a project take?", "Timing depends on the number of pages, content readiness, integrations, and review cycles. We include a realistic delivery schedule in the tailored recommendation rather than promising the same deadline for every project."],
  ["What do you need from us?", "A clear decision-maker, access to the current website and relevant business profiles, accurate service information, any available brand assets, and timely feedback at agreed review points."],
  ["Will we own the finished website?", "Ownership, accounts, handover materials, and any continuing support are stated in the project agreement before work begins. We do not hide these details behind the launch."],
  ["Can you help with Google Business Profile?", "For eligible businesses, we can improve profile completeness and consistency. We do not guarantee rankings, and Google retains control of profile eligibility and visibility."],
  ["Do you provide ongoing support?", "Yes. Maintenance and ongoing SEO can be added where they are useful. We will not push a recurring service that does not fit the project."],
] as const;

export default function Home() {
  return <>
    <section className="hero"><div className="shell hero-grid">
      <div className="hero-eyebrow"><p className="eyebrow">Digital presence for established local businesses</p></div>
      <div className="hero-title"><h1 className="display">Turn an outdated online presence into one customers can <span className="blue">trust.</span></h1></div>
      <div className="hero-bottom"><p className="lede">We create professional websites, strengthen local visibility foundations, and make it easier for the right customers to understand and contact your business.</p><div className="button-row"><Link className="button button-primary" href="/start-a-project">Book a discovery call <span className="arrow">↗</span></Link><a className="button button-ghost" href="#how-we-work">See how we work <span className="arrow">↓</span></a></div></div>
    </div></section>

    <section className="section section-white"><div className="shell">
      <div className="section-head"><p className="eyebrow">When the gap becomes visible</p><h2 className="title">A solid business should not feel uncertain online.</h2></div>
      <div className="card-grid">{symptoms.map(([n,t,c]) => <article className="card" key={t}><span className="number">{n}</span><div><h3 className="h3">{t}</h3><p>{c}</p></div></article>)}</div>
    </div></section>

    <section className="section section-dark"><div className="shell">
      <div className="section-head"><p className="eyebrow">The outcome path</p><h2 className="title">Your online presence has three jobs.</h2><p className="lede">Attention alone is not the goal. The experience needs to move a potential customer from discovery to confidence to a clear next step.</p></div>
      <SignalJourney />
    </div></section>

    <section className="section" id="how-we-work"><div className="shell engagement-grid">
      <div><p className="eyebrow">Core engagement</p><h2 className="title" style={{marginTop:"1.5rem"}}>One connected foundation, tailored to the business.</h2><p className="body-copy">We begin with a practical core, then adjust the scope around your current position, audience, and growth priorities. Every project is quoted after discovery.</p><Link className="text-link" href="/services">Explore services <span className="arrow">→</span></Link></div>
      <div className="service-list">{coreServices.map(([n,t,c]) => <article className="service-row" key={t}><span className="number">{n}</span><div><h3>{t}</h3><p>{c}</p></div><span className="pill">Core</span></article>)}</div>
    </div></section>

    <section className="section section-white"><div className="shell">
      <div className="section-head"><p className="eyebrow">Independent work</p><h2 className="title">A bookkeeping homepage direction designed and built by Mono Code.</h2></div>
      <div className="work-feature work-feature-concept"><div className="work-copy"><div><span className="pill">Independent project</span><h3 className="title" style={{marginTop:"1.5rem"}}>Northline Bookkeeping</h3><p className="body-copy">Mono Code defined the positioning, content structure, enquiry path, visual system, and responsive homepage direction.</p></div><Link className="text-link" href="/work/bookkeeping-digital-foundation-concept">View the work <span className="arrow">→</span></Link></div><div className="work-visual work-visual-concept"><BookkeepingConceptFrame /></div></div>
    </div></section>

    <section className="section"><div className="shell">
      <div className="section-head"><p className="eyebrow">A clear route to launch</p><h2 className="title">Enough structure to stay aligned. Enough flexibility to fit.</h2></div>
      <div className="process-grid">{process.map(([n,t,c]) => <article className="process-step" key={t}><span className="step-no">{n} / 04</span><div><h3 className="h3">{t}</h3><p>{c}</p></div></article>)}</div>
    </div></section>

    <section className="section section-white"><div className="shell split"><div><p className="eyebrow">Selected add-ons</p><h2 className="title" style={{marginTop:"1.5rem"}}>Add what strengthens the outcome.</h2></div><div className="card-grid" style={{gridTemplateColumns:"repeat(2,1fr)"}}>{addOns.map((item,i)=><div className="card" style={{minHeight:180}} key={item}><span className="number">0{i+1}</span><h3 className="h3">{item}</h3></div>)}</div></div></section>

    <section className="section"><div className="shell split"><div><p className="eyebrow">FAQ</p><h2 className="title" style={{marginTop:"1.5rem"}}>Straight answers before we talk.</h2></div><div className="faq-list">{faqs.map(([q,a])=><details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section className="section section-blue"><div className="shell split"><div><p className="eyebrow">Start with a conversation</p></div><div><h2 className="title">Let’s find the most useful next step for your online presence.</h2><p className="lede" style={{color:"white", margin:"1.5rem 0 2rem"}}>A 30-minute discovery call to understand the business, the current gaps, and whether we are a fit.</p><Link className="button button-light" href="/start-a-project">Book a discovery call <span className="arrow">↗</span></Link></div></div></section>
  </>;
}
