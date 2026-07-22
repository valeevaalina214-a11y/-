"use client";

import { useEffect, useRef } from "react";

/**
 * Minimal star-shaped custom cursor.
 * - Only activates on fine-pointer (mouse) devices; touch/mobile keep the native cursor.
 * - Smooth follow via requestAnimationFrame lerp (skipped for prefers-reduced-motion).
 * - Grows + glows over interactive elements; shrinks on press.
 * - The star is centred on the real pointer, so the click point stays accurate.
 */
export function StarCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el) return;

    document.documentElement.classList.add("cursor-star");
    el.style.opacity = "0";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;
    let shown = false;

    const render = () => {
      // Lerp toward the target for a smooth trail; snap when reduced motion.
      x += (tx - x) * (reduce ? 1 : 0.25);
      y += (ty - y) * (reduce ? 1 : 0.25);
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        el.style.opacity = "1";
      }
      const interactive = (e.target as Element | null)?.closest(
        'a, button, input, textarea, select, [role="button"], label',
      );
      el.classList.toggle("is-hover", !!interactive);
    };
    const down = () => el.classList.add("is-down");
    const up = () => el.classList.remove("is-down");
    const leave = () => (el.style.opacity = "0");
    const enter = () => (el.style.opacity = "1");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.documentElement.classList.remove("cursor-star");
    };
  }, []);

  return (
    <div ref={ref} className="star-cursor" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z" />
      </svg>
    </div>
  );
}
