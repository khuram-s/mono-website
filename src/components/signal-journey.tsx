"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
const steps = [["01", "Find", "Clear structure and solid search foundations help the right people discover you."], ["02", "Trust", "Professional design, useful content, and consistent business information build confidence."], ["03", "Contact", "A focused enquiry path makes the next step obvious and easy to take."]] as const;
export function SignalJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] }); const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return <div className="signal-wrap" ref={ref}><div className="signal-track" aria-hidden="true"><motion.div className="signal-progress" style={{ scaleX: progress, scaleY: progress }} /></div><div className="signal-grid">{steps.map(([number, title, copy]) => <article className="signal-step" key={title}><span className="signal-dot" aria-hidden="true" /><span className="meta">{number} / Outcome</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>;
}
