"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const words = ["interfaces", "experiences", "applications", "websites"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((i) => (i + 1) % words.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="page-dots relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Drifting accent glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="animate-float absolute -top-40 -left-40 h-[440px] w-[440px] rounded-full bg-accent/10 blur-[130px]" />
        <div className="animate-float-slow absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[110px]" />
      </div>

      <motion.div
        variants={reduce ? undefined : container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl px-6"
      >
        {/* Availability chip */}
        <motion.div variants={reduce ? undefined : item} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.p
          variants={reduce ? undefined : item}
          className="mb-3 font-mono text-sm text-accent"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={reduce ? undefined : item}
          className="text-gradient text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Abin T S
        </motion.h1>

        <motion.h2
          variants={reduce ? undefined : item}
          className="mt-4 flex flex-wrap gap-x-3 text-xl text-muted sm:text-3xl"
        >
          <span>
            I build{" "}
            <span className="relative inline-block text-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <span>for the web.</span>
        </motion.h2>

        <motion.p
          variants={reduce ? undefined : item}
          className="mt-6 max-w-xl leading-relaxed text-muted"
        >
          I&apos;m a full-stack developer currently training at{" "}
          <Link
            href="https://www.maktalseo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            MakTal Technologies
          </Link>
          , where I craft complete web applications with Next.js — from
          interactive front-ends to server-side logic, APIs and
          performance-focused details.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={reduce ? undefined : item}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/Projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-mono text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-95"
          >
            View my work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/Contact"
            className="rounded-full border border-border px-6 py-2.5 font-mono text-sm text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={reduce ? undefined : { delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={
            reduce
              ? undefined
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">
            scroll
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
