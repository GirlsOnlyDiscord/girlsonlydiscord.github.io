import { SOCIALS } from "../data/socials.js";

export default function SocialLinks() {
  return (
    <aside className="socialStack" aria-label="Social links">
      {SOCIALS.map((item) => (
        <a
          key={item.label}
          className="pillLink"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          {item.label} <span aria-hidden="true">→</span>
        </a>
      ))}
    </aside>
  );
}
