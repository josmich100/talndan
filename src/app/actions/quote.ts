"use server";

import { sendQuoteEmail } from "@/lib/mail";
import { parseQuoteRequest } from "@/lib/quote-request";

export type QuoteResult = { ok: true } | { ok: false; error: string };

export async function sendQuote(data: FormData): Promise<QuoteResult> {
  const parsed = parseQuoteRequest(data);
  if (!parsed.ok) {
    if (parsed.error === "spam") return { ok: true };
    return parsed;
  }

  try {
    await sendQuoteEmail(parsed.request);
    return { ok: true };
  } catch (error) {
    console.error("Quote email failed", error instanceof Error ? error.message : error);
    return {
      ok: false,
      error: "We could not email your request just now. Send it on WhatsApp instead.",
    };
  }
}
