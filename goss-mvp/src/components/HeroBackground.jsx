// src/components/HeroBackground.jsx
import { useEffect, useRef } from "react";

import Bow from "../assets/doodles/bow.png";
import Notes from "../assets/doodles/notes.png";
import Book from "../assets/doodles/book.png";
import Pencil from "../assets/doodles/pencil.png";
import APlus from "../assets/doodles/a_plus.png";
import Calculator from "../assets/doodles/calculator.png";
import Apple from "../assets/doodles/apple.png";
import Star from "../assets/doodles/star.png";
import Crown from "../assets/doodles/crown.png";
import Kitty from "../assets/doodles/kitty.png";

const DOODLES = [
  { src: Bow, alt: "", className: "doodle doodleBow" },
  { src: Notes, alt: "", className: "doodle doodleNotes" },
  { src: Book, alt: "", className: "doodle doodleBook" },
  { src: Pencil, alt: "", className: "doodle doodlePencil" },
  { src: APlus, alt: "", className: "doodle doodleAPlus" },
  { src: Calculator, alt: "", className: "doodle doodleCalc" },
  { src: Apple, alt: "", className: "doodle doodleApple" },
  { src: Star, alt: "", className: "doodle doodleStar" },
  { src: Crown, alt: "", className: "doodle doodleCrown" },
  { src: Kitty, alt: "", className: "doodle doodleKitty" },
];

export default function HeroBackground() {
  const hostRef = useRef(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1

      // optional tiny parallax (not animation)
      el.style.setProperty("--mx", String((x - 0.5) * 2)); // -1..1
      el.style.setProperty("--my", String((y - 0.5) * 2)); // -1..1
    };

    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="heroBg" ref={hostRef} aria-hidden="true">
      <div className="heroGradient" />
      <div className="heroDoodles">
        {DOODLES.map((d) => (
          <img key={d.className} src={d.src} alt={d.alt} className={d.className} />
        ))}
      </div>
    </div>
  );
}
