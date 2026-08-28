const reasons = [
  {
    title: "Funzi Island specialists",
    text: "Enjoy an experience shaped around the island, its waterways, and the people who know this coast best.",
  },
  {
    title: "Fresh from the sea",
    text: "Our restaurant celebrates seafood and local flavours in a relaxed beachside setting.",
  },
  {
    title: "Made for your group",
    text: "From couples and families to celebrations and larger outings, we help shape the right day.",
  },
  {
    title: "Easy booking",
    text: "Send your enquiry by WhatsApp or email, then let us help organise the details.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-funzi-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-funzi-red">
            Why Funzi Beach Restaurant
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            More than lunch. More than a boat trip. A full coastal experience.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-funzi-red text-lg font-bold text-white"
              >
                ✓
              </div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
