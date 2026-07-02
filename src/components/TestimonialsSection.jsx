import { useState } from "react";
import { TESTIMONIALS } from "../data/Testimonials.js";
import "../styles/sections/testimonials.css";

// Splits on **bold** markers and renders those segments as accented
// strong text. Plain text segments pass through untouched.
function renderQuote(quote) {
  const segments = quote.split(/(\*\*.+?\*\*)/gs);
  return segments.map((segment, i) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return (
        <strong key={i} className="testimonialsHighlight">
          {segment.slice(2, -2)}
        </strong>
      );
    }
    return segment;
  });
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const hasMultiple = TESTIMONIALS.length > 1;
  const current = TESTIMONIALS[index];

  function goPrev() {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function goNext() {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }

  return (
    <section
      id="testimonials"
      className="testimonialsSection"
      aria-label="Testimonials"
    >
      <div className="testimonialsCard">
        <div className="testimonialsCopy">
          <h2 className="testimonialsTitle">
            Here's what our members think…
          </h2>
          <p className="testimonialsLead">
            Our members shared their experiences here so you can get a feel
            for the community. Want the full picture? Join GOSS today and
            check it out firsthand.
          </p>
        </div>

        <div className="testimonialsCarouselCol">
          <div className="testimonialsCarouselInner">
            {hasMultiple && (
              <button
                type="button"
                className="testimonialsArrow testimonialsArrowLeft"
                onClick={goPrev}
                aria-label="Previous testimonial"
              >
                ‹
              </button>
            )}

            <div className="testimonialsBox">
              <p className="testimonialsQuoteText">
                {renderQuote(current.quote)}
              </p>
              <p className="testimonialsAttribution">-{current.name}</p>
            </div>

            {hasMultiple && (
              <button
                type="button"
                className="testimonialsArrow testimonialsArrowRight"
                onClick={goNext}
                aria-label="Next testimonial"
              >
                ›
              </button>
            )}
          </div>

          {hasMultiple && (
            <div
              className="testimonialsDots"
              role="tablist"
              aria-label="Select testimonial"
            >
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  className={`testimonialsDot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-selected={i === index}
                  role="tab"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}