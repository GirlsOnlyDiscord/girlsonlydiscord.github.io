import "../styles/sections/aboutus.css";

const STATS = [
  { value: "2,500+", label: "Members Worldwide",       color: "var(--brand-coral)" },
  { value: "70+",    label: "Countries Represented",   color: "var(--brand-blue)" },
  { value: "24/7",   label: "Study Channels Active",   color: "var(--brand-green)" },
  { value: "Apr '24", label: "Founded",                color: "var(--brand-gold)" },
];

const FEATURES = [
  { emoji: "📚", title: "Structured Sessions", titleColor: "var(--brand-blue)",  text: "Pomodoro-based voice channels, study tournaments, and themed events." },
  { emoji: "🤝", title: "Real Accountability", titleColor: "var(--brand-coral)", text: "Camera and screenshare rooms, study bots, and a community that shows up." },
  { emoji: "🌍", title: "Truly International", titleColor: "var(--brand-green)", text: "Members active across every time zone — there's always someone to study with." },
  { emoji: "💛", title: "Girls Only, Always",  titleColor: "var(--brand-gold)",  text: "Every member is verified. A safe, focused, girls-only environment." },
];

export default function AboutUs() {
  return (
    <>
      <section id="about-us" className="aboutSection">

      {/* Header */}
      <div className="aboutHeader">
        <h2 className="aboutSectionTitle">About <span className="aboutAccent">GOSS</span></h2>
        <p className="aboutLead">
          Girls Only Study Space is a <strong>free, international, non-profit</strong> study
          community built by girls, for girls — where real work gets done.
        </p>
      </div>

      {/* Stats row */}
      <div className="aboutStats">
        {STATS.map((s) => (
          <div className="aboutStat" key={s.label}>
            <span className="aboutStatValue" style={{ color: s.color }}>{s.value}</span>
            <span className="aboutStatLabel">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Body copy — two columns */}
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

      {/* Feature cards */}
      <div className="aboutFeatures">
        {FEATURES.map((f) => (
          <div className="aboutFeatureCard" key={f.title}>
            <span className="aboutFeatureEmoji">{f.emoji}</span>
            <h3 className="aboutFeatureTitle" style={{ color: f.titleColor }}>{f.title}</h3>
            <p className="aboutFeatureText">{f.text}</p>
          </div>
        ))}
      </div>

    </section>
    <div className="aboutBlueBar" />
    </>
  );
}