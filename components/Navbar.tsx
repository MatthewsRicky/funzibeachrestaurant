"use client";

import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto flex h-24 max-w-7xl items-center justify-between border-b border-white/30 px-6 md:px-10">
      <a href="#home" className="text-[10px] font-bold tracking-[.13em]">
        <span className="block text-xl tracking-[.18em]">FUNZI</span>
        BEACH RESTAURANT • ISLAND EXCURSIONS
      </a>

      <button
        className="text-xs tracking-widest md:hidden"
        onClick={() => setOpen(!open)}
      >
        MENU +
      </button>

      <nav
        className={`${
          open
            ? "absolute left-0 right-0 top-24 flex bg-[#103c34] p-6"
            : "hidden"
        } gap-7 text-xs tracking-wide md:static md:flex md:bg-transparent md:p-0`}
      >
        <a href="#story">Our story</a>
        <a href="#experiences">Experiences</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        href="#book"
        className="hidden border border-white/60 px-5 py-3 text-xs tracking-wide md:inline-flex"
      >
        Book an escape ↗
      </a>
    </header>
  );
}
