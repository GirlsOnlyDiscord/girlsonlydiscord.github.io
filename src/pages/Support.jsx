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
              aria-label="Support on Kofi"
            >
              <h2 className="supportCardTitle">Kofi</h2>

              <p className="supportCardText">
                Every donation goes directly towards:
              </p>

              <ul className="supportList">
                <li>
                  Giveaways of educational materials and resources for our
                  members
                </li>
                <li>Maintaining and improving server features and tools</li>
                <li>
                  Supporting new initiatives that make learning more
                  engaging and accessible
                </li>
              </ul>

              <p className="supportCardText">
                Thank you for helping us continue to build a space where
                hard work and curiosity thrive.
              </p>

              <a
                className="btn supportKofiBtn"
                href="https://ko-fi.com/girlsonly"
                target="_blank"
                rel="noreferrer"
              >
                Support us on Kofi →
              </a>
            </section>

            {/* Server Boosting */}
            <section
              className="supportCard"
              aria-label="Boost the Discord server"
            >
              <h2 className="supportCardTitle">Discord Server Boosting</h2>

              <p className="supportCardText">
                Server boosts enable GOSS to deliver a better experience to
                you. This includes audio quality & streaming abilities,
                more custom emojis, large file uploads and custom role
                icons.
              </p>

              <p className="supportCardText">
                In return, becoming a booster of GOSS will also get you:
              </p>

              <ul className="supportList">
                <li>Exclusive custom gradient & holographic roles</li>
                <li>A secret booster-only chat</li>
                <li>Custom emoji Requests</li>
              </ul>

              <p className="supportCardHint">
                Open GOSS → 'Server Boosts' → 'Boost this Server'
              </p>
            </section>

            {/* Have another idea? */}
            <section
              className="supportCard"
              aria-label="Other ways to reach us"
            >
              <h2 className="supportCardTitle">Have another idea?</h2>

              <p className="supportCardText">
                For formal enquiries, partnerships, or anything that isn't
                time sensitive:{" "}
                <a
                  className="contactLink"
                  href="mailto:discordgirlsonly@gmail.com"
                >
                  discordgirlsonly@gmail.com
                </a>
              </p>

              <p className="supportCardText">
                For exceptional cases, you may contact the server owner
                directly on Discord:
              </p>

              <ul className="contactList">
                <li>
                  <strong>Nil</strong> (Co-owner) —{" "}
                  <span className="contactMention">@niltheoverkill</span>
                </li>
              </ul>

              <p className="supportCardText">
                Please note that direct messages may receive a slower
                response than tickets.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}