"use client";

import { FormEvent, useState } from "react";

export function BookingSection() {
  const [bookingText, setBookingText] = useState(
    "Hello Funzi Beach Restaurant, I would like to book an island excursion.",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    setBookingText(
      [
        "I would like to enquire about a Funzi Island booking.",
        "",
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Email: ${data.get("email")}`,
        `Date: ${data.get("date") || "Flexible"}`,
        `Guests: ${data.get("guests")}`,
        `Experience: ${data.get("experience")}`,
        `Notes: ${data.get("notes") || "None"}`,
      ].join("\n"),
    );

    document.getElementById("booking-options")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  const encoded = encodeURIComponent(
    `Hello Funzi Beach Restaurant,\n\n${bookingText}`,
  );

  return (
    <section id="book" className="bg-[#bc664d] py-24 text-[#fff8ec]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[.85fr_1.15fr] md:px-10">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f2b27b]">
            Booking made simple
          </p>

          <h2 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
            Say hello to your
            <br />
            <em className="text-[#f3b174]">next good day.</em>
          </h2>

          <p className="mt-7 max-w-sm text-[15px] leading-7 text-[#f8ddd2]">
            Share a few details, then choose email or WhatsApp to send your
            enquiry.
          </p>

          <div className="mt-10 border-t border-white/30 pt-5">
            <p className="text-[10px] uppercase tracking-widest text-[#f3c1a7]">
              Call us
            </p>
            <a
              className="mt-2 block font-serif text-xl"
              href="tel:+254726910137"
            >
              0726 910 137
            </a>
            <a
              className="mt-1 block font-serif text-xl"
              href="tel:+254756810991"
            >
              0756 810 991
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Phone number" name="phone" required />
            <Field label="Email address" name="email" type="email" />
            <Field label="Preferred date" name="date" type="date" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <SelectField label="Number of guests" name="guests">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3-5 guests</option>
              <option>6+ guests</option>
            </SelectField>

            <SelectField label="Experience" name="experience">
              <option>Funzi Island day escape</option>
              <option>Dolphin & estuary cruise</option>
              <option>Fresh seafood table</option>
              <option>Custom island day</option>
            </SelectField>
          </div>

          <label className="grid gap-2 text-[10px] font-bold uppercase tracking-widest">
            Anything else we should know?
            <textarea
              name="notes"
              rows={3}
              className="border-b border-white/60 bg-transparent py-2 text-sm outline-none placeholder:text-[#f1c2b1]"
              placeholder="Tell us a little more about your plans..."
            />
          </label>

          <button
            className="flex justify-between bg-[#fff8ec] px-5 py-4 text-xs tracking-wide text-[#173c35]"
            type="submit"
          >
            See booking options <span>→</span>
          </button>
        </form>
      </div>

      <div
        id="booking-options"
        className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-5 border-t border-white/30 px-6 pt-5 md:flex-row md:items-center md:px-10"
      >
        <p className="text-xs text-[#f8ddd2]">
          Your details open in your chosen app - nothing is sent from the
          website.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://wa.me/254726910137?text=${encoded}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-48 justify-between border border-white/60 px-4 py-3"
          >
            <b className="font-serif font-normal">WhatsApp</b>
            <span className="text-[9px] uppercase tracking-wide">Send ↗</span>
          </a>

          <a
            href={`mailto:kirao@gmail.com?subject=Funzi%20Island%20Booking%20Enquiry&body=${encoded}`}
            className="flex w-48 justify-between border border-white/60 px-4 py-3"
          >
            <b className="font-serif font-normal">Email</b>
            <span className="text-[9px] uppercase tracking-wide">Send ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-[10px] font-bold uppercase tracking-widest">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-white/60 bg-transparent py-2 text-sm outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-[10px] font-bold uppercase tracking-widest">
      {label}
      <select
        name={name}
        className="border-b border-white/60 bg-transparent py-2 text-sm outline-none"
      >
        {children}
      </select>
    </label>
  );
}
