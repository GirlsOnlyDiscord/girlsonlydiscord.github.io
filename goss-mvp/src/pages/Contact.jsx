import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import OpenATicket from "../assets/OpenATicket.png";

export default function Contact() {
  return (
    <div className="appShell">
      <Navbar />

      <main className="contactPage">
        <div className="contactPageInner">
          <header className="contactHeader">
            <h1 className="contactPageTitle">Contact Us</h1>
            <p className="contactPageSubtitle">
              Need help or want to get in touch? Here’s the best way to reach us.
            </p>
          </header>

          <div className="contactCards">
            {/* Preferred: Tickets */}
            <section
              className="contactCard contactCardPrimary"
              aria-label="Open a support ticket"
            >
              <h2 className="contactCardTitle">Support & Moderation</h2>

              <p className="contactCardText">
                <strong>The preferred way to contact us</strong> for help,
                moderation concerns, or member support is by opening a ticket
                inside our Discord server.
              </p>

              <img
                src={OpenATicket}
                alt="Open a ticket channel in the GOSS Discord server"
                className="contactImage"
              />

              <p className="contactCardHint">
                Open Discord → <strong>#open-a-ticket</strong> → Create a support ticket
              </p>

              <p className="contactCardText">
                This helps us respond faster and keeps everything organised.
              </p>
            </section>

            {/* Email */}
            <section className="contactCard" aria-label="Contact by email">
              <h2 className="contactCardTitle">Email</h2>

              <p className="contactCardText">
                For formal enquiries, partnerships, or anything that isn’t
                time-sensitive:
              </p>

              <a
                className="contactLink"
                href="mailto:discordgirlsonly@gmail.com"
              >
                discordgirlsonly@gmail.com
              </a>
            </section>

            {/* Discord Owners */}
            <section className="contactCard" aria-label="Contact server owners">
              <h2 className="contactCardTitle">Server Owners</h2>

              <p className="contactCardText">
                For exceptional cases, you may contact the server owners directly
                on Discord:
              </p>

              <ul className="contactList">
                <li>
                  <strong>Nil</strong> (Co-owner) — <span>@niltheoverkill</span>
                </li>
                <li>
                  <strong>Ruthie</strong> (Co-owner) — <span>@peachyqiss</span>
                </li>
              </ul>

              <p className="contactCardText">
                Please note that direct messages may receive a slower response
                than tickets.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
