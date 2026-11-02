import Link from "next/link";
import Reveal from "@/components/Reveal";

const learning = [
  { topic: "Server Components & SSR caching", status: "in progress" },
  { topic: "Authentication flows (NextAuth)", status: "in progress" },
  { topic: "Performance profiling & Lighthouse", status: "up next" },
];

const nextUp = ["Ship a client project end-to-end", "Contribute to open source", "Land a full-time role"];

const row =
  "grid gap-2 border-t border-border py-6 md:grid-cols-[160px_1fr] md:gap-10";

const label = "pt-1 font-mono text-[11px] uppercase tracking-widest text-muted";

export default function NowBoard() {
  return (
    <div>
      {/* Learning */}
      <Reveal>
        <div className={row}>
          <p className={label}>learning</p>
          <ul>
            {learning.map((item) => (
              <li
                key={item.topic}
                className="flex items-center justify-between gap-6 py-1.5"
              >
                <span className="font-mono text-sm">{item.topic}</span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    item.status === "up next" ? "text-muted" : "text-accent"
                  }`}
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Building */}
      <Reveal delay={0.06}>
        <div className={row}>
          <p className={label}>building</p>
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-medium text-foreground">Blue Tide</span> — a
            coastal-living travel blog, my most recent full Next.js build.{" "}
            <Link
              href="/Projects"
              className="font-mono text-xs text-accent underline-offset-4 hover:underline"
            >
              see it in projects →
            </Link>
          </p>
        </div>
      </Reveal>

      {/* Next up */}
      <Reveal delay={0.12}>
        <div className={row}>
          <p className={label}>next up</p>
          <ul className="space-y-1.5 text-sm text-muted">
            {nextUp.map((item) => (
              <li key={item} className="flex items-end gap-3">
                <span className="font-mono text-[10px] text-accent" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Daily drivers */}
      <Reveal delay={0.18}>
        <div className="border-t border-border py-6">
          <p className={label}>daily drivers</p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm">
            {["Next.js", "TypeScript", "React", "Tailwind", "PostgreSQL", "Git"].map(
              (tool, i, arr) => (
                <li key={tool} className="flex items-center gap-3">
                  <span className="transition-colors hover:text-foreground">
                    {tool}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-muted/50" aria-hidden>
                      /
                    </span>
                  )}
                </li>
              ),
            )}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
