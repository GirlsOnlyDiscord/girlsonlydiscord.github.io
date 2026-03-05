import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx"; // short intro section
import AboutUs from "../components/AboutUs.jsx";           // full detailed section
import Footer from "../components/Footer.jsx";
import FAQ from "../pages/FAQ.jsx";

export default function Home() {
  return (
    <div className="appShell">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Short About Section */}
        <AboutSection />

        {/* FAQ Section */}
        <FAQ />

        {/* Full About Us Section */}
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}