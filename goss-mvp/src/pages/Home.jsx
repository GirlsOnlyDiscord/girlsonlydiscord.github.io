import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";

export default function Home() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />

        {/* FAQ SECTION */}
        <section id="faq" className="faqSection">
          <div className="faqTitleContainer">
            <h1 className="faqTitle">Frequently Asked Questions</h1>
            <button className="btn btnPrimary">
              Expand all Questions
            </button>
          </div>
          <Cards />
        </section>
      </main>
      <Footer />
    </div>
  );
}