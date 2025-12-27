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
            <span className="aboutWord aboutWordCoral">GOSS</span> is a <br />

            <span className="aboutWord aboutWordBlue">free</span> <br />

            <span className="aboutWord aboutWordCoral">non-profit</span> <br />

            <span className="aboutWord aboutWordGold">international</span> <br />

            <span className="aboutWord aboutWordGreen">girls-only</span> <br />

            <span className="aboutWord aboutWordBlue">study community</span>
          </h2>

          <a className="btn btnPrimary" href="#join">
            I want to join <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
