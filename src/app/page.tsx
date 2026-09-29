import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const posts = [
 {title:"The Forge Opens",date:"SEP 28, 2026",text:"Nidhogg Works takes shape as the studio and its first projects move into development.",image:"/images/forge.jpg"},
 {title:"Kingfall Development Begins",date:"SEP 28, 2026",text:"Early planning, worldbuilding foundations and core systems design for Aeridane: Kingfall.",image:"/images/kingfall-dev.jpg"},
 {title:"Studio Roadmap",date:"COMING SOON",text:"The road ahead for Nidhogg Works, our games and future development milestones.",image:"/images/roadmap.jpg"},
];

export default function Home(){return <PageShell>
<section className="hero-v3">
 <Image src="/images/hero-landscape.jpg" alt="Dark fantasy mountains, castle and dragon" fill priority className="hero-bg-v3" sizes="100vw"/>
 <div className="hero-overlay-v3"/><div className="hero-inner-v3 hero-inner-clean"><div className="hero-copy-v3"><p className="eyebrow">INDEPENDENT GAME & SOFTWARE DEVELOPMENT</p><h1>FORGING WORLDS.<br/><span>BUILDING MORE.</span></h1><p>Independent development rooted in worldbuilding, ambitious systems and digital craftsmanship.</p><div className="hero-actions-v3"><Link href="/games" className="button button-primary">Explore Our Games →</Link><Link href="/about" className="button button-secondary">Enter the Forge →</Link></div></div></div>
</section>
<section className="pillar-strip-v3"><Link href="/games" className="pillar-v3"><b>01</b><div><h2>Games</h2><p>Immersive worlds and player-driven experiences.</p></div><i>→</i></Link><Link href="/software" className="pillar-v3"><b>02</b><div><h2>Software</h2><p>Practical tools and purpose-built digital solutions.</p></div><i>→</i></Link><div className="pillar-v3"><b>03</b><div><h2>Worldbuilding</h2><p>Deep lore, living settings and systems built from the roots up.</p></div></div></section>
<section className="section"><div className="feed-head"><div><p className="eyebrow">FEATURED PROJECTS</p><h2>Two ways into Aeridane.</h2></div><Link href="/games" className="text-link">View all games →</Link></div><div className="dual-project-grid">
 <article className="project-feature"><div className="project-feature-art"><Image src="/images/kingfall-keyart.jpg" alt="Aeridane Kingfall strategy game concept art" fill className="cover-image" sizes="(max-width:850px) 100vw, 50vw"/></div><div className="project-feature-body"><p className="eyebrow">GRAND STRATEGY</p><h3>Aeridane: Kingfall</h3><p>Command a realm in a real-time grand-strategy game set across Aeridane. Develop provinces, build armies, manage resources, negotiate with rivals and wage wars for territory.</p><div className="project-tags-v3"><span>GRAND STRATEGY</span><span>REAL-TIME</span><span>PC</span><span>IN DEVELOPMENT</span></div><Link href="/games/kingfall" className="button button-primary">Discover Kingfall →</Link></div></article>
 <article className="project-feature aether-feature"><div className="aether-placeholder"><span>AETHER</span><small>ASHES OF THE EMPIRE</small></div><div className="project-feature-body"><p className="eyebrow aether-accent">OPEN-WORLD RPG</p><h3>Aether: Ashes of the Empire</h3><p>The first open-world entry in the Aether series. Explore Aeridane on foot, discover its people and places, and experience a character-driven adventure in a world shaped by Aether.</p><div className="project-tags-v3"><span>OPEN-WORLD RPG</span><span>EXPLORATION</span><span>PC</span><span>IN DEVELOPMENT</span></div><Link href="/games/aether-ashes-of-the-empire" className="button button-secondary">Discover Aether →</Link></div></article>
 </div></section>
<section className="section forge-feed"><div className="feed-head"><div><p className="eyebrow">LATEST FROM THE FORGE</p><h2>Development Journal</h2></div><Link href="/devlog" className="text-link">View all posts →</Link></div><div className="post-grid">{posts.map(p=><article className="post-card" key={p.title}><div className="post-image"><Image src={p.image} alt="" fill className="cover-image" sizes="(max-width:850px) 100vw, 33vw"/></div><div className="post-body"><time>{p.date}</time><h3>{p.title}</h3><p>{p.text}</p><Link href="/devlog">Read more →</Link></div></article>)}</div></section>
</PageShell>}
