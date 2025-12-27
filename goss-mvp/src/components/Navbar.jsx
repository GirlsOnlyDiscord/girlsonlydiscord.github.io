import { Link } from "react-router-dom";
import GOSSTag from "../assets/GOSSTag.png";

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="navInner">
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brandText">Girls Only Study Space</span>

          <img
            src={GOSSTag}
            alt="GOSS tag"
            className="brandTag"
          />
        </Link>

        <nav className="navLinks" aria-label="Primary">
          <Link className="navLink" to="/support">
            Support Us
          </Link>

          <a className="navLink" href="/contact">
            Contact Us
          </a>

          <a className="btn btnPrimary" href="#join">
            Join
          </a>
        </nav>
      </div>
    </header>
  );
}
