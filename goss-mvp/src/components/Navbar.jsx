import { Link } from "react-router-dom";
import GOSSTag from "../assets/GOSStag.png";

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="navInner">
        {/* Brand → Home */}
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brandText">Girls Only Study Space</span>

          <img
            src={GOSSTag}
            alt="GOSS tag"
            className="brandTag"
          />
        </Link>

        {/* Navigation */}
        <nav className="navLinks" aria-label="Primary">
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
            Join
          </a>
        </nav>
      </div>
    </header>
  );
}
