import SocialLinks from "./SocialLinks.jsx";
import BenefitsStrip from "./BenefitsStrip.jsx";
import DiscordLogo from "../assets/DiscordLogo.png";
import WordCarousel from "./WordCarousel.jsx";
import { HERO_WORDS } from "../data/heroWords.js";
import HeroBackground from "./HeroBackground.jsx";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <HeroBackground />

      <div className="heroInner">
        <div className="heroCenter">
          <p className="heroKicker">
            Your discord server for <WordCarousel items={HERO_WORDS} />
          </p>

          <a className="btn btnDiscord" href="#join" aria-label="Join on Discord">
            <img
              src={DiscordLogo}
              alt=""
              aria-hidden="true"
              className="discordIcon"
            />
            <span>Join</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <SocialLinks />
        <BenefitsStrip />
      </div>
    </section>
  );
}
