import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Footer from "../components/Footer.jsx";
import FAQQuestions from "../components/Cards.jsx";

export default function Home() {
  return (
    <div className="appShell">
      <Navbar />

      <main>

        {/* Hero */}
        <Hero />

        {/* Short About */}
        <AboutSection />

        {/* FAQ */}
        <section id="faq" className="faqSection">

          <div className="faqHeader">
            <h2 className="faqTitle">
              Frequently Asked Questions
            </h2>

            <button className="btn btnPrimary">
              Expand All Questions
            </button>
          </div>

          <FAQQuestions />

        </section>

        {/* Full About */}
        <AboutUs />

      </main>

      <Footer />
    </div>
  );
}