import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Support() {
  return (
    <div className="appShell">
      <Navbar />

      <main className="supportPage">
        <div className="supportPageInner">
          <header className="supportHeader">
            <h1 className="supportPageTitle">Support GOSS</h1>
            <p className="supportPageSubtitle">
              Help us keep the community free and improving.
            </p>
          </header>

          <div className="supportCards">
            <section
              className="supportCard"
              aria-label="Support on Ko-fi"
            >
              <h2 className="supportCardTitle">Ko-fi</h2>

              <p className="supportCardText">
                Every donation goes directly towards:
              </p>

              <ul className="supportList">
                <li>🎁 Giveaways of educational materials and resources for our members</li>
                <li>⚙️ Maintaining and improving server features and tools</li>
                <li>💡 Supporting new initiatives that make learning more engaging and accessible</li>
              </ul>

              <p className="supportCardText">
                Thank you for helping us continue to build a space where hard work and curiosity thrive.
              </p>

              <a
                className="btn btnPrimary"
                href="https://ko-fi.com/girlsonly"
                target="_blank"
                rel="noreferrer"
              >
                Support us on Ko-fi →
              </a>
            </section>

            {/* Server Boosting */}
<section className="supportCard" aria-label="Boost the Discord server">
  <h2 className="supportCardTitle">Discord Server Boosting</h2>

  <p className="supportCardText">
    Server boosts help unlock better audio quality, streaming features,
    and overall improvements to the Discord experience.
  </p>

  <p className="supportCardText">
    <strong>Booster-exclusive perks include:</strong>
  </p>

  <ul className="supportList">
    <li>✨ Exclusive custom gradient & holographic roles</li>
    <li>🔒 A super secret booster-only chat</li>
    <li>😌 Custom emoji requests</li>
    <li>💖 And more special perks over time</li>
  </ul>

  <p className="supportCardHint">
    Open Discord → Server settings → Boost this server
  </p>
</section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
