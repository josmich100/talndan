"use client";

import { FormEvent, useState } from "react";
import { serviceOptions, sizeOptions, whatsappLink } from "@/lib/site";

const fieldClass =
  "w-full rounded-lg border border-line bg-paper px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-pine focus:bg-white focus:ring-4 focus:ring-pine/10";

export function QuoteForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const message = [
      "Hello Tal n’ Dan Cleaning Services, I would like a cleaning quote.",
      "",
      `Name: ${value("name")}`,
      `Phone: ${value("phone")}`,
      `Service: ${value("service")}`,
      `Property size: ${value("size")}`,
      `Preferred date: ${value("date") || "Flexible"}`,
      `Location: ${value("location")}`,
      `Details: ${value("details") || "None provided"}`,
    ].join("\n");

    const url = whatsappLink(message);
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (!popup) window.location.href = url;
    setOpened(true);
  }

  return (
    <form className="grid gap-4 rounded-lg bg-white/95 p-5 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:grid-cols-2 sm:p-7" onSubmit={onSubmit}>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
        Your name *
        <input className={fieldClass} name="name" required autoComplete="name" placeholder="Full name" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
        Phone number *
        <input
          className={fieldClass}
          name="phone"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="+254 7xx xxx xxx"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
        Service needed *
        <select className={fieldClass} name="service" required defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
        Property size
        <select className={fieldClass} name="size" defaultValue="Not sure">
          {sizeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
        Preferred date
        <input className={fieldClass} name="date" type="date" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
        Estate / location *
        <input className={fieldClass} name="location" required placeholder="e.g. estate or town" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy sm:col-span-2">
        Anything else we should know?
        <textarea
          className={`${fieldClass} min-h-24 resize-y`}
          name="details"
          placeholder="Rooms, condition, frequency, access details or special requests"
        />
      </label>
      <p className="text-xs leading-relaxed text-muted sm:col-span-2">
        Submitting opens WhatsApp with your request drafted for review. No booking is confirmed
        until the team responds.
      </p>
      {opened ? (
        <p role="status" className="text-sm font-medium text-pine sm:col-span-2">
          WhatsApp opened with your request. Send the message so the team can confirm availability
          and price.
        </p>
      ) : null}
      <button
        type="submit"
        className="btn-pine inline-flex items-center justify-center rounded-lg px-5 py-3.5 text-sm font-semibold sm:col-span-2"
      >
        Send quote request on WhatsApp
      </button>
    </form>
  );
}
