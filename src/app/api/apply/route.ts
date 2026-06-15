import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      email,
      name,
      platforms,
      subscriberCount,
      revenueRange,
      niche,
      postingCadence,
      socialHandles,
      goals,
      whySinnyr,
    } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const htmlBody = `
      <h2>New Sinnyr Application</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Platforms</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(platforms || "Not provided")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Subscriber Count</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(subscriberCount || "Not provided")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Revenue Range</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(revenueRange || "Not provided")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Niche</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(niche || "Not provided")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Posting Cadence</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(postingCadence || "Not provided")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Social Handles</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(socialHandles || "Not provided")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Goals</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(goals || "Not provided")}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Why Sinnyr</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(whySinnyr || "Not provided")}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: "ceo@36west.org",
        subject: `New Sinnyr Application: ${name}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend error:", errorData);
      return NextResponse.json(
        { error: "Failed to send application." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Application error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
