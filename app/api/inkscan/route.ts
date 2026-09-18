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

const maxLength: Record<(typeof allowedFields)[number], number> = {
  businessType: 20,
  name: 160,
  city: 120,
  instagram: 160,
  email: 254,
  constraint: 1500,
  consent: 8,
  website: 300,
};

export async function POST(request: Request) {
  const form = await request.formData();
  const payload: Partial<Record<(typeof allowedFields)[number], string>> = {};

  for (const field of allowedFields) {
    const value = form.get(field);
    if (typeof value === "string") {
      const normalized = value.trim();
      if (normalized.length > maxLength[field]) {
        return NextResponse.redirect(
          new URL("/?inkscan=invalid#inkscan", request.url),
          303,
        );
      }
      payload[field] = normalized;
    }
  }

  const honeypot = form.get("company");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.redirect(new URL("/gracias", request.url), 303);
  }

  if (
    !payload.businessType ||
    !["studio", "artist"].includes(payload.businessType) ||
    !payload.name ||
    !payload.city ||
    !payload.instagram ||
    !payload.email ||
    payload.consent !== "yes"
  ) {
    return NextResponse.redirect(
      new URL("/?inkscan=invalid#inkscan", request.url),
      303,
    );
  }

  const supabaseUrl = process.env.MARKETINK_SUPABASE_URL;
  const supabaseSecretKey = process.env.MARKETINK_SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    console.error("MARKET.INK CRM integration is not configured.");
    return NextResponse.redirect(
      new URL("/?inkscan=unavailable#inkscan", request.url),
      303,
    );
  }

  const response = await fetch(
    `${supabaseUrl.replace(/\/$/, "")}/rest/v1/rpc/marketink_capture_web_inkscan`,
    {
      method: "POST",
      headers: {
        apikey: supabaseSecretKey,
        Authorization: `Bearer ${supabaseSecretKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        p_business_type: payload.businessType,
        p_name: payload.name,
        p_city: payload.city,
        p_instagram: payload.instagram,
        p_email: payload.email,
        p_website: payload.website || null,
        p_constraint_text: payload.constraint || null,
        p_source: "marketink-web-awards-v2",
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    console.error("MARKET.INK CRM RPC failed", response.status);
    return NextResponse.redirect(
      new URL("/?inkscan=error#inkscan", request.url),
      303,
    );
  }

  const rpcResult: unknown = await response.json().catch(() => null);
  const first =
    Array.isArray(rpcResult) && rpcResult.length > 0
      ? (rpcResult[0] as Record<string, unknown>)
      : null;

  if (
    !first ||
    typeof first.intake_id !== "string" ||
    typeof first.prospect_id !== "string"
  ) {
    console.error("MARKET.INK CRM RPC returned an invalid response.");
    return NextResponse.redirect(
      new URL("/?inkscan=error#inkscan", request.url),
      303,
    );
  }

  return NextResponse.redirect(new URL("/gracias", request.url), 303);
}
