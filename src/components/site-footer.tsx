import Link from "next/link";
import { EMAIL, navItems } from "@/lib/site";
import { Wordmark } from "./wordmark";
export function SiteFooter() {
  return <footer className="site-footer"><div className="shell"><div className="footer-grid"><p className="footer-statement">A better digital foundation for the business you have already built.</p><nav className="footer-links" aria-label="Footer navigation"><span className="meta">Explore</span>{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="footer-links"><span className="meta">Contact</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div><div className="footer-base"><Wordmark /><span>Small, focused, remote-first digital agency</span><span>© {new Date().getFullYear()} Mono Code</span></div></div></footer>;
}
