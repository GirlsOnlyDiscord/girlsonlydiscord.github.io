import WordCarousel from "./WordCarousel.jsx";
import { HERO_WORDS } from "../data/heroWords.js";
import HeroBackground from "./HeroBackground.jsx";
import RealTalkLogo from "../assets/RealTalk.png";

// Reusing the podcast's existing Spotify link from socials.js —
// swap this for a dedicated RealTalk link if there is one.
const REALTALK_URL =
  "https://open.spotify.com/show/40jD6FVIfkOAOeXlcQ9Zpe?si=814c38dccfc14aef";

const REALTALK_CAPTION = "LISTEN TO OUR PODCAST";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <HeroBackground />

      <a
        className="realTalkBadge"
        href={REALTALK_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Listen to RealTalk, GOSS's podcast — listen to established, accomplished women and get the most from their wisdom"
      >
        <svg
          className="realTalkTextRing"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            <path
              id="realTalkCirclePath"
              d="M 15,100 A 85,85 0 0,1 185,100"
            />
          </defs>
          <text>
            <textPath href="#realTalkCirclePath" startOffset="50%" textAnchor="middle">
              {REALTALK_CAPTION}
            </textPath>
          </text>
        </svg>
        <img
          src={RealTalkLogo}
          alt=""
          className="realTalkBadgeImg"
          aria-hidden="true"
        />
      </a>

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
        </div>
      </div>
    </section>
  );
}