import { serviceOptions, sizeOptions } from "@/lib/site";

export type QuoteRequest = {
  name: string;
  phone: string;
  service: string;
  size: string;
  date: string;
  location: string;
  details: string;
};

const services = new Set<string>(serviceOptions);
const sizes = new Set<string>(sizeOptions);

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export function parseQuoteRequest(data: FormData): { ok: true; request: QuoteRequest } | { ok: false; error: string } {
  if (clean(data.get("website"), 80)) {
    return { ok: false, error: "spam" };
  }

  const name = clean(data.get("name"), 80);
  const phone = clean(data.get("phone"), 24);
  const service = clean(data.get("service"), 80);
  const size = clean(data.get("size"), 40) || "Not sure";
  const date = clean(data.get("date"), 10);
  const location = clean(data.get("location"), 120);
  const details = clean(data.get("details"), 1000);
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2) return { ok: false, error: "Enter your name." };
  if (digits.length < 9 || digits.length > 15) return { ok: false, error: "Enter a valid phone number." };
  if (!services.has(service)) return { ok: false, error: "Choose a service." };
  if (!sizes.has(size)) return { ok: false, error: "Choose a property size." };
  if (date && !isDate(date)) return { ok: false, error: "Choose a valid preferred date." };
  if (location.length < 2) return { ok: false, error: "Enter your estate or town." };

  return {
    ok: true,
    request: { name, phone, service, size, date, location, details },
  };
}

function isDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export function quoteMessage(request: QuoteRequest) {
  return [
    "Hello Tal n’ Dan Cleaning Services, I would like a cleaning quote.",
    "",
    `Name: ${request.name}`,
    `Phone: ${request.phone}`,
    `Service: ${request.service}`,
    `Property size: ${request.size}`,
    `Preferred date: ${request.date || "Flexible"}`,
    `Location: ${request.location}`,
    `Details: ${request.details || "None provided"}`,
  ].join("\n");
}
