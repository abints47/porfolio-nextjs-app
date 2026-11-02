import { FiArrowUpRight, FiGithub } from "react-icons/fi";

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
}

/** Minimal list-style project row that lights up on hover. */
export default function ProjectItem({
  title,
  description,
  tags,
  live,
  repo,
}: ProjectItemProps) {
  return (
    <div className="group relative border-t border-border py-7 transition-colors last:border-b hover:bg-surface/60">
      <div className="px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground transition-colors group-hover:text-accent"
              >
                {title}
              </a>
            ) : (
              <span className="font-semibold text-foreground transition-colors group-hover:text-accent">
                {title}
              </span>
            )}
          </div>

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
                className="inline-block p-1.5 transition-all hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <FiArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] tracking-wide text-muted/70">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
