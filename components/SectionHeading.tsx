import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  title: string;
}

/** Minimal section header: "About. ———" */
export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-5">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
          <span className="text-accent">.</span>
        </h2>
        <div className="h-px flex-1 bg-border" aria-hidden />
      </div>
    </Reveal>
  );
}
