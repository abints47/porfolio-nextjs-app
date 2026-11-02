"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/** Trailing cursor ring that expands over interactive elements (desktop only). */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Offsets center the dot (6px) and ring (34px) on the pointer
  const dotX = useTransform(x, (v) => v - 3);
  const dotY = useTransform(y, (v) => v - 3);
  const ringX = useSpring(useTransform(x, (v) => v - 17), {
    stiffness: 250,
    damping: 25,
    mass: 0.6,
  });
  const ringY = useSpring(useTransform(y, (v) => v - 17), {
    stiffness: 250,
    damping: 25,
    mass: 0.6,
  });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest("a, button, [data-cursor-hover]"));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Dot — snaps to the pointer */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x: dotX, y: dotY, opacity: visible ? 1 : 0 }}
      />
      {/* Ring — trails behind with a spring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-[34px] w-[34px] rounded-full border border-accent/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.9 : 1,
          opacity: visible ? (hovering ? 0.9 : 0.55) : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
