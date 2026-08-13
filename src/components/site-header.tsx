import Link from "next/link";
import { navItems } from "@/lib/site";
import { Wordmark } from "./wordmark";
export function SiteHeader() {
  return <header className="site-header"><div className="shell nav"><Wordmark /><nav className="nav-links" aria-label="Primary navigation">{navItems.slice(0, 3).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link className="button button-primary" href="/start-a-project">Book a discovery call <span className="arrow">↗</span></Link></nav><details className="mobile-nav"><summary>Menu</summary><nav className="mobile-panel" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></details></div></header>;
}
