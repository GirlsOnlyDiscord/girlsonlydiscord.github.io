import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
