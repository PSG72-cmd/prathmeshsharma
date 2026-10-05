import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting: max 5 submissions per IP every 10 minutes
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || entry.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, company } = body;

    // Honeypot check: if hidden 'company' field is filled, silently discard bot submission
    if (company && typeof company === "string" && company.trim().length > 0) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (
      typeof name !== "string" ||
      !name.trim() ||
      name.length > 100
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name (maximum 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      typeof email !== "string" ||
      !email.trim() ||
      email.length > 100 ||
      !emailRegex.test(email)
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (
      typeof message !== "string" ||
      !message.trim() ||
      message.length < 5 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please provide a message between 5 and 5000 characters." },
        { status: 400 }
      );
    }

    const sanitizedName = escapeHtml(name.trim());
    const sanitizedEmail = escapeHtml(email.trim());
    const sanitizedMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "prathmeshsharma72@gmail.com";

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Simulating email send in development.");
      return NextResponse.json({
        success: true,
        message: "Message received (dev simulation).",
      });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email.trim(),
      subject: `New portfolio inquiry from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #14171B; max-width: 600px; padding: 24px; border: 1px solid #D8DBDD;">
          <h2 style="margin-top: 0; color: #D35400;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <hr style="border: 0; border-top: 1px solid #D8DBDD; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background: #F5F3EF; padding: 16px; border-radius: 4px; border: 1px solid #D8DBDD;">
            ${sanitizedMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try emailing directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
