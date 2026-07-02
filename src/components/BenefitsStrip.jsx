import { BENEFITS } from "../data/benefits.js";

export default function BenefitsStrip() {
  return (
    <div className="benefitsBarWrap">
      <div className="benefitsBar" role="region" aria-label="Community highlights">
        {BENEFITS.map((b) => (
          <div key={b.text} className="benefitItem">
            <div className="benefitItemIcon" aria-hidden="true">
              {b.icon}
            </div>
            <div className="benefitItemText">{b.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}