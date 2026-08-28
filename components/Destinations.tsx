const destinations = [
  {
    name: "Funzi Island",
    label: "Island escape",
    text: "A laid-back coastal destination with local culture, beautiful views, and time to simply slow down.",
    image: "/images/funzi-island.jpg",
  },
  {
    name: "Ramisi Estuary",
    label: "Mangroves & waterways",
    text: "Cruise through calm channels where mangroves, birdlife, and the tides set the pace.",
    image: "/images/ramisi-estuary.jpg",
  },
  {
    name: "Funzi Beach Restaurant",
    label: "Fresh seafood",
    text: "Settle in for a generous coastal meal with flavours inspired by the Indian Ocean.",
    image: "/images/funzi-restaurant.jpg",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="bg-emerald-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Explore Funzi
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Discover the island, the waterways, and the flavours of the coast.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                  {destination.label}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {destination.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {destination.text}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Plan your visit →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
