"use client";

import { FormEvent, useState } from "react";
import { getErrorMessage } from "@/lib/validation";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialStatus: Status = { type: "idle", message: "" };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      phone: data.get("phone"),
      guests: data.get("guests"),
      date: data.get("date"),
      experience: data.get("experience"),
      message: data.get("message"),
      website: data.get("website"),
    };

    setIsSubmitting(true);
    setStatus(initialStatus);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thank you — your booking enquiry has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: getErrorMessage(error),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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

          <p className="mt-6 max-w-lg text-slate-200">
            Book a restaurant visit, island expedition, dolphin cruise, or a
            private group experience. Send an enquiry here or use WhatsApp.
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

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-3xl bg-white p-6 text-funzi-ink shadow-xl"
        >
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="fullName" required />
            <Field label="Phone number" name="phone" />
            <Field label="Email address" name="email" type="email" required />
            <Field label="Preferred date" name="date" type="date" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField label="Guests" name="guests">
              <option value="">Select guest count</option>
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3-5 guests</option>
              <option>6+ guests</option>
            </SelectField>

            <SelectField label="Experience" name="experience">
              <option value="">Select an experience</option>
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
              required
              maxLength={2000}
              className="rounded-xl border border-slate-200 p-3 outline-none focus:border-funzi-blue"
              placeholder="Tell us more about your plans..."
            />
          </label>

          {status.type !== "idle" && (
            <p
              className={`rounded-xl px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-funzi-sky text-funzi-navy"
                  : "bg-red-50 text-red-700"
              }`}
              role="status"
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-funzi-red px-5 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending enquiry..." : "Send booking enquiry"}
          </button>

          <a
            href="https://wa.me/254726910137?text=Hello%20Funzi%20Beach%20Restaurant%2C%20I%20would%20like%20to%20make%20a%20booking%20enquiry."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-funzi-green px-5 py-3 text-center font-semibold text-white transition hover:bg-green-800"
          >
            Prefer WhatsApp? Book here ↗
          </a>
        </form>
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
        maxLength={type === "email" ? 150 : 100}
        className="rounded-xl border border-slate-200 p-3 outline-none focus:border-funzi-blue"
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
        required
        className="rounded-xl border border-slate-200 bg-white p-3 outline-none focus:border-funzi-blue"
      >
        {children}
      </select>
    </label>
  );
}
