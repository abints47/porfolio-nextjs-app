"use client";

import { useEffect, useState } from "react";

type Line = { kind: "cmd" | "out"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "abin-t-s — full-stack developer" },
  { kind: "cmd", text: "focus --current" },
  { kind: "out", text: "Next.js · App Router · TypeScript" },
  { kind: "cmd", text: "ls ./projects" },
  { kind: "out", text: "blue-tide/  acme-dashboard/  md-blog/  todo-app/" },
  { kind: "cmd", text: "uptime" },
  { kind: "out", text: "2+ years of building things — still curious" },
  { kind: "cmd", text: "hire --check" },
  { kind: "out", text: "available ✓" },
];

const MAX_LINES = 8;

/** Fake terminal that types out its own script, forever. */
export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let step = 0;
    let char = 0;
    let cancelled = false;
    let timer: number;

    const run = () => {
      if (cancelled) return;
      const item = SCRIPT[step % SCRIPT.length];

      if (item.kind === "cmd") {
        char++;
        setTyping(item.text.slice(0, char));
        if (char < item.text.length) {
          timer = window.setTimeout(run, 60);
          return;
        }
        setLines((prev) => [...prev, item].slice(-MAX_LINES));
        setTyping("");
        step++;
        char = 0;
        timer = window.setTimeout(run, 550);
      } else {
        setLines((prev) => [...prev, item].slice(-MAX_LINES));
        step++;
        char = 0;
        timer = window.setTimeout(run, 950);
      }
    };

    timer = window.setTimeout(run, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
        <span className="ml-3 font-mono text-[11px] text-muted">
          abin@portfolio: ~
        </span>
      </div>

      {/* Body */}
      <div className="min-h-[280px] space-y-1.5 p-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <p key={i} className={line.kind === "out" ? "text-muted" : ""}>
            {line.kind === "cmd" && <span className="mr-2 text-accent">$</span>}
            {line.text}
          </p>
        ))}
        <p>
          <span className="mr-2 text-accent">$</span>
          <span className="text-muted">{typing}</span>
          <span className="animate-pulse text-accent">▍</span>
        </p>
      </div>
    </div>
  );
}
