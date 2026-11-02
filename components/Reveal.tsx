"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Minimal scroll animation — a quiet opacity fade, nothing moves.
 *  Skipped entirely (content shown statically) under reduced motion. */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
    }
  }, []);

  // Reduced motion → plain static wrapper, content always visible
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
