import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/FAQCards.jsx";

export default function FAQ() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
        <div className="faqTitleContainer">
          <h1 className="faqTitle">Frequently Asked Questions</h1>
        </div>
        <Cards />
      </main>
      <Footer />
    </div>
  );
}