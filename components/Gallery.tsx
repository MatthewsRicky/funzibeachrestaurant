"use client";

import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/images/funzi-restaurant.jpg",
    title: "Funzi Beach Restaurant",
    description:
      "A relaxed coastal table for fresh seafood, local flavours, and long, unhurried lunches.",
  },
  {
    src: "/images/funzi-island.jpg",
    title: "Funzi Island",
    description:
      "A beautiful island escape where quiet beaches, local culture, and slow coastal living meet.",
  },
  {
    src: "/images/ramisi-estuary.jpg",
    title: "Ramisi Estuary",
    description:
      "Cruise through mangroves and calm waterways shaped by the rhythms of the tide.",
  },
  {
    src: "/images/funzi-boat.jpg",
    title: "Island Expeditions",
    description:
      "Set out on the water with our local crew for a day of discovery around Funzi.",
  },
  {
    src: "/images/funzi-seafood.jpg",
    title: "Fresh Coastal Seafood",
    description:
      "A taste of the Indian Ocean, prepared with care and served in a setting made for slowing down.",
  },
  {
    src: "/images/funzi-mangroves.jpg",
    title: "Mangrove Moments",
    description:
      "Discover the rich, peaceful landscape that makes Funzi Island such a special place to explore.",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex flex-col gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Gallery
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">
              A glimpse of the restaurant, the island, and every expedition in
              between.
            </h2>
          </div>

          <a
            href="https://www.facebook.com/FunziBeachRestaurant/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center rounded-full border border-emerald-700 px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white"
          >
            Follow on Facebook ↗
          </a>
        </div>

        <div className="grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSelectedImage(item)}
              className={`group relative overflow-hidden rounded-3xl bg-slate-900 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "sm:row-span-2" : ""
              } ${index === 3 ? "lg:col-span-2" : ""}`}
              style={{
                backgroundImage: `url("${item.src}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent transition group-hover:from-slate-950/95" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  {index === 0 || index === 4 ? "Restaurant" : "Expedition"}
                </p>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <span className="mt-3 inline-flex text-sm font-semibold text-slate-200">
                  View story →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="h-80 bg-cover bg-center sm:h-[430px]"
              style={{ backgroundImage: `url("${selectedImage.src}")` }}
            />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Funzi Beach Restaurant
                  </p>
                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    {selectedImage.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Close
                </button>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                {selectedImage.description}
              </p>

              <a
                href="#contact"
                onClick={() => setSelectedImage(null)}
                className="mt-6 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Plan this experience →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
