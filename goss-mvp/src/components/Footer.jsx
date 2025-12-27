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
          <a href="#about">About</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
          <a href="#join">Join</a>
        </nav>
      </div>

      <div className="footerMeta">
        <span>© {new Date().getFullYear()} GOSS</span>
        <span>Built by the community</span>
      </div>
    </footer>
  );
}
