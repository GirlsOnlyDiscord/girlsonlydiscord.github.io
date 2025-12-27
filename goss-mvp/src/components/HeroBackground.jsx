import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const hostRef = useRef(null);
  const [hearts, setHearts] = useState([]);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    // Disable heart spawning for coarse pointers (touch)
    const isCoarse = window.matchMedia?.("(pointer: coarse)")?.matches;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;  // 0..1
      const y = (e.clientY - rect.top) / rect.height;  // 0..1

      // subtle parallax in the gradient
      el.style.setProperty("--mx", String((x - 0.5) * 2)); // -1..1
      el.style.setProperty("--my", String((y - 0.5) * 2)); // -1..1

      if (isCoarse) return;

      // Rate-limit heart spawns
      const now = performance.now();
      if (now - lastSpawnRef.current < 140) return;
      lastSpawnRef.current = now;

      const id = `${now}-${Math.random().toString(16).slice(2)}`;

      setHearts((prev) => {
        const next = [...prev, { id, left: x * 100, top: y * 100 }];
        return next.slice(-12); // keep DOM light
      });

      window.setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 1200);
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
      <div className="heartLayer">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="floatHeart"
            style={{ left: `${h.left}%`, top: `${h.top}%` }}
          />
        ))}
      </div>
    </div>
  );
}
