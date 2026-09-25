"use client";

import { skills } from "@/lib/data";

export default function SkillsMarquee() {
  // Build a single string of all skills for the marquee
  const allSkills = skills.flatMap((cat) =>
    cat.items.map((item) => `${item}`)
  );

  // Duplicate for seamless loop
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <div className="overflow-hidden border-y border-border py-4">
      <div className="animate-marquee flex whitespace-nowrap gap-8">
        {marqueeItems.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-mono text-[11px] tracking-[0.15em] text-text-dim"
          >
            {skill.toUpperCase()}
            <span className="ml-8 text-border">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
