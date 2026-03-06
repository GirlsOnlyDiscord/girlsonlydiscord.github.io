import WordCarousel from "./WordCarousel.jsx";
import { HERO_WORDS } from "../data/heroWords.js";
import SocialLinks from "./SocialLinks.jsx";
import BenefitsStrip from "./BenefitsStrip.jsx";
import HeroBackground from "./HeroBackground.jsx";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <HeroBackground />
      <div className="heroInner">
        <div className="heroCenter">
          <p className="heroKicker">Your discord server</p>
          <p className="heroKicker">
            for <WordCarousel items={HERO_WORDS} />
          </p>
          <a
            className="btn btnDiscord"
            href="https://discord.gg/girlsonlystudy"
            target="_blank"
            rel="noreferrer"
            aria-label="Join the Girls Only Study Space"
          >
            Join GOSS →
          </a>
          <BenefitsStrip />
        </div>
      </div>
      <SocialLinks />
    </section>
  );
}