import { useState } from "react";
import { FAQ } from "../data/FAQ.js";

export default function Cards() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCard = (index) =>
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );

  return (
    <div className="cards-wrapper">
      {[0, 1].map((column) => (
        <div className="cards-column" key={column}>
          {FAQ.filter((_, i) => i % 2 === column).map((q, i) => {
            const realIndex = i * 2 + column;
            const isOpen = openIndexes.includes(realIndex);

            return (
              <div key={realIndex} className={`card ${isOpen ? "open" : ""}`}>
                <div
                  className="card-header"
                  onClick={() => toggleCard(realIndex)}
                >
                 <span className={`plus ${isOpen ? "open" : ""}`}>+</span>
                  <h3 className="cardTitle">
                    {q.title}
                  </h3>
                </div>
                <div className="card-content">
                  <p>{q.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}