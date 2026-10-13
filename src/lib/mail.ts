import nodemailer from "nodemailer";
import { quoteMessage, type QuoteRequest } from "@/lib/quote-request";

export async function sendQuoteEmail(request: QuoteRequest) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;
  const to = process.env.QUOTE_TO || user;
  const port = Number(process.env.SMTP_PORT || 587);

  if (!host || !user || !pass || !from || !to || !Number.isInteger(port)) {
    throw new Error("SMTP is not configured");
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  await transport.sendMail({
    from,
    to,
    subject: `Cleaning quote request from ${request.name}`,
    text: quoteMessage(request),
  });
}
