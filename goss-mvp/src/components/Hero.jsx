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
            <span>Join GOSS </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
              <g id="arrow-right-keyboard">
                <path fill="#F6F1DB" fill-rule="evenodd" d="m23.1173 11.1162 -8 -7.99999 -1.7678 1.76777 5.8661 5.86612 -19.214623437 0 0 2.5 19.214623437 0 -5.8661 5.8661 1.7678 1.7678 8 -8 0.8839 -0.8839 -0.8839 -0.8839Z" clip-rule="evenodd" stroke-width="1"></path>
              </g>
            </svg>
          </a>

          <BenefitsStrip />
        </div>
      </div>
      <SocialLinks />
    </section>
  );
}