<div align="center">

# Abin T S — Developer Portfolio

**A super-minimal, dark-first portfolio built with Next.js — with scroll-driven animations, a self-typing terminal and a monochrome design system.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-black?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-black?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-black?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square)](https://www.framer.com/motion/)

</div>

---

## 📸 Screenshots

> Dark at all times — designed to be viewed as-is.

| | |
|---|---|
| ![Hero — animated intro, magnetic CTAs and rotating headline](screenshots/home-hero.png) | ![About — linked bio and quick facts](screenshots/home-about.png) |
| ![Right now — the "what I'm up to" board](screenshots/home-now.png) | ![Experience — timeline that draws itself on scroll](screenshots/home-experience.png) |
| ![Projects — 3D-tilting project cards](screenshots/home-projects.png) | ![Into the terminal — self-typing terminal](screenshots/home-terminal.png) |
| ![Contact — magnetic "Say hello" + copy email](screenshots/home-contact.png) | ![Projects page — full project grid](screenshots/projects.png) |
| ![About page](screenshots/about.png) | ![Contact page — form + direct channels + copy email](screenshots/contact.png) |

<details>
<summary><strong>Full home page overview</strong></summary>

![Entire home page from top to bottom](screenshots/home-full.png)

</details>

---

## ✨ Features

**Design**

- 🖤 **Monochrome dark theme** — warm near-black (`#0f0f0e`) with an ivory accent (`#e4dfd2`); hierarchy through weight and motion, not color
- 📊 **Editorial "Right now" board** — hairline-row now-page widget showing what I'm learning, building and what's next
- 📑 **Minimal section headings** — titles that decode in with a text-scramble effect
- 🧭 **Fixed blur navbar** — underline-grow hover states and a mobile hamburger menu
- ⌘ **Terminal-inspired type details** throughout — mono labels, hairline borders

**Interaction & animation** (all respect `prefers-reduced-motion`)

- 🖱️ **Custom trailing cursor** — an accent dot with a spring-following ring that expands over interactive elements (desktop only)
- 🧲 **Magnetic buttons** — CTAs that pull toward the cursor
- 🎞️ **Minimal scroll reveals** — quiet opacity fades, once per element
- 📈 **Scroll-drawn timeline** — the experience line draws itself as you scroll
- 🔤 **Text scramble decode** on the hero tagline and every section title
- 🌀 **3D tilt cards** — project cards rotate in perspective toward the mouse
- 📜 **Revolving hero headline** — "I build *interfaces* / *experiences* / ..." cycling words
- ⏱️ **Live IST clock** — ticking footer widget

**Home page sections**

1. **Hero** — staggered intro, availability-free clean start, "View my work" / "Get in touch"
2. **About** — short bio + quick-facts list
3. **Right now** — learning / building / next up / daily drivers
4. **Experience** — MakTal Technologies timeline
5. **Projects** — featured work as tilt cards
6. **Skills**
7. **Into the terminal** — a fake terminal that types out its own script, forever
8. **Contact** — big CTA, copy-email button and social links

**Other pages**

- 📄 `/about` — full bio, journey, and what I'm currently learning
- 🧩 `/Projects` — complete project grid (Blue Tide, ACME dashboard, Markdown blog, Todo app)
- ✉️ `/Contact` — mailto-backed message form + direct channels

**Engineering**

- ⚡ Next.js App Router — fully static, zero runtime data
- 🧩 Small, focused client components (the server tree only sends `<Reveal>` wrappers and static markup)
- 🌓 Dark-only by design — no flash-of-theme-toggle
- ♿ Accessible: semantic markup, labeled controls, reduced-motion support
- 🔍 SEO metadata with per-page titles

---

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 4 (CSS variables → design tokens) |
| Animation | Framer Motion 12 |
| Fonts | Geist + Geist Mono (via `next/font`) |
| Icons | Inline SVG + `react-icons` |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Production build & run
npm run build
npm start
```

> 📷 `node scripts/screenshot.mjs` regenerates all README screenshots
> (requires the site running on `localhost:3000` and Microsoft Edge).

## 📂 Project Structure

```
app/
├─ layout.tsx            # root layout, fonts, metadata, cursor
├─ page.tsx              # one-page home (all sections)
├─ globals.css           # design tokens, scrollbar, selection
└─ (dashboard)/
   ├─ about/page.tsx     # about page
   ├─ Projects/page.tsx  # project grid
   └─ Contact/page.tsx   # contact page
components/
├─ Navbar.tsx            # fixed blur navbar + mobile menu
├─ Hero.tsx              # staggered intro, rotating word, parallax
├─ Terminal.tsx          # self-typing fake terminal
├─ ExperienceTimeline.tsx# scroll-drawn timeline
├─ NowBoard.tsx          # "right now" hairline rows
├─ ProjectItem.tsx       # 3D-tilt project card
├─ ContactForm.tsx       # mailto-backed form
├─ Cursor.tsx            # trailing cursor ring
├─ Magnetic.tsx          # magnetic hover wrapper
├─ ScrambleText.tsx      # decode-in text
├─ Tilt.tsx              # 3D tilt wrapper
├─ Reveal.tsx            # minimal scroll fade
├─ SectionHeading.tsx    # scramble heading + hairline
├─ CopyEmail.tsx         # one-click email copy
├─ LocalTime.tsx         # ticking IST clock
└─ Footer.tsx
lib/
└─ data.ts               # projects, skills, experience, socials
public/
└─ screenshots/          # README screenshots
scripts/
└─ screenshot.mjs        # regenerates README screenshots (puppeteer-core)
```

## 🎨 Design Tokens

Defined once in `app/globals.css` and consumed through Tailwind (`bg-accent`, `text-muted`, `border-border`...):

```css
:root {
  --background: #0f0f0e;  /* warm near-black   */
  --surface:    #161615;  /* cards, terminal   */
  --foreground: #eaeae5;  /* primary text      */
  --muted:      #90908a;  /* secondary text    */
  --border:     #242422;  /* hairlines         */
  --accent:     #e4dfd2;  /* ivory highlight   */
}
```

## 📬 Contact

**Abin T S** — Full-Stack Developer

- 🖥️ GitHub: [abints47](https://github.com/abints47)
- 💼 LinkedIn: [Abin T S](https://www.linkedin.com/in/abin-t-s)
- ✉️ Email: abinthazhathupurakkal@gmail.com

Currently training at MakTal Technologies — open to freelance and full-time work.
