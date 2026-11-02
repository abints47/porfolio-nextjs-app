"use client";

import { useState } from "react";

const EMAIL = "abinthazhathupurakkal@gmail.com";

/** One-click "copy email" button with inline feedback. */
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-foreground"
    >
      {copied ? (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className="text-accent">copied!</span>
        </>
      ) : (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          copy email
        </>
      )}
    </button>
  );
}
