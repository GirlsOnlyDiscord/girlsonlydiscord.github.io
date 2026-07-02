import "../styles/sections/aboutus.css";
const STATS = [
  { value: "2,500+", label: "Members Worldwide",       color: "var(--brand-light-blue)" },
  { value: "70+",    label: "Countries Represented",   color: "var(--brand-light-gold)" },
  { value: "24/7",   label: "Study Channels Active",   color: "var(--brand-light-green)" },
  { value: "Apr '24", label: "Founded",                color: "var(--brand-light-red)" },
];
const FEATURES = [
  { title: "Structured Sessions", color: "var(--brand-light-red)",  text: "Pomodoro-based voice channels, study tournaments, and themed events." },
  { title: "Real Accountability", color: "var(--brand-light-blue)", text: "Camera and screenshare rooms, study bots, and a community that shows up." },
  { title: "Truly International", color: "var(--brand-light-gold)", text: "Members active across every time zone — there's always someone to study with." },
  { title: "Girls Only, Always",  color: "var(--brand-light-green)", text: "Every member is verified. A safe, focused, girls-only environment." },
];
export default function AboutUs() {
return (
      <section id="about-us" className="aboutSection">
{/* Header */}
      <div className="aboutHeaderBox">
        <h2 className="aboutSectionTitle">About Us</h2>
      </div>
{/* Stats row */}
      <div className="aboutStats">
{STATS.map((s) => (
<div className="aboutStat" key={s.label} style={{ background: s.color }}>
            <span className="aboutStatValue">{s.value}</span>
            <span className="aboutStatLabel">{s.label}</span>
          </div>
        ))}
      </div>
{/* Body copy — two columns, in a bordered card */}
      <div className="aboutBodyCard">
        <div className="aboutBody">
          <p className="aboutPara">
            We created GOSS because studying alone can feel isolating, and many online
            spaces are distracting or unstructured. GOSS offers a dedicated, moderated
            environment where members can study together in real time, stay accountable,
            and build consistent study habits.
          </p>
          <p className="aboutPara">
            Founded in April 2024, we've grown into a global community of over 2,500
            members across more than 70 countries. Run entirely by a volunteer staff
            team, GOSS is free to join. Our mission is clear: to provide a disciplined,
            focused environment where girls can perform at their highest level.
          </p>
        </div>
      </div>
{/* Feature cards */}
      <div className="aboutFeatures">
{FEATURES.map((f) => (
<div className="aboutFeatureCard" key={f.title} style={{ background: f.color }}>
            <h3 className="aboutFeatureTitle">{f.title}</h3>
            <p className="aboutFeatureText">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}