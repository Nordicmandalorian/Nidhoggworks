import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const kingfallTags = ["Real-Time Strategy", "Mobile", "Persistent World", "Diplomacy", "Economy", "Warfare"];
const aetherTags = ["Open World", "Single Player", "Exploration", "Story Driven", "Character Progression", "PC"];

export default function Games() {
  return (
    <PageShell>
      <section className="games-hero-v06">
        <div className="games-hero-v06__shade" />
        <div className="games-hero-v06__copy">
          <p className="eyebrow">OUR GAMES</p>
          <h1>Worlds to command.<br/><span>Worlds to explore.</span></h1>
          <p>Distinct experiences set in Aeridane. From realm-scale strategy to open-world adventure, each game offers a different way to shape, explore, and experience the world.</p>
        </div>
      </section>

      <section className="games-showcase-v06">
        <article className="game-card-v06 kingfall-v06">
          <div className="game-card-v06__art">
            <Image src="/images/kingfall-clean.jpg" alt="Fantasy armies advancing across a strategic map of kingdoms and provinces" fill priority className="game-art-v06" />
          </div>
          <div className="game-card-v06__body">
            <p className="game-meta-v06">GRAND STRATEGY · MOBILE · IN DEVELOPMENT</p>
            <h2>Aeridane: Kingfall</h2>
            <p>Command a realm in a real-time grand-strategy game set across Aeridane. Develop provinces, build armies, manage resources, forge alliances, and wage war for territorial control.</p>
            <div className="game-tags-v06">{kingfallTags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="game-card-v06__footer">
              <Link href="/games/kingfall" className="button button-primary">View Kingfall →</Link>
              <span className="development-v06">⚒ &nbsp; In Development</span>
            </div>
          </div>
        </article>

        <article className="game-card-v06 aether-v06">
          <div className="game-card-v06__art">
            <Image src="/images/aether-clean.jpg" alt="An adventurer overlooking a vast explorable fantasy landscape" fill priority className="game-art-v06" />
          </div>
          <div className="game-card-v06__body">
            <p className="game-meta-v06">OPEN-WORLD RPG · PC · IN DEVELOPMENT</p>
            <h2>Aether: Ashes of the Empire</h2>
            <p>Explore a vast and immersive open world, uncover lost history, shape your journey, and experience the living world of Aeridane from ground level.</p>
            <div className="game-tags-v06">{aetherTags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="game-card-v06__footer">
              <Link href="/games/aether-ashes-of-the-empire" className="button button-secondary aether-button">View Ashes of the Empire →</Link>
              <span className="development-v06">⚒ &nbsp; In Development</span>
            </div>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
