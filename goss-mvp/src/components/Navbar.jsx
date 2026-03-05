import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [brandText, setBrandText] = useState("Girls Only Study Space");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const updateText = (e) => {
      if (e.matches) {
        setBrandText("GOSS");
      } else {
        setBrandText("Girls Only Study Space");
      }
    };

    updateText(media);
    media.addEventListener("change", updateText);

    return () => media.removeEventListener("change", updateText);
  }, []);

  return (
    <header className="navWrap">
      <div className="navInner">
        {/* Brand → Home */}
        <Link to="/" className="brand" aria-label="Go to homepage">
          <span className="brandText">{brandText}</span>
        </Link>

        {/* Navigation */}
        <nav className="navLinks" aria-label="Primary">
          <a href="/#faq" className="navLink">
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