"use client";

import { useState } from "react";

type ExperienceCardProps = {
  name: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  includes: string[];
  highlight: string;
};

export default function ExperienceCard({
  name,
  category,
  description,
  image,
  duration,
  includes,
  highlight,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-sm transition-all duration-500 ${
        isExpanded ? "min-h-[580px]" : "min-h-[390px]"
      }`}
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Base image contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/10" />

      <div className="relative flex min-h-[inherit] flex-col">
        <div className="flex items-start justify-between p-6">
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200 backdrop-blur-sm">
            {category}
          </span>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
              {duration}
            </span>

            {isExpanded && (
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label={`Close ${name} details`}
                className="grid size-8 place-items-center rounded-full border border-white/30 bg-slate-950/40 text-lg text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="mt-auto">
          {/* Always-visible card summary */}
          <div className="px-6 pb-6">
            <p className="mb-2 text-sm font-semibold text-amber-300">
              {highlight}
            </p>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              {description}
            </p>

            {!isExpanded && (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                aria-expanded={false}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
              >
                View experience details <span>+</span>
              </button>
            )}
          </div>

          {/* Expanded panel: colour overlay remains translucent over image */}
          {isExpanded && (
            <div className="border-t border-white/20 bg-emerald-950/80 px-6 py-6 backdrop-blur-[3px]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                Your experience includes
              </p>

              <ul className="mt-4 grid gap-2 text-sm text-slate-100">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Close details
                </button>

                <a
                  href="#contact"
                  className="rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
                >
                  Book this experience →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
