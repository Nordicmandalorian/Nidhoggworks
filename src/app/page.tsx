import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function Home() {
 return <PageShell>
  <section className="hero-v2">
   <Image src="/images/home-concept.png" alt="Dark fantasy landscape representing the worlds forged by Nidhogg Works" fill priority className="hero-bg" sizes="100vw"/>
   <div className="hero-shade"/><div className="hero-v2-content">
    <p className="eyebrow">INDEPENDENT GAME & SOFTWARE DEVELOPMENT</p>
    <div className="hero-lockup"><Image src="/branding/nidhogg-works-logo.png" alt="Nidhogg Works" width={360} height={360} priority/></div>
    <h1>FORGING WORLDS.<br/><span>BUILDING MORE.</span></h1>
    <p>Independent development rooted in worldbuilding, ambitious systems and digital craftsmanship.</p>
    <div className="hero-actions"><Link href="/games" className="button button-primary">Explore Our Games →</Link><Link href="/about" className="button button-secondary">Enter the Forge →</Link></div>
   </div>
  </section>
  <section className="pillar-strip">
   <Link href="/games" className="pillar"><b>01</b><div><h2>Games</h2><p>Immersive worlds and player-driven experiences.</p></div></Link>
   <Link href="/software" className="pillar"><b>02</b><div><h2>Software</h2><p>Practical tools and purpose-built digital solutions.</p></div></Link>
   <div className="pillar"><b>03</b><div><h2>Worldbuilding</h2><p>Deep lore, living settings and systems built from the roots up.</p></div></div>
  </section>
  <section className="section"><div className="section-heading"><p className="eyebrow">FEATURED PROJECT</p><h2>Aeridane: Kingfall</h2></div>
   <div className="kingfall-card"><div className="kingfall-visual"><Image src="/images/home-concept.png" alt="Aeridane Kingfall concept artwork" fill className="cover-image" sizes="(max-width: 850px) 100vw, 55vw"/></div>
    <div className="kingfall-copy"><span className="status">IN DEVELOPMENT</span><h3>Build a House. Raise an army.<br/>Shape a world.</h3><p>An open-world RPG and grand-strategy experience set in Aeridane. Create your character and House, explore vast lands, recruit followers, build your holdings, command armies and fight beside them.</p><div className="project-tags"><span>OPEN-WORLD RPG</span><span>GRAND STRATEGY</span><span>SINGLE PLAYER</span><span>PC</span></div><Link href="/games" className="button button-primary">Discover Kingfall →</Link></div>
   </div>
  </section>
  <section className="forge-banner"><p className="eyebrow">LATEST FROM THE FORGE</p><h2>The forge is open.</h2><p>Nidhogg Works is taking shape, and development of Aeridane: Kingfall has begun.</p><Link href="/devlog" className="button button-secondary">Follow Development →</Link></section>
 </PageShell>;
}
