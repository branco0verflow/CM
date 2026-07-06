"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motos } from "@/data/motos";
import MotoCard from "./MotoCard";

gsap.registerPlugin(ScrollTrigger);

export default function Destacados() {
  const sectionRef = useRef<HTMLElement>(null);
  const destacadas = motos.filter((moto) => moto.destacado);

  useGSAP(
    () => {
      gsap.from(".destacados-head > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".destacados-head",
          start: "top 85%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".destacados-item").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: (i % 3) * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="destacados"
      className="relative bg-black py-13 sm:py-24 lg:py-13"
    >
      <div className="container">
        <div className="destacados-head mb-9 max-w-155 sm:mb-15">
          <span className="mb-3 inline-block text-[0.72rem] tracking-[0.24em] text-gold uppercase">
            Selección de la casa
          </span>
          <h2
            className="font-display text-white leading-[0.95] tracking-[0.02em]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            Destacados
          </h2>
          <span className="mt-4 block h-0.75 w-14 bg-gold" />
          <p className="mt-4.5 text-[1.02rem] leading-relaxed">
            Modelos que salen del showroom con historia. Consultá disponibilidad
            y financiación.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destacadas.map((moto) => (
            <div className="destacados-item min-w-0" key={moto.id}>
              <MotoCard moto={moto} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
