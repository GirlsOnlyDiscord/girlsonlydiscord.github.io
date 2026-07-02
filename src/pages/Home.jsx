import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import IntroSection from "../components/IntroSection.jsx";
import BenefitsStrip from "../components/BenefitsStrip.jsx";
import TestimonialsSection from "../components/Testimonialssection.jsx";
import EventsSection from "../components/EventsSection.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Footer from "../components/Footer.jsx";
import FAQQuestions from "../components/FAQCards.jsx";

export default function Home() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />
        {/* Social pill row */}
        <SocialLinks />
        {/* Short Intro card */}
        <IntroSection />
        {/* Green benefits bar */}
        <BenefitsStrip />
        {/* Testimonials */}
        <TestimonialsSection />
        {/* Events */}
        <EventsSection />
        {/* FAQ */}
        <section id="faq" className="faqSection">
          <FAQQuestions />
        </section>
        {/* Full About */}
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}