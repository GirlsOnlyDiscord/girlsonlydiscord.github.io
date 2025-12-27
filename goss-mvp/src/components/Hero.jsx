import SocialLinks from "./SocialLinks.jsx";
import BenefitsStrip from "./BenefitsStrip.jsx";
import DiscordLogo from "../assets/DiscordLogo.png";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="heroInner">
        <div className="heroCenter">
          <p className="heroKicker">
            Your discord server for <span className="scrollHint">(scroll thru)</span>
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
