import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      /* Step 1 */
      creatorName,
      email,
      contactMethod,
      contactHandle,
      /* Step 2 */
      onOnlyFans,
      onlyFansUrl,
      otherPlatforms,
      instagramHandle,
      instagramFollowers,
      tiktokHandle,
      tiktokFollowers,
      twitterHandle,
      twitterFollowers,
      redditUsername,
      redditAdultSubs,
      otherSocials,
      /* Step 3 */
      experience,
      subscriberCount,
      earnings,
      niche,
      postingCadence,
      chattingSetup,
      /* Step 4 */
      goals,
      biggestChallenge,
      commitment,
      hoursPerWeek,
      priorAgency,
      priorAgencyDetail,
      /* Step 5 */
      whySinnyr,
      ownsAccounts,
      readyForSystem,
      callAvailability,
    } = body;

    if (!email || !creatorName) {
      return NextResponse.json(
        { error: "Email and creator name are required." },
        { status: 400 }
      );
    }

    if (!whySinnyr || !whySinnyr.trim()) {
      return NextResponse.json(
        { error: "The 'Why Sinnyr' response is required." },
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

    /* Build grouped HTML email */
    const h = escapeHtml;
    const row = (label: string, value: string | undefined) =>
      `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap;color:#333">${h(label)}</td><td style="padding:6px 12px;color:#555">${h(value || "Not provided")}</td></tr>`;

    const sectionHeader = (title: string) =>
      `<tr><td colspan="2" style="padding:16px 0 6px;font-size:16px;font-weight:700;border-bottom:2px solid #ED2100;color:#15110D">${h(title)}</td></tr>`;

    const platformList = Array.isArray(otherPlatforms)
      ? otherPlatforms.join(", ")
      : otherPlatforms || "";
    const nicheList = Array.isArray(niche) ? niche.join(", ") : niche || "";
    const goalList = Array.isArray(goals) ? goals.join(", ") : goals || "";

    const socialLines: string[] = [];
    if (instagramHandle)
      socialLines.push(
        `Instagram: ${instagramHandle}${instagramFollowers ? ` (${instagramFollowers})` : ""}`
      );
    if (tiktokHandle)
      socialLines.push(
        `TikTok: ${tiktokHandle}${tiktokFollowers ? ` (${tiktokFollowers})` : ""}`
      );
    if (twitterHandle)
      socialLines.push(
        `X/Twitter: ${twitterHandle}${twitterFollowers ? ` (${twitterFollowers})` : ""}`
      );
    if (redditUsername)
      socialLines.push(
        `Reddit: ${redditUsername}${redditAdultSubs ? ` (${redditAdultSubs})` : ""}`
      );
    if (otherSocials) socialLines.push(`Other: ${otherSocials}`);
    const socialsFormatted =
      socialLines.length > 0
        ? socialLines.join("<br/>")
        : "Not provided";

    const htmlBody = `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px">
        <h2 style="color:#15110D;margin-bottom:4px">New Application: ${h(creatorName)}</h2>
        <p style="color:#6E665C;margin-top:0">${h(email)}</p>
        <table style="border-collapse:collapse;width:100%">
          ${sectionHeader("Start Here")}
          ${row("Creator name", creatorName)}
          ${row("Email", email)}
          ${row("Best contact", contactMethod ? `${contactMethod}${contactHandle ? `: ${contactHandle}` : ""}` : undefined)}

          ${sectionHeader("Platforms")}
          ${row("On OnlyFans", onOnlyFans)}
          ${onOnlyFans === "Yes" ? row("OnlyFans URL", onlyFansUrl) : ""}
          ${row("Other platforms", platformList)}
          <tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;white-space:nowrap;color:#333">Socials</td><td style="padding:6px 12px;color:#555">${socialsFormatted}</td></tr>

          ${sectionHeader("Where They Are Now")}
          ${row("Experience", experience)}
          ${row("OF subscribers", subscriberCount)}
          ${row("Monthly earnings", earnings)}
          ${row("Niche / style", nicheList)}
          ${row("Posting cadence", postingCadence)}
          ${row("Chatting / sales", chattingSetup)}

          ${sectionHeader("Goals")}
          ${row("Wants from mgmt", goalList)}
          ${row("Biggest challenge", biggestChallenge)}
          ${row("Commitment", commitment)}
          ${row("Hours / week", hoursPerWeek)}
          ${row("Prior agency", priorAgency)}
          ${priorAgency === "Yes" ? row("Agency detail", priorAgencyDetail) : ""}

          ${sectionHeader("Why Sinnyr")}
          ${row("Why Sinnyr", whySinnyr)}
          ${row("Owns accounts", ownsAccounts)}
          ${row("Ready for system", readyForSystem)}
          ${row("Call availability", callAvailability)}
        </table>
      </div>
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
        subject: `New Sinnyr Application: ${creatorName} (${email})`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend error:", errorData);
      return NextResponse.json(
        { error: "Failed to send application. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Application error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
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
