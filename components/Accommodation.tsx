const options = [
  {
    title: "Funzi day visits",
    text: "Perfect for guests looking for a complete island and restaurant experience in one memorable day.",
  },
  {
    title: "South coast stays",
    text: "Pair your Funzi expedition with a nearby Diani or south coast beach stay.",
  },
  {
    title: "Private group outings",
    text: "A flexible option for family days, celebrations, teams, and groups of friends.",
  },
  {
    title: "Custom coastal plans",
    text: "Tell us your dates and group size, and we will help create the right experience.",
  },
];

export default function Accommodation() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-funzi-navy">
          Plan your stay
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Make Funzi part of a longer south coast escape.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {options.map((option) => (
          <div
            key={option.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-funzi-navy text-lg font-bold text-funzi-sky">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              {option.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {option.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
