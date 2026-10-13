"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function CopyrightYear() {
  return useSyncExternalStore(
    subscribe,
    () => String(new Date().getFullYear()),
    () => "2026",
  );
}
