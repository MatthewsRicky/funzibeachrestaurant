"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [bookingMessage, setBookingMessage] = useState(
    "Hello Funzi Beach Restaurant, I would like to make a booking enquiry.",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setBookingMessage(
      [
        "I would like to make a Funzi Beach Restaurant booking enquiry.",
        "",
        `Name: ${formData.get("name") || "Not provided"}`,
        `Phone: ${formData.get("phone") || "Not provided"}`,
        `Email: ${formData.get("email") || "Not provided"}`,
        `Guests: ${formData.get("guests") || "Not provided"}`,
        `Date: ${formData.get("date") || "Flexible"}`,
        `Experience: ${formData.get("experience") || "Not provided"}`,
        `Message: ${formData.get("message") || "None"}`,
      ].join("\n"),
    );
  }

  const encodedMessage = encodeURIComponent(
    `Hello Funzi Beach Restaurant,\n\n${bookingMessage}`,
  );

  return (
    <section id="contact" className="bg-funzi-navy py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-funzi-red">
            Contact & booking
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Tell us about your perfect Funzi day.
          </h2>
          <p className="mt-6 max-w-lg text-slate-300">
            Share your date, group size, and the experience you have in mind.
            Then send your enquiry directly through WhatsApp or email.
          </p>

          <div className="mt-8 space-y-2 text-slate-200">
            <p>
              Phone: <a href="tel:+254726910137">0726 910 137</a>
            </p>
            <p>
              Alternative: <a href="tel:+254756810991">0756 810 991</a>
            </p>
            <p>
              Email: <a href="mailto:kirao@gmail.com">kirao@gmail.com</a>
            </p>
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-3xl bg-white p-6 text-slate-900 shadow-xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Phone number" name="phone" required />
              <Field label="Email address" name="email" type="email" />
              <Field label="Preferred date" name="date" type="date" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField label="Guests" name="guests">
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3-5 guests</option>
                <option>6+ guests</option>
              </SelectField>

              <SelectField label="Experience" name="experience">
                <option>Funzi Island Day Expedition</option>
                <option>Dolphin & Estuary Cruise</option>
                <option>Seafood Lunch Experience</option>
                <option>Private Group Escape</option>
              </SelectField>
            </div>

            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                name="message"
                rows={4}
                className="rounded-xl border border-slate-200 p-3 outline-none focus:border-emerald-600"
                placeholder="Tell us more about your plans..."
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-funzi-red px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Prepare booking enquiry
            </button>
          </form>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={`https://wa.me/254726910137?text=${encodedMessage}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-funzi-green px-5 py-3 text-center font-semibold text-white transition hover:bg-[#20bc59]"
            >
              Send via WhatsApp ↗
            </a>

            <a
              href={`mailto:kirao@gmail.com?subject=Funzi%20Beach%20Restaurant%20Booking&body=${encodedMessage}`}
              className="rounded-full bg-funzi-red px-5 py-3 text-center font-semibold text-slate-900 transition hover:bg-red-700"
            >
              Send via Email ↗
            </a>
          </div>
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
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-slate-200 p-3 outline-none focus:border-emerald-600"
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
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <select
        name={name}
        className="rounded-xl border border-slate-200 p-3 outline-none focus:border-emerald-600"
      >
        {children}
      </select>
    </label>
  );
}
