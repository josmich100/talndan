"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "talndan-install-dismissed";

export function Pwa() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [iosHint, setIosHint] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }

    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    if (standalone) return;
    if (window.localStorage.getItem(DISMISS_KEY) === "1") return;

    function onPrompt(event: Event) {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    }

    window.addEventListener("beforeinstallprompt", onPrompt);

    const ios = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
    const iosStandalone =
      "standalone" in window.navigator &&
      Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone);
    if (ios && !iosStandalone) setIosHint(true);

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  function dismiss() {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setInstallEvent(null);
    setIosHint(false);
  }

  async function install() {
    if (!installEvent) return;
    await installEvent.prompt();
    const choice = await installEvent.userChoice;
    if (choice.outcome === "accepted") dismiss();
    setInstallEvent(null);
  }

  if (!installEvent && !iosHint) return null;

  return (
    <div className="fixed bottom-20 left-4 right-20 z-30 rounded-xl border border-white/80 bg-white/95 p-3 text-navy shadow-[0_16px_40px_rgba(20,43,59,0.16)] backdrop-blur-md sm:right-auto sm:max-w-sm">
      <p className="text-sm font-semibold">Install Tal n’ Dan</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">
        {installEvent
          ? "Add the app to your home screen and open quotes in one tap."
          : "Tap Share, then Add to Home Screen."}
      </p>
      <div className="mt-3 flex gap-2">
        {installEvent ? (
          <button type="button" onClick={install} className="btn-pine rounded-lg px-3 py-2 text-xs font-semibold">
            Install
          </button>
        ) : null}
        <button
          type="button"
          onClick={dismiss}
          className="rounded-lg px-3 py-2 text-xs font-semibold text-navy/70"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
