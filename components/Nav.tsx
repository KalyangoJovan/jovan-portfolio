"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text-mute)] transition-colors hover:text-[var(--text)]"
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--bg)]/90 backdrop-blur transition-shadow ${
        scrolled ? "border-[var(--line)] shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1040px] items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl font-medium">
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-[var(--text-mute)] transition-colors hover:text-[var(--text)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resumeFile}
            download
            className="rounded-sm bg-[var(--text)] px-4 py-2 text-[15px] font-medium text-[var(--bg)] transition-opacity hover:opacity-85"
          >
            Download r&eacute;sum&eacute;
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[var(--text-mute)] hover:text-[var(--text)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeFile}
                download
                className="inline-block rounded-sm bg-[var(--text)] px-4 py-2 font-medium text-[var(--bg)]"
              >
                Download r&eacute;sum&eacute;
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
