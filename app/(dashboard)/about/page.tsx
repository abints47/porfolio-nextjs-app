import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32">
      {/* Header */}
      <Reveal>
        <p className="font-mono text-sm text-accent">who am i</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          About me
        </h1>
      </Reveal>

      {/* Intro row */}
      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row">
          <Image
            src="/dp.png"
            alt="Portrait of Abin"
            width={120}
            height={120}
            priority
            className="rounded-full border border-border object-cover"
          />
          <div>
            <p className="max-w-xl leading-relaxed text-muted">
              Hi, I&apos;m Abin — a full-stack developer from Kerala, India. I
              enjoy building clean, responsive interfaces with React and
              Next.js, and I&apos;m constantly learning modern web development,
              one project at a time.
            </p>
            <div className="mt-5 flex flex-wrap gap-6 font-mono text-xs text-muted">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub →
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn →
              </a>
              <a
                href={socials.email}
                className="transition-colors hover:text-accent"
              >
                Email →
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Journey */}
      <section className="mt-24">
        <SectionHeading title="My journey" />
        <Reveal>
          <p className="max-w-2xl leading-relaxed text-muted">
            I started learning web development by building small static pages,
            and gradually moved into React and then Next.js as I wanted more
            structure and better performance out of the box. That curiosity
            turned into routine — learning by building, breaking things and
            rebuilding them better.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Right now I&apos;m a trainee at{" "}
            <a
              href="https://www.maktalseo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              MakTal Technologies
            </a>
            , where I build complete, production-ready web applications and get
            hands-on with real-world requirements every day.
          </p>
        </Reveal>
      </section>

      {/* Learning now */}
      <section className="mt-24 pb-4">
        <SectionHeading title="What I'm learning now" />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-border p-6 transition-colors hover:border-accent/40">
              <h3 className="font-semibold">Metadata &amp; SEO in Next.js</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Mastering the App Router metadata API — global titles, per-page
                overrides and everything that makes a portfolio look
                professional in the browser tab and in search results.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border p-6 transition-colors hover:border-accent/40">
              <h3 className="font-semibold">Full-stack fundamentals</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Server components, API routes, databases and authentication —
                building the full picture of how a modern web app fits together
                end to end.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
