import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Tilt from "@/components/Tilt";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
}

/** Minimal project card that tilts in 3D towards the cursor. */
export default function ProjectItem({
  title,
  description,
  tags,
  live,
  repo,
}: ProjectCardProps) {
  return (
    <Tilt className="h-full">
      <div className="group relative flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/60">
      {/* Top: title + links */}
      <div className="flex items-start justify-between gap-3">
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold leading-snug transition-colors group-hover:text-accent"
          >
            {title}
          </a>
        ) : (
          <span className="font-semibold leading-snug transition-colors group-hover:text-accent">
            {title}
          </span>
        )}

        <div className="flex items-center gap-1 text-muted">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code`}
              className="p-1.5 transition-colors hover:text-foreground"
            >
              <FiGithub size={15} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live site`}
              className="p-1.5 transition-all hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <FiArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>

      {/* Tags pinned to the bottom */}
      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-muted/70">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
        </ul>
        </div>
      </Tilt>
  );
}
