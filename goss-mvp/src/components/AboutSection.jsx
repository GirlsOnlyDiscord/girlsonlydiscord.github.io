import ServerBanner from "../assets/ServerBanner.png";

export default function AboutSection() {
  return (
    <section className="about" aria-label="About GOSS" id="about">
      <div className="aboutInner">
        <div className="aboutMedia">
          <img
            src={ServerBanner}
            alt="Girls Only Study Space community collage"
            className="aboutImage"
          />
        </div>

        <div className="aboutCopy">
          <h2 className="aboutTitle">
            <span className="accentWord">GOSS</span> is a <br />
            free <br />
            non-profit <br />
            international <br />
            girls-only <br />
            study community
          </h2>

          <a className="btn btnPrimary" href="#join">
            I want to join <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
