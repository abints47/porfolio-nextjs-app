# Portfolio Website

A personal portfolio website built with Next.js and Bootstrap, featuring routing, a dark/light theme toggle, and a contact form.

🔗 **Live Demo:** [https://abin-dev-portfolio.vercel.app/](https://porfolio-8tfar4elv-948635.vercel.app/)

---

## Tech Stack

- **[Next.js](https://nextjs.org/)** — React framework using the App Router for file-based routing, layouts, and Server/Client Components
- **[React](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — typed JavaScript
- **[Bootstrap 5](https://getbootstrap.com/)** — CSS framework for layout, spacing, and components
- **[react-bootstrap](https://react-bootstrap.github.io/)** — React component bindings for Bootstrap (Navbar, Card, Form, Badge, etc.)
- **[react-icons](https://react-icons.github.io/react-icons/)** — icon library used for social links in the footer
- **[Vercel](https://vercel.com/)** — hosting and deployment

---

## Features

- **File-based routing** using the Next.js App Router, organized under a `(dashboard)` route group
- **Responsive Navbar** with logo, navigation links, and a theme toggle
- **Dark/Light mode toggle** using Bootstrap's `data-bs-theme` attribute, persisted via `localStorage`
- **Hero section** with colorful highlight cards (Bootstrap `Card`, `Row`, `Col` grid)
- **Skills section** displaying tech stack as styled badges
- **About page** with a cover image, profile photo, and blog-style content layout
- **Contact page** with a working form (name, email, message) built with `react-bootstrap`'s `Form` component
- **Sticky footer** with social links (GitHub, LinkedIn, email) that stays at the bottom of every page
- **Theme-aware Navbar/Footer** — backgrounds and text automatically match the current light/dark theme

---

## Project Structure

```
app/
├── page.tsx                     → Home page (/)
├── layout.tsx                   → Root layout (Navbar + Footer wrap every page)
├── globals.css                  → Global styles (sticky footer flexbox setup)
└── (dashboard)/                 → Route group — organizes files without affecting URLs
    ├── about/
    │   └── page.tsx             → /about
    ├── projects/
    │   └── page.tsx             → /projects
    └── contact/
        └── page.tsx             → /contact

components/
├── AppNavbar.tsx                → Navbar with logo, links, and theme toggle
├── HeroCards.tsx                → Colorful highlight cards for the homepage
├── Skills.tsx                   → Tech stack badges
├── Footer.tsx                   → Site footer with social links
└── ThemeToggle.tsx              → Dark/light mode toggle button

public/
├── logo.png                     → Navbar logo
├── profile.jpg                  → About page profile photo
└── about-cover.jpg               → About page cover image
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Deployment

This project is deployed on [Vercel](https://vercel.com/):

1. Push the repository to GitHub
2. Import the repo at [vercel.com](https://vercel.com/new)
3. Vercel auto-detects the Next.js framework and deploys with zero config

Live site: **[https://porfolio-8tfar4elv-948635.vercel.app/](https://porfolio-8tfar4elv-948635.vercel.app/)**

---

## Key Concepts Practiced

- App Router file-based routing and route groups
- Server Components vs. Client Components (`"use client"`)
- Shared layouts (Navbar/Footer persisting across routes)
- Bootstrap's grid system (`Container`, `Row`, `Col`)
- Bootstrap utility classes (spacing, typography, color, rounding)
- Controlled forms with `useState`
- Theme persistence with `localStorage`
- Image optimization with `next/image`

---

## Future Improvements

- Wire the contact form to an email service (e.g., Formspree)
- Add dynamic project detail pages (`/projects/[slug]`)
- Add scroll-based animations
- Add a blog section using Markdown files