import { useState } from "react";
import { EVENTS } from "../data/events.js";
import "../styles/sections/events.css";

export default function EventsSection() {
  const [index, setIndex] = useState(0);
  const hasMultiple = EVENTS.length > 1;
  const event = EVENTS[index];

  function goPrev() {
    setIndex((i) => (i - 1 + EVENTS.length) % EVENTS.length);
  }

  function goNext() {
    setIndex((i) => (i + 1) % EVENTS.length);
  }

  return (
    <section id="events" className="eventsSection" aria-label="Events">
      <div className="eventsHeaderBox">
        <h2 className="eventsSectionTitle">Events</h2>
        <p className="eventsSectionSubtitle">
          With a minimum of two events per week, your motivation won't be running low anytime soon
        </p>
      </div>

      <div className="eventsCard">
        <div className="eventsCarouselInner">
          {hasMultiple && (
            <button
              type="button"
              className="eventsArrow eventsArrowLeft"
              onClick={goPrev}
              aria-label="Previous event"
            >
              ‹
            </button>
          )}

          <div className="eventsContent">
            {event.banner ? (
              <img
                src={event.banner}
                alt={event.title}
                className="eventsBannerImage"
              />
            ) : (
              <div className="eventsBannerPlaceholder" aria-hidden="true">
                <span>Event banner image coming soon</span>
              </div>
            )}

            <h3 className="eventsTitle">{event.title}</h3>
            <p className="eventsDescription">{event.description}</p>
          </div>

          {hasMultiple && (
            <button
              type="button"
              className="eventsArrow eventsArrowRight"
              onClick={goNext}
              aria-label="Next event"
            >
              ›
            </button>
          )}
        </div>

        {hasMultiple && (
          <div className="eventsDots" role="tablist" aria-label="Select event">
            {EVENTS.map((e, i) => (
              <button
                key={e.id}
                type="button"
                className={`eventsDot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Show ${e.title}`}
                aria-selected={i === index}
                role="tab"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}