"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionBoot() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const id = window.setTimeout(refresh, 500);
    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(id);
    };
  }, []);

  return null;
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = root.current?.querySelectorAll("[data-reveal]");
      if (!items?.length) return;

      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(items, {
          y: 36,
          opacity: 0,
          duration: 0.85,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 86%",
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
