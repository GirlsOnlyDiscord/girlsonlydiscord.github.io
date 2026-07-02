import { Link } from "react-router-dom";
import { useState } from "react";
import { SOCIALS } from "../data/socials.js";

// Reusing the same Spotify link already used for the RealTalk badge
// on desktop (see REALTALK_URL in Hero.jsx) — this link only shows
// in the mobile menu, since desktop has the spinning badge instead.
const PODCAST_URL = SOCIALS.find((s) => s.label === "Spotify")?.href;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navWrap">
      <div className="navInner">
        {/* Brand */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brandText desktop">Girls Only Study Space</span>
          <span className="brandText mobile">GOSS</span>
        </Link>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
          <Link className="navLink" to="/support" onClick={closeMenu}>
            Support
          </Link>
          <a href="/#about-us" className="navLink" onClick={closeMenu}>
            About
          </a>
          <a href="/#faq" className="navLink" onClick={closeMenu}>
            FAQ
          </a>
          <Link className="navLink" to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          {PODCAST_URL && (
            <a
              href={PODCAST_URL}
              className="navLink navLinkPodcast"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              🎧 Listen to RealTalk, our Podcast
            </a>
          )}
          <a
            className="btn btnPrimary"
            href="https://discord.gg/girlsonlystudy"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Join GOSS
          </a>
        </nav>
      </div>
    </header>
  );
}