import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="navInner">
        {/* Brand → Home */}
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brandText">Girls Only Study Space</span>
        </Link>

        {/* Navigation */}
        <nav className="navLinks" aria-label="Primary">
          <a href="#faq" className="navLink">
            FAQ
          </a>
          <Link className="navLink" to="/support">
            Support Us
          </Link>

          <Link className="navLink" to="/contact">
            Contact Us
          </Link>

          <a
            className="btn btnPrimary"
            href="https://discord.gg/girlsonlystudy"
            target="_blank"
            rel="noreferrer"
          >
            Join GOSS
          </a>
        </nav>
      </div>
    </header>
  );
}
