import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";



export default function FAQ() {
  return (
    <div className="appShell">
      <Navbar />
      <main>
          <div className="titleCont">
            <h1 className="titleCards">Frequently asked Questions</h1>
            <p>Here are all Questions we get idk add description here ig</p>
          </div>
          <Cards />
      </main>
      <Footer />
    </div>
  );
}
