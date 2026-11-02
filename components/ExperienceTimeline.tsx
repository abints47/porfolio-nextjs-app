"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

/** Experience entries along a line that draws itself as you scroll. */
export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className="relative pl-8 sm:pl-10">
      {/* Track */}
      <div
        className="absolute left-0 top-0 h-full w-px bg-border"
        aria-hidden
      />
      {/* Line that draws itself */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-0 top-0 h-full w-px origin-top bg-accent"
        aria-hidden
      />

      {experience.map((exp) => (
        <Reveal key={exp.period} className="relative pb-10 last:pb-0">
          {/* Node on the line */}
          <span
            aria-hidden
            className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-accent bg-background sm:-left-10"
          />
          <span className="font-mono text-xs tracking-wide text-muted">
            {exp.period}
          </span>
          <h3 className="mt-1 font-semibold transition-colors hover:text-accent">
            {exp.role} <span className="text-muted">@ {exp.company}</span>
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {exp.summary}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "SSR", "API Routes"].map(
              (tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {tech}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
