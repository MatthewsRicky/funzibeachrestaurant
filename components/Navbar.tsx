"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Our Story", href: "#about" },
  { label: "Explore Funzi", href: "#destinations" },
  { label: "Experiences", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection?.target.id) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-[#083b32]/95 shadow-xl shadow-slate-950/20 backdrop-blur-xl"
          : "border-white/15 bg-[#083b32]/85 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:h-24 lg:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          className="group shrink-0 text-[9px] font-bold leading-[1.3] tracking-[.13em] text-white"
          aria-label="Funzi Beach Restaurant home"
        >
          <span className="block text-xl tracking-[.18em] transition group-hover:text-amber-300">
            FUNZI
          </span>
          BEACH RESTAURANT
          <span className="mx-1 text-amber-300">•</span>
          ISLAND EXPEDITIONS
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white/10 text-amber-300"
                    : "text-slate-100 hover:bg-white/10 hover:text-amber-300"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+254726910137"
            className="text-xs font-medium text-slate-200 transition hover:text-amber-300"
          >
            0726 910 137
          </a>

          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:bg-amber-300"
          >
            Book Funzi ↗
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#083b32] transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/10 text-amber-300"
                      : "text-white hover:bg-white/5 hover:text-amber-300"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
            <a
              href="tel:+254726910137"
              className="rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Call 0726 910 137
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-amber-400 px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Book a Funzi Experience ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
