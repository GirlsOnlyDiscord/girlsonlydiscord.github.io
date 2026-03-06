import { SOCIALS } from "../data/socials.js";

export default function SocialLinks() {
  return (
    <div className="socialStack">
      {SOCIALS.map((item) => (
        <a
          key={item.label}
          className="pillLink"
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          {item.label}

        </a>
      ))}
    </div>
  );
}
