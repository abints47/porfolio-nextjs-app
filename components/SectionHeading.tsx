import Reveal from "@/components/Reveal";
import ScrambleText from "@/components/ScrambleText";

interface SectionHeadingProps {
  title: string;
}

/** Minimal section header: "About. ———" with a decode-in title. */
export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-8 flex items-center gap-5">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <ScrambleText text={title} />
          <span className="text-accent">.</span>
        </h2>
        <div className="h-px flex-1 bg-border" aria-hidden />
      </div>
    </Reveal>
  );
}
