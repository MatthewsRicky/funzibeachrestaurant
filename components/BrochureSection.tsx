import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "The Funzi Sand Bank",
    description:
      "Discover the sand banks and coastal waters that form part of the Funzi Island experience.",
  },
  {
    title: "Funzi Village Tour",
    description:
      "Take the opportunity to explore village life, local culture and the history of the island.",
  },
  {
    title: "Traditional Crafts",
    description:
      "Meet local women and discover traditional crafts, including handmade mats, caps and fans.",
  },
  {
    title: "Funzi Shrine",
    description:
      "Learn about the island's traditional heritage and the cultural practices highlighted in the brochure.",
  },
  {
    title: "Historic Baobab Tree",
    description:
      "Visit the historic baobab tree featured in the Funzi Island excursion material.",
  },
  {
    title: "Local Community",
    description:
      "Experience more of the island beyond the shoreline, including its local community and places of interest.",
  },
];

export default function BrochureSection() {
  return (
    <section id="discover" className="bg-funzi-sky/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-funzi-navy">
            Discover Funzi Island
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-funzi-navy sm:text-4xl lg:text-5xl">
            More than a day at the beach.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Funzi Island offers more than beautiful coastal scenery. Explore the
            island through village visits, sand banks, traditional crafts, local
            heritage and the community experiences highlighted in the original
            Funzi Beach Restaurant excursion brochure.
          </p>
        </div>

        {/* Main editorial layout */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: brochure highlights */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-funzi-navy text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-semibold text-funzi-navy">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Small heritage callout */}
            <div className="mt-6 rounded-3xl bg-funzi-navy p-6 text-white sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-funzi-red">
                The island experience
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                This is just the beginning of a memorable adventure. Combine
                your time by the water with the culture, traditions and places
                of interest that make Funzi Island worth exploring.
              </p>

              <Link
                href="#packages"
                className="mt-5 inline-flex rounded-full bg-funzi-red px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Experiences →
              </Link>
            </div>
          </div>

          {/* Right: original brochure */}
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-xl shadow-slate-900/10 sm:p-5">
              {/* Brochure label */}
              <div className="flex items-center justify-between gap-4 px-2 pb-4 sm:px-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-funzi-red">
                    From Funzi Beach Restaurant
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-funzi-navy">
                    Funzi Island Excursions
                  </h3>
                </div>

                <span className="hidden rounded-full bg-funzi-sky px-3 py-1 text-xs font-semibold text-funzi-navy sm:inline-flex">
                  Island Guide
                </span>
              </div>

              {/* Brochure image */}
              <a
                href="/funzi1.jpg"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl bg-slate-100"
                aria-label="Open the Funzi Island brochure"
              >
                <Image
                  src="/funzi1.jpg"
                  alt="Funzi Beach Restaurant and Funzi Island Excursions brochure"
                  width={720}
                  height={514}
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
                />
              </a>

              {/* Brochure actions */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/FUNZI ISLAND BROCHURE.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-funzi-navy px-5 py-3 text-sm font-semibold text-funzi-navy transition hover:bg-funzi-navy hover:text-white"
                >
                  View Full Brochure ↗
                </a>

                <Link
                  href="#contact"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-funzi-red px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>

            {/* Contact strip */}
            <div className="mt-5 rounded-2xl border border-funzi-blue/20 bg-white/70 p-5 text-center">
              <p className="text-sm text-slate-600">
                Ready to explore Funzi Island?
              </p>

              <div className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-semibold text-funzi-navy">
                <a
                  href="tel:+254726910137"
                  className="transition hover:text-funzi-red"
                >
                  0726 910 137
                </a>

                <a
                  href="tel:+254756810991"
                  className="transition hover:text-funzi-red"
                >
                  0756 810 991
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
