import ExperienceCard from "@/components/ExperienceCard";

const packages = [
  {
    name: "Funzi Island Day Excursion",
    category: "Island adventure",
    duration: "Full day",
    highlight: "The complete Funzi experience",
    description:
      "A full day of island excursions, mangrove scenery, beach time, and a relaxed restaurant lunch.",
    image: "/funzi2.jpg",
    includes: [
      "Island transfer and local crew",
      "Funzi Island exploration",
      "Fresh seafood restaurant lunch",
      "Flexible planning for your group",
    ],
  },
  {
    name: "Dolphin & Estuary Cruise",
    category: "Water expedition",
    duration: "Half or full day",
    highlight: "Mangroves, waterways, and wildlife",
    description:
      "A scenic coastal cruise through the Ramisi estuary, with time to watch for dolphins and birdlife.",
    image: "/dolphinandestuary.jpg",
    includes: [
      "Boat excursion with local crew",
      "Mangrove and estuary cruise",
      "Dolphin-spotting opportunity",
      "Optional restaurant stop",
    ],
  },
  {
    name: "Seafood Lunch Experience",
    category: "Restaurant",
    duration: "Lunch",
    highlight: "Straight from the coast",
    description:
      "Settle in for fresh seafood, local flavour, cold drinks, and a relaxed beachside table.",
    image: "/seafood.jpg",
    includes: [
      "Reserved restaurant table",
      "Fresh seafood menu options",
      "Beach and waterfront setting",
      "Ideal for couples, families, and groups",
    ],
  },
  {
    name: "Private Group Escape",
    category: "Private booking",
    duration: "Custom",
    highlight: "Designed around your group",
    description:
      "A flexible Funzi day for family outings, celebrations, friends, and private group experiences.",
    image: "funziboat.jpg",
    includes: [
      "Tailored experience planning",
      "Flexible group timing",
      "Restaurant and excursion options",
      "Direct WhatsApp booking support",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-funzi-red">
            Experiences
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Choose the Funzi experience that matches your kind of day.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore an experience first, then book when you are ready.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <ExperienceCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
