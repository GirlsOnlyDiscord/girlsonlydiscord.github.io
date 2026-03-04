import "../styles/sections/AboutUs.css";
import { ABOUTUSTEXT } from "../data/about.js";

export default function AboutUs() {
  return (
    <div>
      <section id="about" className="aboutSection">
        <div className="aboutInner">
          <h2 className="sectionTitle">About GOSS</h2>
          {ABOUTUSTEXT.map((text, i) => (
            <p key={i} className={`aboutPara para${i + 1}`}>
              {text}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}