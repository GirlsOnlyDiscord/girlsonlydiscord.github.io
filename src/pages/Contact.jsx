import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TicketToolPreview from "../assets/TicketTool.png";

export default function Contact() {
  return (
    <div className="appShell">
      <Navbar />

      <main className="contactPage">
        <div className="contactPageInner">
          <header className="contactHeader">
            <h1 className="contactPageTitle">Contact GOSS</h1>
            <p className="contactPageSubtitle">
              The preferred way to contact us for help, moderation concerns,
              or member support is by opening a ticket inside our Discord
              server.
            </p>
          </header>

          <div className="contactCards">
            {/* Support & Moderation */}
            <section
              className="contactCard fullWidth"
              aria-label="Support and moderation"
            >
              <h2 className="contactCardTitle">Support & Moderation</h2>

              <p className="contactCardText">
                The preferred way to contact us for help, moderation
                concerns, or member support is by opening a ticket inside
                our Discord server.
              </p>

              <div className="ticketRow">
                <div className="ticketSteps">
                  <ol className="stepsList">
                    <li>Find the open-a-ticket channel</li>
                    <li>Click/tap on 'Create A Ticket'</li>
                    <li>Share your issue, staff will be with you shortly</li>
                  </ol>

                  <div className="ticketInfoBox">
                    <div className="ticketInfoHeader">
                      <span className="ticketInfoIcon">i</span>
                      <span>INFORMATION ⌄</span>
                    </div>
                    <div className="ticketInfoChannel">
                      <span className="ticketHash">#</span> open-a-ticket
                    </div>
                  </div>
                </div>

                <img
                  src={TicketToolPreview}
                  alt="Ticket Tool app preview showing the Create A Ticket button"
                  className="ticketToolImage"
                />
              </div>
            </section>

            {/* Contact Information */}
            <section
              className="contactCard"
              aria-label="Contact information"
            >
              <h2 className="contactCardTitle">Contact Information</h2>

              <p className="contactCardText">
                For formal enquiries, partnerships, or anything that isn't
                time sensitive:{" "}
                <a
                  className="contactLink"
                  href="mailto:discordgirlsonly@gmail.com"
                >
                  discordgirlsonly@gmail.com
                </a>
              </p>

              <p className="contactCardText">
                For exceptional cases, you may contact the server owner
                directly on Discord:
              </p>

              <ul className="contactList">
                <li>
                  <strong>Nil</strong> (Co-owner) —{" "}
                  <span className="contactMention">@niltheoverkill</span>
                </li>
              </ul>

              <p className="contactCardText">
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