import WordCarousel from "./WordCarousel.jsx";
import { HERO_WORDS } from "../data/heroWords.js";
import SocialLinks from "./SocialLinks.jsx";
import crown from "../assets/doodles/crown.png";
import star from "../assets/doodles/star.png";
import HeroBackground from "./HeroBackground.jsx";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <HeroBackground/>
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
            aria-label="Join the Girls Only Study Space Discord server"
          >
            <span>Join GOSS Discord Server</span>
          </a>
        </div>
      </div>
      <img src={crown} className="picBg crown" alt="Crown" />
      <img src={star} className="picBg star" alt="Star" />

      <SocialLinks />
    </section>
  );
}
