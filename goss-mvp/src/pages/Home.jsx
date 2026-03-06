import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import IntroSection from "../components/IntroSection.jsx";
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
        {/* Short Intro */}
        <IntroSection />
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