"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Magnetic from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";

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
  // Detected after mount to keep SSR markup stable; used only to
  // disable infinite loops (bouncing cue, word flip) under reduced motion.
  const [reduce, setReduce] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 380], [1, 0.25]);
  const heroY = useTransform(scrollY, [0, 380], [0, 60]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((i) => (i + 1) % words.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={reduce ? undefined : { opacity: heroOpacity, y: heroY }}
        className="relative mx-auto w-full max-w-5xl px-6"
      >
        <motion.p variants={item} className="mb-3">
          <ScrambleText
            text="Hi, my name is"
            className="font-mono text-sm text-accent"
          />
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Abin T S
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 flex flex-wrap gap-x-3 text-xl text-muted sm:text-3xl"
        >
          <span>
            I build{" "}
            <span className="relative inline-block text-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
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

        <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-muted">
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
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
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
          </Magnetic>
          <Magnetic>
            <Link
              href="/Contact"
              className="rounded-full border border-border px-6 py-2.5 font-mono text-sm text-muted transition-colors hover:border-muted hover:text-foreground"
            >
              Get in touch
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
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
