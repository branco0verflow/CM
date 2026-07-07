"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motos, type Moto } from "@/data/motos";
import MotoCard from "./MotoCard";

gsap.registerPlugin(ScrollTrigger);

const CANTIDAD = 6;

// Prioriza motos del mismo estilo, luego misma marca, y completa con el resto.
function elegirSugerencias(actual: Moto): Moto[] {
  const resto = motos.filter((m) => m.id !== actual.id);
  const mismoEstilo = resto.filter((m) => m.estilo === actual.estilo);
  const mismaMarca = resto.filter(
    (m) => m.marca === actual.marca && m.estilo !== actual.estilo
  );
  const otras = resto.filter(
    (m) => m.marca !== actual.marca && m.estilo !== actual.estilo
  );

  return [...mismoEstilo, ...mismaMarca, ...otras].slice(0, CANTIDAD);
}

export default function Sugerencias({ moto }: { moto: Moto }) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const sugeridas = elegirSugerencias(moto);

  function actualizarFlechas() {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    actualizarFlechas();
  }, [sugeridas.length]);

  function desplazar(dir: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }

  useGSAP(
    () => {
      gsap.from(".sugerencias-head > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".sugerencias-head",
          start: "top 88%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".sugerencia-item").forEach((el, i) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: (i % 3) * 0.06,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  if (sugeridas.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[linear-gradient(180deg,#050505_0%,#0C0E0A_100%)] py-13 sm:py-16"
    >
      <div className="container">
        <div className="sugerencias-head mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2
            className="font-display leading-[0.95] tracking-[0.02em] text-white"
            style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}
          >
            Te puede interesar
          </h2>
          <a
            href="/#tienda"
            className="text-[0.86rem] text-[#E8DFC2]/60 transition-colors duration-200 hover:text-gold"
          >
            Ver todo el catálogo →
          </a>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={actualizarFlechas}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 scrollbar-none"
          >
            {sugeridas.map((m) => (
              <div key={m.id} className="sugerencia-item w-70 shrink-0 snap-start sm:w-76">
                <MotoCard moto={m} />
              </div>
            ))}
          </div>

          {canLeft && (
            <button
              type="button"
              onClick={() => desplazar(-1)}
              aria-label="Ver anteriores"
              className="absolute top-1/2 left-2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#D4B21C]/30 bg-black/70 text-[#E8DFC2] backdrop-blur transition-colors duration-200 hover:border-gold hover:text-gold sm:grid"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden>
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {canRight && (
            <button
              type="button"
              onClick={() => desplazar(1)}
              aria-label="Ver siguientes"
              className="absolute top-1/2 right-2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#D4B21C]/30 bg-black/70 text-[#E8DFC2] backdrop-blur transition-colors duration-200 hover:border-gold hover:text-gold sm:grid"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden>
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
