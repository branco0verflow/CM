"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const acciones = [
  { label: "Motos", href: "#destacados" },
  { label: "Equipamientos", href: "/equipamiento" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-btn", { y: 24, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.4");
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative grid h-[50vh] min-h-90 w-full place-items-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_50%_20%,var(--color-olive)_0%,var(--color-olive-deep)_45%,var(--color-olive-darker)_100%)] object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/videos/Lola-h264.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0" />

      <div className="relative z-2 flex flex-col items-center gap-2.5 px-5 text-center">
        <span className="hero-eyebrow text-[0.72rem] tracking-[0.28em] text-gold uppercase">
          Historia sobre dos ruedas · 1956
        </span>
        <h1
          className="hero-title font-display text-cream uppercase leading-[0.95] tracking-[0.02em]"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            textShadow: "0 6px 30px rgba(0,0,0,0.5)",
          }}
        >
          Elegí tu próxima máquina
        </h1>

        <div className="mt-5.5 flex flex-col flex-wrap justify-center gap-3.5 sm:flex-row">
          {acciones.map((a, i) => (
            <a
              key={a.label}
              href={a.href}
              className={
                i === 0
                  ? "hero-btn inline-flex items-center justify-center gap-2.5 rounded-lg border border-transparent bg-cream px-6 py-3.25 text-[0.95rem] font-semibold tracking-[0.01em] text-ink transition-colors duration-200 hover:bg-gold focus-visible:outline-2 focus-visible:outline-gold-bright focus-visible:outline-offset-2"
                  : "hero-btn inline-flex items-center justify-center gap-2.5 rounded-lg border border-cream/40 bg-transparent px-6 py-3.25 text-[0.95rem] font-semibold tracking-[0.01em] text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/12 focus-visible:outline-2 focus-visible:outline-gold-bright focus-visible:outline-offset-2"
              }
            >
              <span>{a.label}</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
