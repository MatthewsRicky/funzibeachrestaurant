"use server";

import { Resend } from "resend";

type BookingEnquiry = {
  fullName: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  experience: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendBookingEnquiry(enquiry: BookingEnquiry) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    return {
      success: false,
      error: "Booking email is not configured yet.",
    };
  }

  const resend = new Resend(apiKey);

  const text = `
New Funzi Beach Restaurant booking enquiry

Name: ${enquiry.fullName}
Email: ${enquiry.email}
Phone: ${enquiry.phone || "Not provided"}
Guests: ${enquiry.guests}
Preferred date: ${enquiry.date || "Flexible"}
Experience: ${enquiry.experience}

Message:
${enquiry.message}
  `.trim();

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: enquiry.email,
    subject: `Funzi booking: ${enquiry.experience} - ${enquiry.fullName}`,
    text,
    html: `
      <h1>New Funzi Beach Restaurant booking enquiry</h1>
      <p><strong>Name:</strong> ${escapeHtml(enquiry.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone || "Not provided")}</p>
      <p><strong>Guests:</strong> ${escapeHtml(enquiry.guests)}</p>
      <p><strong>Preferred date:</strong> ${escapeHtml(enquiry.date || "Flexible")}</p>
      <p><strong>Experience:</strong> ${escapeHtml(enquiry.experience)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(enquiry.message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Resend booking email error:", error);

    return {
      success: false,
      error: "We could not send your enquiry. Please try WhatsApp instead.",
    };
  }

  return { success: true, data };
}
