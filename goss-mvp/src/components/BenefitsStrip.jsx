import { BENEFITS } from "../data/benefits.js";

export default function BenefitsStrip() {
  return (
    <div className="benefitsCard" role="region" aria-label="Community highlights">
      <div className="benefitsGrid">
        {BENEFITS.map((b) => (
          <div key={b.text} className="benefit">
            <div className="benefitIcon" aria-hidden="true">
              {b.icon}
            </div>
            <div className="benefitText">{b.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
