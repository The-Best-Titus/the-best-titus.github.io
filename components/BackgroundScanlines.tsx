"use client";

import { useEffect, useRef } from "react";

/**
 * BackgroundScanlines renders horizontal scanline texture lines
 * that smoothly dissipate and fade out as the user scrolls down the page.
 */
export default function BackgroundScanlines() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const scrollY = window.scrollY;
            // Fully dissipates over the first 350px of scroll
            const opacity = Math.max(0, 1 - scrollY / 350);
            ref.current.style.opacity = String(opacity);
            ref.current.style.display = opacity === 0 ? "none" : "block";
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="scanline-overlay"
      aria-hidden="true"
    />
  );
}
