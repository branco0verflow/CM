"use client";

import { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { equipo, type Equipo } from "@/data/equipo";
import EquipoCard from "./EquipoCard";
import SafeImage from "./SafeImage";

gsap.registerPlugin(ScrollTrigger);

type CategoriaFiltro = Equipo["categoria"] | "todas";

// Reemplazá cada `icono` por el ícono real en /public/iconos/
const CATEGORIAS: { value: Equipo["categoria"]; label: string; icono: string }[] = [
  { value: "Cascos", label: "Cascos", icono: "/iconos/casco.png" },
  { value: "Camperas", label: "Camperas", icono: "/iconos/chaqueta.png" },
  { value: "Guantes", label: "Guantes", icono: "/iconos/guantes.png" },
  { value: "Botas", label: "Botas", icono: "/iconos/botas.png" },
  { value: "Pantalones", label: "Pantalones", icono: "/iconos/pantalones.png" },
  { value: "Protecciones", label: "Protecciones", icono: "/iconos/pro.png" },
  { value: "Accesorios", label: "Accesorios", icono: "/iconos/accesorios.png" },
];

export default function TiendaEquipamiento() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaFiltro>("todas");

  const filtrados = useMemo(() => {
    if (categoriaActiva === "todas") return equipo;
    return equipo.filter((e) => e.categoria === categoriaActiva);
  }, [categoriaActiva]);

  function seleccionarCategoria(cat: CategoriaFiltro) {
    setCategoriaActiva(cat);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useGSAP(
    () => {
      gsap.from(".equipo-hero-head > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".equipo-hero-head",
          start: "top 90%",
        },
      });

      gsap.from(".equipo-head > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".equipo-head",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".equipo-item").forEach((el, i) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: (i % 3) * 0.06,
        });
      });
    },
    { scope: sectionRef, dependencies: [categoriaActiva] }
  );

  return (
    <section ref={sectionRef} id="equipamiento" className="relative">
      {/* Hero */}
      <div className="relative h-[74vh] min-h-140 w-full overflow-hidden">
        {/* Imagen nítida de base */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-equipamiento.png')" }}
        />
        {/* Misma imagen, difuminada, que se revela hacia abajo para que la foto "termine" en un desenfoque suave */}
        <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-2xl"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 35%, black 100%)",
            maskImage: "linear-gradient(to bottom, transparent 35%, black 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,4,0.3)_0%,rgba(5,7,4,0.45)_50%,rgba(5,7,4,0.95)_100%)]" />

        <div className="equipo-hero-head container relative z-10 flex h-full flex-col items-center justify-end gap-8 pb-12 text-center sm:pb-16">
          <h2
            className="font-display uppercase leading-[0.95] tracking-[0.02em] text-white"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)", textShadow: "0 6px 30px rgba(0,0,0,0.5)" }}
          >
            Tu estilo acá
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => seleccionarCategoria("todas")}
              className={
                "flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-2 text-[0.8rem] font-bold tracking-wide uppercase transition-all duration-200 sm:h-28 sm:w-28 lg:h-32 lg:w-32 " +
                (categoriaActiva === "todas"
                  ? "border-gold bg-gold text-ink"
                  : "border-white/20 bg-black/40 text-white backdrop-blur hover:border-white/50")
              }
            >
              Todo
            </button>

            {CATEGORIAS.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => seleccionarCategoria(cat.value)}
                className={
                  "group relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-200 sm:h-28 sm:w-28 lg:h-32 lg:w-32 " +
                  (categoriaActiva === cat.value
                    ? "border-gold shadow-[0_0_0_3px_rgba(212,178,28,0.3)]"
                    : "border-white/20 hover:border-white/50")
                }
              >
                <SafeImage
                  src={cat.icono}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  fallback={<span className="absolute inset-0 bg-black/50" aria-hidden />}
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35%,rgba(0,0,0,0.9)_100%)]" />
                <span className="absolute inset-x-0 bottom-0 px-2 pb-2.5 text-[0.72rem] font-bold tracking-wide text-white uppercase sm:text-[0.8rem]">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catálogo */}
      <div
        ref={gridRef}
        className="relative bg-[linear-gradient(180deg,#10130D_0%,#0C0E0A_55%,#050505_100%)] py-13 sm:py-20"
      >
        <div className="container">
          <div className="equipo-head mb-9 flex flex-wrap items-end justify-between gap-4 sm:mb-11">
            <div className="max-w-155">
              <span className="mb-3 inline-block text-[0.72rem] tracking-[0.24em] text-gold uppercase">
                Catálogo de equipamiento
              </span>
              <h3
                className="font-display leading-[0.95] tracking-[0.02em] text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}
              >
                Indumentaria para moto
              </h3>
              <span className="mt-4 block h-0.75 w-14 bg-gold" />
            </div>

            <span className="text-[0.86rem] text-[#E8DFC2]/55">
              {filtrados.length}{" "}
              {filtrados.length === 1 ? "producto" : "productos"}
              {categoriaActiva !== "todas" ? ` en ${categoriaActiva}` : ""}
            </span>
          </div>

          {filtrados.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((item) => (
                <div className="equipo-item min-w-0" key={item.id}>
                  <EquipoCard equipo={item} />
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-dashed border-[#D4B21C]/25 bg-black/20 py-16 text-center text-[0.95rem] text-[#E8DFC2]/60">
              No encontramos productos en esta categoría.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
