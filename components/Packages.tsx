const packages = [
  {
    name: "Funzi Island Day Expedition",
    description:
      "A full day of island exploration, mangrove scenery, beach time, and a relaxed restaurant lunch.",
    includes: [
      "Island transfer",
      "Guided experience",
      "Lunch at the restaurant",
      "Flexible group planning",
    ],
  },
  {
    name: "Dolphin & Estuary Cruise",
    description:
      "A scenic coastal cruise through waterways and mangroves with opportunities to look out for dolphins.",
    includes: [
      "Boat excursion",
      "Local crew",
      "Mangrove and estuary views",
      "Restaurant stop available",
    ],
  },
  {
    name: "Seafood Lunch Experience",
    description:
      "Come for the food: fresh seafood, local flavour, cold drinks, and a relaxed table by the coast.",
    includes: [
      "Restaurant table",
      "Fresh seafood menu",
      "Coastal setting",
      "Group-friendly options",
    ],
  },
  {
    name: "Private Group Escape",
    description:
      "A tailored Funzi day for celebrations, families, friends, and private groups.",
    includes: [
      "Custom itinerary",
      "Group coordination",
      "Restaurant experience",
      "WhatsApp planning support",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-amber-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Experiences
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Choose the Funzi experience that matches your kind of day.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
              <p className="mt-4 text-slate-600">{pkg.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-sm font-medium text-slate-500">
                  Ask us for current pricing
                </span>
                <a
                  href="#contact"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Request booking
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
