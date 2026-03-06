import { useEffect, useState } from "react";

export default function WordCarousel({ items = [], className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isIdle, setIsIdle] = useState(false); // cursor should blink when idle

  useEffect(() => {
    if (!items.length) return;

    const currentWord = items[currentIndex].text;

    // Typing speed is random for organic effect
    const minTypingSpeed = 50;
    const maxTypingSpeed = 200;
    const typingSpeed = isDeleting
      ? 80 // fixed speed while deleting
      : Math.floor(Math.random() * (maxTypingSpeed - minTypingSpeed + 1)) + minTypingSpeed;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setIsIdle(false); // solid cursor while deleting
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        setIsIdle(false); 
      }

      if (!isDeleting && displayedText.length + 1 === currentWord.length) {
        setTimeout(() => {
          setIsDeleting(true);
          setIsIdle(true);
        }, 800);
      }

      else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsIdle(true); // blinking at empty
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, items]);

  if (!items.length) return null;

  const current = items[currentIndex];

  return (
    <span className={`wordCarousel ${className}`}>

      <span style={{ color: `var(${current.colorVar})` }}>{displayedText}</span>
      <span className={`cursor ${isIdle ? "animate-blink" : ""}`}>|</span>
    </span>
  );
}
