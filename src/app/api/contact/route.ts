import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastSubmission = rateLimitMap.get(ip);

  if (lastSubmission && now - lastSubmission < 60000) {
    return true;
  }

  rateLimitMap.set(ip, now);

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    const cutoff = now - 60000;
    for (const [key, timestamp] of rateLimitMap) {
      if (timestamp < cutoff) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    // Parse and validate
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // Log the submission (in production, this would send emails via Resend)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      message: message || "(no message)",
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate Resend email sending when API key is provided
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch {
    console.error("Contact form error");
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
