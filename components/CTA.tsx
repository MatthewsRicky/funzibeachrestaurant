export default function CTA() {
  return (
    <section className="bg-emerald-700 py-20 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
            Ready for Funzi?
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Plan your restaurant visit or island expedition.
          </h2>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white px-7 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
        >
          Start Planning
        </a>
      </div>
    </section>
  );
}
