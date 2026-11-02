"use client";

import { useState } from "react";
import { socials } from "@/lib/data";

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `${socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-surface/50 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-full border border-accent py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/10 sm:w-auto sm:px-8"
      >
        Send message →
      </button>
      <p className="mt-3 font-mono text-[11px] text-muted/70">
        This opens your mail app — no data is stored anywhere.
      </p>
    </form>
  );
}
