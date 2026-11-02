import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectItem from "@/components/ProjectItem";
import Magnetic from "@/components/Magnetic";
import Terminal from "@/components/Terminal";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CopyEmail from "@/components/CopyEmail";
import NowBoard from "@/components/NowBoard";
import { projects, skills, socials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-5xl px-6">
        {/* ── About ─────────────────────────────────────────── */}
        <section id="about" className="mt-24 scroll-mt-24">
          <SectionHeading title="About" />
          <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
            <Reveal>
              <p className="leading-relaxed text-muted">
                Hello! I&apos;m Abin, a full-stack developer who enjoys building
                clean, responsive interfaces and the systems behind them. My
                interest in web development started with small static pages and
                grew into building complete applications with React and Next.js.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Today I&apos;m sharpening my craft at{" "}
                <Link
                  href="https://www.maktalseo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  MakTal Technologies
                </Link>{" "}
                — diving deep into server-side rendering, API routing and
                performance optimization to ship production-ready websites,
                one project at a time.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">location</span>
                  <span>Kerala, India</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">role</span>
                  <span>Full-Stack Developer</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">focus</span>
                  <span>Next.js · TypeScript</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">status</span>
                  <span className="text-accent">open to work</span>
                </li>
                <li className="flex justify-between border-b border-border pb-3">
                  <a
                    href="/Abin_Resume.pdf"
                    download
                    className="text-muted"
                  >
                    Resume PDF
                  </a>
                  <span>Download</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Right now ─────────────────────────────────────── */}
        <section id="now" className="mt-24 scroll-mt-24">
          <SectionHeading title="Right now" />
          <NowBoard />
        </section>

        {/* ── Experience ────────────────────────────────────── */}
        <section id="experience" className="mt-24 scroll-mt-24">
          <SectionHeading title="Experience" />
          <ExperienceTimeline />
        </section>

        {/* ── Projects ──────────────────────────────────────── */}
        <section id="projects" className="mt-24 scroll-mt-24">
          <SectionHeading title="Projects" />
          <Reveal>
            <p className="mb-6 -mt-4 max-w-xl text-sm text-muted">
              A few things I&apos;ve designed and built.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.title} delay={i * 0.08} className="h-full">
                <ProjectItem
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  live={project.live}
                  repo={project.repo}
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center">
              <Link
                href="/Projects"
                className="rounded-full px-6 py-2.5 font-mono text-sm text-accent ring-1 ring-accent/40 transition-colors hover:bg-accent/10"
              >
                View all projects →
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ── Skills ────────────────────────────────────────── */}
        <section id="skills" className="mt-24 scroll-mt-24">
          <SectionHeading title="Skills" />
          <Reveal>
            <ul className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent/60 hover:text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ── Into the terminal ─────────────────────────────── */}
        <section id="terminal" className="mt-24 scroll-mt-24">
          <SectionHeading title="Into the terminal" />
          <div className="grid items-center gap-8 md:grid-cols-[3fr_2fr]">
            <Reveal>
              <Terminal />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-sm text-accent">// my daily workflow</p>
              <p className="mt-4 leading-relaxed text-muted">
                This is roughly how I spend my days — inspecting, typing and
                shipping. The commands above run themselves, but the same way of
                thinking is how I approach every real project: break the problem
                down, prototype fast, then refine until it feels effortless.
              </p>
              <p className="mt-4 font-mono text-xs leading-relaxed text-muted/70">
                ps: hire --check returns available ✓ pass — every single time.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────── */}
        <section id="contact" className="mt-24 scroll-mt-24 pb-4">
          <SectionHeading title="Contact" />
          <Reveal>
            <div className="flex flex-col items-center py-8 text-center">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build something{" "}
                <span className="text-accent">together</span>.
              </h3>
              <p className="mt-4 max-w-md text-muted">
                I&apos;m open to freelance work, full-time roles and interesting
                collaborations. My inbox is always open — drop me a line.
              </p>
              <Magnetic>
                <a
                  href={socials.email}
                  className="inline-block rounded-full border border-accent px-8 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
                >
                  Say hello
                </a>
              </Magnetic>
              <div className="mt-6 flex items-center gap-6 font-mono text-xs text-muted">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
                <CopyEmail />
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
