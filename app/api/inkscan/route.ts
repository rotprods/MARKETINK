import { NextResponse } from "next/server";

const allowedFields = [
  "businessType",
  "name",
  "city",
  "instagram",
  "email",
  "constraint",
  "consent",
  "website",
] as const;

export async function POST(request: Request) {
  const form = await request.formData();
  const payload: Record<string, string> = {};

  for (const field of allowedFields) {
    const value = form.get(field);
    if (typeof value === "string") payload[field] = value.trim();
  }

  const honeypot = form.get("company");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.redirect(new URL("/gracias", request.url), 303);
  }

  const maxLength: Record<string, number> = {
    businessType: 20,
    name: 160,
    city: 120,
    instagram: 160,
    email: 254,
    constraint: 1500,
    consent: 8,
    website: 300,
  };

  for (const [key, value] of Object.entries(payload)) {
    if (value.length > (maxLength[key] ?? 500)) {
      return NextResponse.redirect(new URL("/?inkscan=invalid#inkscan", request.url), 303);
    }
  }

  if (
    !payload.businessType ||
    !payload.name ||
    !payload.city ||
    !payload.instagram ||
    !payload.email ||
    payload.consent !== "yes"
  ) {
    return NextResponse.redirect(new URL("/?inkscan=invalid#inkscan", request.url), 303);
  }

  const webhookUrl = process.env.MARKETINK_CRM_WEBHOOK_URL;
  const webhookSecret = process.env.MARKETINK_CRM_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error("INKSCAN webhook is not configured.");
    return NextResponse.redirect(new URL("/?inkscan=unavailable#inkscan", request.url), 303);
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-marketink-secret": webhookSecret,
    },
    body: JSON.stringify({
      ...payload,
      source: "marketink-web",
      capturedAt: new Date().toISOString(),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("INKSCAN webhook failed", response.status);
    return NextResponse.redirect(new URL("/?inkscan=error#inkscan", request.url), 303);
  }

  return NextResponse.redirect(new URL("/gracias", request.url), 303);
}
