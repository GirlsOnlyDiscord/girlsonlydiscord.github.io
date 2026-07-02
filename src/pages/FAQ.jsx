import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/FAQCards.jsx";

export default function FAQ() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
        <Cards titleTag="h1" />
      </main>
      <Footer />
    </div>
  );
}