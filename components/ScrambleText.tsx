"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "!<>-_\\/[]{}=+*^?#";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

/** Decodes text with random characters, then settles — fires when scrolled into view. */
export default function ScrambleText({ text, className }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 22;
    const timer = setInterval(() => {
      frame++;
      const settledCount = Math.floor((frame / total) * text.length);
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < settledCount) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (frame >= total) {
        setDisplay(text);
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
