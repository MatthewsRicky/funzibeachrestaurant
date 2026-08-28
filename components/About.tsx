const values = [
  "Authentic Funzi Island experiences",
  "Freshly prepared coastal seafood",
  "Friendly local guides and crew",
  "Flexible days for couples, families, and groups",
];

const storyCards = [
  [
    "Restaurant",
    "A relaxed beachside table where fresh seafood, local flavour, and warm hospitality come together.",
  ],
  [
    "Expeditions",
    "Explore Funzi Island, quiet waterways, mangroves, and the beauty of Kenya's south coast.",
  ],
  [
    "Our promise",
    "Every visit should feel unhurried, personal, and deeply connected to the coast.",
  ],
  [
    "The experience",
    "Come for an excursion, stay for lunch, and leave with stories worth sharing.",
  ],
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-funzi-navy">
            Our story
          </p>
          <h2 className="mt-4 text-3xl font-bold text-funzi-navy sm:text-4xl">
            A beach restaurant and island escape in one unforgettable place.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Funzi Beach Restaurant brings together the best of the south coast:
            fresh seafood, calm coastal scenery, and expeditions that reveal the
            beauty of Funzi Island.
          </p>
          <p className="mt-4 text-slate-600">
            Whether you join us for lunch, a private group outing, or a full
            island day, our team helps create an experience that feels easy,
            welcoming, and completely yours.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {storyCards.map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-3xl bg-funzi-navy px-6 py-8 text-white lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-funzi-red">
              Why visit Funzi
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Coastal flavour, island adventure, and a slower kind of day.
            </h3>
          </div>

          <ul className="grid gap-3 text-sm sm:grid-cols-2">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-2 text-slate-200"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-funzi-green" />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
