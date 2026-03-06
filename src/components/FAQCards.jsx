import { useState } from "react";
import { FAQ } from "../data/FAQ.js";

// Renders a text array — plain strings or { t, c } colour objects.
// Newlines become <br /> tags.
function RichText({ parts }) {
  return (
    <p>
      {parts.map((part, i) => {
        if (typeof part === "string") {
          return part.split("\n").map((line, j, arr) => (
            <span key={`${i}-${j}`}>
              {line}
              {j < arr.length - 1 && <br />}
            </span>
          ));
        }
        return (
          <span key={i} style={{ color: `var(--${part.c})` }}>
            {part.t}
          </span>
        );
      })}
    </p>
  );
}

export default function FAQCards() {
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
                  <h3 className="cardTitle">{q.title}</h3>
                </div>
                <div className="card-content">
                  <RichText parts={q.text} />
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}