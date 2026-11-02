"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/Projects", label: "Projects" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground transition-colors hover:text-accent"
        >
          abin<span className="text-accent">.</span>ts
        </Link>

        {/* Desktop links */}
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href} className="hidden md:block">
              <Link
                href={link.href}
                className={`relative font-mono text-[13px] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                  pathname === link.href
                    ? "text-accent after:w-full"
                    : "text-muted after:w-0 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-4 bg-current transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-current transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-border bg-background/95 px-6 py-3 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 font-mono text-sm ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
