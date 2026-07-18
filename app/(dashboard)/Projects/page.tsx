"use client";

const projects = [
  {
    title: "Project One",
    description: "A short line about what this project does and who it helps.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://your-live-link.com",
    repo: "https://github.com/yourname/project-one",
  },
  {
    title: "Project Two",
    description: "A short line about what this project does and who it helps.",
    tags: ["React", "Node.js"],
    live: "https://your-live-link.com",
    repo: "https://github.com/yourname/project-two",
  },
  {
    title: "Project Three",
    description: "A short line about what this project does and who it helps.",
    tags: ["Python", "FastAPI"],
    live: "https://your-live-link.com",
    repo: "",
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mt-4 p-3">
      <p className="text-success text-uppercase fw-bold mb-1" style={{ letterSpacing: "2px" }}>
        Work
      </p>
      <h2 className="fw-bold display-5">Projects</h2>
      <p className="fs-5 mb-4">A few things I have built.</p>

      <div className="d-flex flex-column gap-3">
        {projects.map((project) => (
          <div key={project.title} className="card p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <h3 className="fw-bold h4 mb-0">{project.title}</h3>
              <div className="d-flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-success fw-semibold text-decoration-none"
                >
                  Live
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-secondary fw-semibold text-decoration-none"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>

            <p className="mt-2 mb-3 fs-6 text-body-secondary">
              {project.description}
            </p>

            <div className="d-flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge rounded-pill border text-body-secondary fw-normal">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}