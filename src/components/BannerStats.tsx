"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { value: 30, suffix: "+", label: "Años de experiencia", large: false },
  { value: 3000, suffix: "+", label: "Motos vendidas", large: true },
  { value: 10, suffix: "", label: "Marcas oficiales", large: false },
  { value: 200, suffix: "+", label: "Unidades en stock", large: false },
];

function formatDisplay(val: number, large: boolean): string {
  if (large && val >= 1000) {
    return Math.round(val)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return Math.round(val).toString();
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".stat-item", {
        opacity: 0,
        y: 18,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          once: true,
        },
      });

      const numbers =
        sectionRef.current?.querySelectorAll<HTMLElement>(".stat-number");

      numbers?.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        const isLarge = el.getAttribute("data-large") === "true";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: isLarge ? 2.4 : 1.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate() {
            el.textContent = formatDisplay(obj.val, isLarge);
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-5 lg:py-2"
    >
      <div className="pointer-events-none absolute inset-0" />

      <div className="container relative mx-auto px-5">
        <div className="px-4 py-5 lg:px-8 lg:py-6">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:divide-x lg:divide-cream/10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-item flex flex-col items-center px-4 text-center"
              >
                <div className="mb-2 h-px w-8 bg-gold/70" />

                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className="stat-number font-extrabold leading-none tracking-tight text-cream tabular-nums"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.65rem)",
                      fontFamily: "var(--font-outfit)",
                    }}
                    data-target={s.value}
                    data-large={s.large}
                  >
                    0
                  </span>

                  {s.suffix && (
                    <span
                      className="font-bold leading-none tracking-tight text-gold"
                      style={{
                        fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {s.suffix}
                    </span>
                  )}
                </div>

                <p className="mt-2 max-w-32 text-[0.68rem] font-medium uppercase leading-snug tracking-[0.16em] text-cream-dim">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}