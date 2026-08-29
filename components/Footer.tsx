"use client";

export function Footer() {
  return (
    <footer id="contact" className="bg-funzi-navy/80 py-16 text-funzi-red">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_.8fr_.45fr] md:px-10">
        <div>
          <p className="text-[10px] font-bold tracking-[.13em]">
            <span className="block text-xl tracking-[.18em]">FUNZI</span>
            BEACH RESTAURANT • ISLAND EXCURSIONS
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6">
            Coastal days, fresh seafood and island memories on Kenya&apos;s
            beautiful south coast.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="mb-2 text-[10px] uppercase tracking-widest text-[#f2b27b]">
            Visit & contact
          </p>
          <span>Funzi Island, South Coast, Kenya</span>
          <a href="tel:+254726910137">0726 910 137</a>
          <a href="mailto:kiraoali@gmail.com">kiraoali@gmail.com</a>
        </div>

        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="mb-2 text-[10px] uppercase tracking-widest text-[#f2b27b]">
            Elsewhere
          </p>
          <a
            href="https://www.facebook.com/FunziBeachRestaurant/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>
          <a href="#book">Make a booking →</a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around w-full px-6 py-2">
          <div className="mt-12 border-t border-slate-200 pt-6 text-sm">
            © {new Date().getFullYear()} Funzi Island Restaurant. All rights reserved.
          </div>
          <div className="mt-12 border-t border-slate-200 pt-6 text-sm">
            Designed and built by Ricky Matthews Githinji.
          </div>
        </div>
    </footer>
  );
}
