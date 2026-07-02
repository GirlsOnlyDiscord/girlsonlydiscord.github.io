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
  { src: Bow,        alt: "", className: "doodle doodleBow" },
  { src: Notes,      alt: "", className: "doodle doodleNotes" },
  { src: Book,       alt: "", className: "doodle doodleBook" },
  { src: Pencil,     alt: "", className: "doodle doodlePencil" },
  { src: APlus,      alt: "", className: "doodle doodleAPlus" },
  { src: Calculator, alt: "", className: "doodle doodleCalc" },
  { src: Apple,      alt: "", className: "doodle doodleApple" },
  { src: Star,       alt: "", className: "doodle doodleStar" },
  { src: Crown,      alt: "", className: "doodle doodleCrown" },
  { src: Kitty,      alt: "", className: "doodle doodleKitty" },
];

// Pixels per frame at 60fps — kept modest so it still reads as
// unhurried, just genuinely travelling rather than wobbling in place.
const MIN_SPEED = 0.5;
const MAX_SPEED = 1.1;

export default function HeroBackground() {
  const hostRef = useRef(null);
  const containerRef = useRef(null);
  const doodleRefs = useRef([]);
  const bodiesRef = useRef([]);
  const boundsRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef(null);

  // Existing subtle pointer-parallax on the background glow — unrelated
  // to the bouncing doodles, left as-is.
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      el.style.setProperty("--mx", String((x - 0.5) * 2));
      el.style.setProperty("--my", String((y - 0.5) * 2));
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

  // Screensaver-style bounce physics for the doodles.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function measure() {
      const rect = container.getBoundingClientRect();
      boundsRef.current = { width: rect.width, height: rect.height };
    }
    measure();

    // Give every doodle a random start position + random direction/speed.
    bodiesRef.current = DOODLES.map((_, i) => {
      const node = doodleRefs.current[i];
      const w = node?.offsetWidth || 60;
      const h = node?.offsetHeight || 60;
      const { width: boundW, height: boundH } = boundsRef.current;
      const maxX = Math.max(boundW - w, 0);
      const maxY = Math.max(boundH - h, 0);
      const angle = Math.random() * Math.PI * 2;
      const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
      return {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w,
        h,
        rot: (Math.random() - 0.5) * 24,
        vrot: (Math.random() - 0.5) * 0.12,
      };
    });

    // Place everything at its starting spot immediately, even if the
    // animation loop below is about to be skipped for reduced motion.
    function paint() {
      bodiesRef.current.forEach((b, i) => {
        const node = doodleRefs.current[i];
        if (!node) return;
        node.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.rot}deg)`;
      });
    }
    paint();

    if (prefersReducedMotion) return;

    function tick() {
      const { width: boundW, height: boundH } = boundsRef.current;
      bodiesRef.current.forEach((b, i) => {
        const node = doodleRefs.current[i];
        if (!node) return;

        const maxX = Math.max(boundW - b.w, 0);
        const maxY = Math.max(boundH - b.h, 0);

        b.x += b.vx;
        b.y += b.vy;

        if (b.x <= 0) {
          b.x = 0;
          b.vx = Math.abs(b.vx);
        } else if (b.x >= maxX) {
          b.x = maxX;
          b.vx = -Math.abs(b.vx);
        }

        if (b.y <= 0) {
          b.y = 0;
          b.vy = Math.abs(b.vy);
        } else if (b.y >= maxY) {
          b.y = maxY;
          b.vy = -Math.abs(b.vy);
        }

        b.rot += b.vrot;

        node.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.rot}deg)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="heroBg" ref={hostRef} aria-hidden="true">
      <div className="heroGradient" />
      <div className="heroDoodles" ref={containerRef}>
        {DOODLES.map((d, i) => (
          <img
            key={d.className}
            ref={(node) => (doodleRefs.current[i] = node)}
            src={d.src}
            alt={d.alt}
            className={d.className}
          />
        ))}
      </div>
    </div>
  );
}