import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectItem from "@/components/ProjectItem";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-4">
      <Reveal>
        <p className="font-mono text-sm text-accent">things i&apos;ve built</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-lg text-muted">
          A selection of work I&apos;ve designed and shipped — mostly with
          Next.js, TypeScript and friends.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.06} className="h-full">
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

      <Reveal>
        <p className="mt-10 text-center font-mono text-xs text-muted">
          more experiments live on{" "}
          <a
            href="https://github.com/abints47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
        </p>
      </Reveal>
    </div>
  );
}
