import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";



export default function FAQ() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
          <div className="faqTitleContainer">
            <h1 className="faqTitle">Frequently asked Questions</h1>
            {/* <button className="btn btnPrimary">Expand all Questions</button> */}
          </div>
          <Cards />
      </main>
      <Footer />
    </div>
  );
}
