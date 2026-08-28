export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(6, 40, 34, 0.6), rgba(6, 40, 34, 0.78)), url('/funzihero.jpg')",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-200 backdrop-blur-sm">
          Funzi Beach Restaurant & Island Expeditions
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
          Fresh seafood, wild waterways, and unforgettable Funzi Island days.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          Experience the Kenyan south coast through island expeditions, dolphin
          cruises, mangrove adventures, and seafood prepared by the sea.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Book an Expedition
          </a>
          <a
            href="#packages"
            className="rounded-full border border-white/40 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Experiences
          </a>
        </div>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {[
            { value: "Funzi", label: "Island expeditions and coastal escapes" },
            { value: "Fresh", label: "Seafood served by the Indian Ocean" },
            { value: "Local", label: "Warm Kenyan south coast hospitality" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-amber-300">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
