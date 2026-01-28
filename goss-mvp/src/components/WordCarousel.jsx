import { useEffect, useMemo, useState } from "react";

export default function WordCarousel({
  items,
  intervalMs = 1400,
  className = "",
}) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeItems.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [safeItems.length, intervalMs]);

  if (safeItems.length === 0) return null;

  const current = safeItems[index];

  return (
    <span
      className={`wordCarousel ${className}`}
      style={{ color: `var(${current.colorVar})` }}
      aria-label={`Highlighted word: ${current.text}`}
    >
      {current.text}
    </span>
  );
}
