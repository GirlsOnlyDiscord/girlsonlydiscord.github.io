import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <span className="footerLogo">GOSS</span>
          <p className="footerTagline">
            Girls Only Study Space — a free, non-profit, international study community.
          </p>
        </div>

        <nav className="footerNav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/support">Support</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://discord.gg/girlsonlystudy"
            target="_blank"
            rel="noreferrer"
          >
            Join
          </a>
        </nav>
      </div>

      <div className="footerMeta">
        <span>© {new Date().getFullYear()} GOSS</span>
        <span>Built by the community</span>
      </div>
    </footer>
  );
}
