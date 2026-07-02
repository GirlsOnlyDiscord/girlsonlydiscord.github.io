import { Link } from "react-router-dom";
import { useState } from "react";

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