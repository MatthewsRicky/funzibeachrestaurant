import { NextResponse } from "next/server";
import { sendBookingEnquiry } from "@/app/actions/contact";
import { validateString } from "@/lib/validation";

type BookingPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  guests?: unknown;
  date?: unknown;
  experience?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingPayload;

    // Simple anti-spam honeypot. Real visitors never see or fill this field.
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ success: true });
    }

    const enquiry = {
      fullName: String(body.fullName ?? "").trim(),
      email: String(body.email ?? "").trim(),
      phone: String(body.phone ?? "").trim(),
      guests: String(body.guests ?? "").trim(),
      date: String(body.date ?? "").trim(),
      experience: String(body.experience ?? "").trim(),
      message: String(body.message ?? "").trim(),
    };

    if (
      !validateString(enquiry.fullName, 100) ||
      !validateString(enquiry.email, 150) ||
      !emailPattern.test(enquiry.email) ||
      !validateString(enquiry.guests, 50) ||
      !validateString(enquiry.experience, 100) ||
      !validateString(enquiry.message, 2000)
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide your name, a valid email, guest count, experience, and message.",
        },
        { status: 400 },
      );
    }

    if (enquiry.phone && !validateString(enquiry.phone, 40)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    const result = await sendBookingEnquiry(enquiry);

    return NextResponse.json(result, {
      status: result.success ? 200 : 500,
    });
  } catch (error) {
    console.error("Funzi contact route error:", error);

    return NextResponse.json(
      { success: false, error: "Invalid booking form submission." },
      { status: 400 },
    );
  }
}
