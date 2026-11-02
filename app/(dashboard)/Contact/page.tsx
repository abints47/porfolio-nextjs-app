import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-4">
      <Reveal>
        <p className="font-mono text-sm text-accent">get in touch</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Say hello<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-lg text-muted">
          Whether you have a project in mind, a role to fill, or just want to
          talk shop — my inbox is always open.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr]">
        {/* Direct channels */}
        <Reveal>
          <ul className="space-y-px">
            {[
              { label: "Email", value: "abinthazhathupurakkal@gmail.com", href: socials.email },
              { label: "GitHub", value: "@abints47", href: socials.github },
              { label: "LinkedIn", value: "Abin T S", href: socials.linkedin },
            ].map((item) => (
              <li
                key={item.label}
                className="group border-b border-border py-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {item.label}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium transition-colors group-hover:text-accent"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-xs leading-relaxed text-muted">
            Based in Kerala, India (UTC+5:30).
            <br />
            Usually replies within a day.
          </p>
          <div className="mt-5">
            <CopyEmail />
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
