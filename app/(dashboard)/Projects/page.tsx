"use client";

const projects = [
  {
    title: "Blue Tide",
    description: `Bluetide is a travel and lifestyle blog centered on the ocean and coastal living. It features articles and  stories about beautiful beaches, island culture,
       and marine-related topics, all designed to inspire a sense of relaxation and connection with the sea.`,
    tags: ["Next.js", "TypeScript", "Tailwind","Prisma ORM"],
    live: "https://beach-bluetide.vercel.app",
    repo: "https://github.com/abints47/BlueTide-nextjs-app",
  },
  {
    title: "ACME Financial Dashboard",
    description: "A financial dashboard built with Next.js, React, and Tailwind CSS. It provides users with a comprehensive overview of their financial data, including income, expenses, and investment performance.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL","NextAuth.js"],
    live: "https://nextjs-dashboard-nu-eosin-n8gcrp27og.vercel.app",
    repo: "https://github.com/abints47/nextjs-dashboard",
  },
  {
    title: "Next.js Markdown Blog Starter",
    description: "The Next.js Markdown Blog Starter is a lightweight, high-performance web application template designed to showcase fast static site generation (SSG) using local Markdown/MDX files for content management.",
    tags: ["Next.js", "Markdown", "FastAPI"],
    live: "https://nextjs-blog-eight-ochre-44.vercel.app",
    repo: "",
  },
  {
    title: "Todo App",
    description: "A fast and responsive task management web application built with Next.js and powered by Supabase for real-time PostgreSQL database synchronization and data persistence.",
    tags: ["Next.js", "TypeScript", "Shadcn ui", "Supabase", "Netlify"],
    live: "https://todo-do-nextjs.netlify.app",
    repo: "https://github.com/abints47/Todo--app",
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mt-4 p-3">
      <p
        className="text-success text-uppercase fw-bold mb-1"
        style={{ letterSpacing: "2px" }}
      >
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
                <span
                  key={tag}
                  className="badge rounded-pill border text-body-secondary fw-normal"
                >
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
