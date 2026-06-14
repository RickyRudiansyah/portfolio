"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#intro", label: "INTRO" },
  { href: "#warkop-qr", label: "PROJECTS" },
  { href: "#connect", label: "CONNECT" },
];

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = links.map((l) =>
        document.querySelector(l.href)
      ) as HTMLElement[];
      let current = "";
      for (const section of sections) {
        if (!section) continue;
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.5) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getLinkClass = (href: string) => {
    const sectionId = href.slice(1);
    const isActive = active === sectionId;
    return isActive
      ? "text-[#F5F5F5]"
      : "text-[#888888] hover:text-[#F5F5F5]";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-[#222222] ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md" : "bg-transparent"
      } ${className ?? ""}`}
    >
      <div className="max-w-[1100px] mx-auto px-[max(24px,6vw)] h-16 flex items-center justify-between">
        <a
          href="#intro"
          className="text-sm font-semibold tracking-[0.08em] uppercase text-[#F5F5F5]"
        >
          Ricky Rudiansyah
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${getLinkClass(l.href)}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="text-xs font-semibold tracking-[0.12em] uppercase text-[#888888] hover:text-[#F5F5F5] transition-colors inline-flex items-center gap-1"
          >
            CV
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[#F5F5F5] transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#F5F5F5] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#F5F5F5] transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-bold tracking-[0.08em] uppercase ${getLinkClass(l.href)}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
