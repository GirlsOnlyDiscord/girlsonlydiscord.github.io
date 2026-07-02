import { useState } from "react";
import { FAQ } from "../data/FAQ.js";

// Renders a text array — plain strings or { t, c } colour objects.
// Newlines become <br /> tags. When `isOpen` is true (card expanded
// against a coloured background), highlighted words get a white
// background pill so their brand colour stays legible.
function RichText({ parts, isOpen }) {
  const highlightStyle = isOpen
    ? {
        background: "#fff",
        padding: "1px 6px",
        borderRadius: "6px",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }
    : {};

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
        if (part.href) {
          return (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `var(--${part.c})`, ...highlightStyle }}
            >
              {part.t}
            </a>
          );
        }
        return (
          <span
            key={i}
            style={{ color: `var(--${part.c})`, ...highlightStyle }}
          >
            {part.t}
          </span>
        );
      })}
    </p>
  );
}

// Cycled through in order for expanded cards, so open questions get
// varied colours rather than all turning the same shade.
const OPEN_COLORS = [
  "var(--brand-light-blue)",
  "var(--brand-light-green)",
  "var(--brand-light-red)",
];

export default function FAQCards({ titleTag: TitleTag = "h2" }) {
  const [openIndexes, setOpenIndexes] = useState(() =>
    FAQ.reduce(
      (acc, q, i) => (q.defaultOpen ? [...acc, i] : acc),
      []
    )
  );

  const toggleCard = (index) =>
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );

  const allOpen = openIndexes.length === FAQ.length;

  const toggleAll = () =>
    setOpenIndexes(allOpen ? [] : FAQ.map((_, i) => i));

  return (
    <>
      <div className="faqTitleContainer">
        <TitleTag className="faqTitle">Frequently Asked Questions</TitleTag>
        <button type="button" className="btn btnPrimary" onClick={toggleAll}>
          {allOpen ? "Minimise all Questions" : "Expand all Questions"}
        </button>
      </div>
      <div className="cards-wrapper">
        {[0, 1].map((column) => (
          <div className="cards-column" key={column}>
            {FAQ.filter((_, i) => i % 2 === column).map((q, i) => {
              const realIndex = i * 2 + column;
              const isOpen = openIndexes.includes(realIndex);
              const openColor = OPEN_COLORS[realIndex % OPEN_COLORS.length];
              return (
                <div
                  key={realIndex}
                  className={`card ${isOpen ? "open" : ""}`}
                  style={isOpen ? { background: openColor } : undefined}
                >
                  <div
                    className="card-header"
                    onClick={() => toggleCard(realIndex)}
                  >
                    <span className={`plus ${isOpen ? "open" : ""}`}>+</span>
                    <h3 className="cardTitle">{q.title}</h3>
                  </div>
                  <div className="card-content">
                    <RichText parts={q.text} isOpen={isOpen} />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}