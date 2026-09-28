import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" }, { href: "/games", label: "Games" },
  { href: "/software", label: "Software" }, { href: "/devlog", label: "Devlog" },
  { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
];

export default function Header() {
  return <header className="site-header"><div className="nav-container">
    <Link href="/" className="brand"><Image src="/branding/nidhogg-works-logo.png" alt="Nidhogg Works dragon emblem" width={58} height={58} className="brand-logo" priority/><span className="brand-text"><strong>NIDHOGG</strong><small>WORKS</small></span></Link>
    <nav className="nav-links" aria-label="Main navigation">{links.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
  </div></header>;
}
