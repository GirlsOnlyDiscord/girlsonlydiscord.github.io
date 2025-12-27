import GOSSTag from "../assets/GOSSTag.png";

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="navInner">
        <div className="brand">
          <span className="brandText">Girls Only Study Space</span>

          <img
            src={GOSSTag}
            alt="GOSS tag"
            className="brandTag"
          />
        </div>

        <nav className="navLinks" aria-label="Primary">
          <a className="navLink" href="#support">Support Us</a>
          <a className="navLink" href="#contact">Contact Us</a>
          <a className="btn btnPrimary" href="#join">Join</a>
        </nav>
      </div>
    </header>
  );
}
