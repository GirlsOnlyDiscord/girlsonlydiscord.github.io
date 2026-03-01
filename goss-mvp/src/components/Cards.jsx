import { useState } from "react";
import { FAQ } from "../data/FAQ.js";

export default function Cards() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCard = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const handleExpandAll = () => {
    if (openIndexes.length === FAQ.length) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes(FAQ.map((_, i) => i));
    }
  };

  // Split into two columns
  const leftColumn = FAQ.filter((_, i) => i % 2 === 0);
  const rightColumn = FAQ.filter((_, i) => i % 2 !== 0);

  return (
    <div>
      <div className="titleCont">
        <h1 className="titleCards">Frequently asked Questions</h1>
        <p>Here are all Questions we get idk add description here ig</p>
      </div>

      <button className="btn" onClick={handleExpandAll}>
        {openIndexes.length === FAQ.length ? "Collapse All" : "Expand All"}
      </button>

      <div className="cards-wrapper">

        <div className="cards-column">
          {leftColumn.map((q, colIndex) => {
            const realIndex = colIndex * 2;
            return (
              <div
                key={realIndex}
                className={`card ${openIndexes.includes(realIndex) ? "open" : ""}`}
              >
                <div
                  className="card-header"
                  onClick={() => toggleCard(realIndex)}
                >
                  <span className="plus">
                    {openIndexes.includes(realIndex) ? "−" : "+"}
                  </span>
                  <h3>{q.title}</h3>
                </div>
                <div className="card-content">
                  <p>{q.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cards-column">
          {rightColumn.map((q, colIndex) => {
            const realIndex = colIndex * 2 + 1;
            return (
              <div
                key={realIndex}
                className={`card ${openIndexes.includes(realIndex) ? "open" : ""}`}
              >
                <div
                  className="card-header"
                  onClick={() => toggleCard(realIndex)}
                >
                  <span className="plus">
                    {openIndexes.includes(realIndex) ? "−" : "+"}
                  </span>
                  <h3 className="cardTitle">{q.title}</h3>
                </div>
                <div className="card-content">
                  <p>{q.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
