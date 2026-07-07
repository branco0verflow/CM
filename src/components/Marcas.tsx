"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Reemplazá cada `imagen` por el logo real en /public/marcas/
const marcas = [
  { nombre: "Triumph", imagen: "images/marcas/m1.png" },
  { nombre: "Yamaha", imagen: "images/marcas/m2.png" },
  { nombre: "Honda", imagen: "images/marcas/m3.png" },
  { nombre: "KTM", imagen: "images/marcas/m4.png" },
  { nombre: "Kawasaki", imagen: "images/marcas/m5.png" },
  { nombre: "Ducati", imagen: "images/marcas/m6.png" },
  { nombre: "Suzuki", imagen: "images/marcas/m7.png" },
  { nombre: "Ferrari", imagen: "images/marcas/m8.png" },
  { nombre: "Porsche", imagen: "images/marcas/m9.png" },
  { nombre: "Lamborghini", imagen: "images/marcas/m10.png" },
  { nombre: "McLaren", imagen: "images/marcas/m11.png" },
  { nombre: "Aston Martin", imagen: "images/marcas/m12.png" },
  { nombre: "Mercedes", imagen: "images/marcas/m13.png" },
  { nombre: "BMW", imagen: "images/marcas/m14.png" },
];

// Duplicado para el loop continuo
const track = [...marcas, ...marcas];

export default function Marcas() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".marcas-wrap", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".marcas-wrap",
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="
    relative
    overflow-hidden
  "
>
      <div className="marcas-wrap relative w-full overflow-hidden py-0">
        <div
          className="
  pointer-events-none
  absolute
  inset-y-0
  left-0
  z-20
  w-[clamp(80px,12vw,220px)]
  bg-[linear-gradient(90deg,#10130D_0%,rgba(16,19,13,0.95)_30%,rgba(16,19,13,0)_100%)]
  "
        />
        <div
          className="
  pointer-events-none
  absolute
  inset-y-0
  right-0
  z-20
  w-[clamp(80px,12vw,220px)]
  bg-[linear-gradient(270deg,#10130D_0%,rgba(16,19,13,0.95)_30%,rgba(16,19,13,0)_100%)]
  "
        />

        <div className="flex w-max animate-marquee will-change-transform">
          {track.map((marca, i) => (
            <div
              className="group relative mx-[clamp(31px,5.2vw,62px)] flex h-[clamp(55px,7.3vw,79px)] w-[clamp(125px,16.6vw,187px)] shrink-0 items-center justify-center"
              key={`${marca.nombre}-${i}`}
            >
              <img
                className="relative z-1 max-h-full max-w-full object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                src={marca.imagen}
                alt={marca.nombre}
                draggable={false}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
