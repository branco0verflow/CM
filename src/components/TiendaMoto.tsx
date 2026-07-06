"use client";

import { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motos, parsePrecio, formatPrecio } from "@/data/motos";
import MotoCard from "./MotoCard";

gsap.registerPlugin(ScrollTrigger);

const PAGE_SIZE = 9;
const PRECIO_BANDS = Array.from({ length: 6 }, (_, i) => 1500 + i * 3500);

type Orden = "relevancia" | "precio-asc" | "precio-desc" | "recientes";

const ORDEN_OPTIONS: { value: Orden; label: string }[] = [
  { value: "relevancia", label: "Relevancia" },
  { value: "precio-asc", label: "Menor a mayor precio" },
  { value: "precio-desc", label: "Mayor a menor precio" },
  { value: "recientes", label: "Últimos ingresos" },
];

const marcas = Array.from(new Set(motos.map((m) => m.marca))).sort();
const estilos = Array.from(new Set(motos.map((m) => m.estilo))).sort();

const selectClass = `
  rounded-lg border border-[#D4B21C]/20
  bg-[#080A07]/80 px-4 py-2.5
  text-[0.86rem] text-[#E8DFC2]
  outline-none backdrop-blur
  transition-colors duration-200
  hover:border-[#D4B21C]/45
  focus:border-[#D4B21C]/70
`;

const labelClass = "text-[0.68rem] font-semibold tracking-[0.14em] text-[#E8DFC2]/45 uppercase";

export default function TiendaMoto() {
  const sectionRef = useRef<HTMLElement>(null);

  const [marca, setMarca] = useState("todas");
  const [estilo, setEstilo] = useState("todos");
  const [precioMax, setPrecioMax] = useState<number | null>(null);
  const [orden, setOrden] = useState<Orden>("relevancia");
  const [page, setPage] = useState(1);

  const estilosDisponibles = useMemo(() => {
    if (marca === "todas") return estilos;
    return Array.from(
      new Set(motos.filter((m) => m.marca === marca).map((m) => m.estilo))
    ).sort();
  }, [marca]);

  const filtradas = useMemo(() => {
    return motos.filter((m) => {
      if (marca !== "todas" && m.marca !== marca) return false;
      if (estilo !== "todos" && m.estilo !== estilo) return false;
      if (precioMax !== null && parsePrecio(m.precio) > precioMax) return false;
      return true;
    });
  }, [marca, estilo, precioMax]);

  const ordenadas = useMemo(() => {
    const arr = [...filtradas];
    if (orden === "precio-asc") {
      arr.sort((a, b) => parsePrecio(a.precio) - parsePrecio(b.precio));
    } else if (orden === "precio-desc") {
      arr.sort((a, b) => parsePrecio(b.precio) - parsePrecio(a.precio));
    } else if (orden === "recientes") {
      // El id es incremental: el número más alto es el ingreso más nuevo.
      arr.sort((a, b) => Number(b.id) - Number(a.id));
    }
    return arr;
  }, [filtradas, orden]);

  const totalPages = Math.max(1, Math.ceil(ordenadas.length / PAGE_SIZE));
  const visibles = ordenadas.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const hayFiltros =
    marca !== "todas" || estilo !== "todos" || precioMax !== null || orden !== "relevancia";

  function limpiarFiltros() {
    setMarca("todas");
    setEstilo("todos");
    setPrecioMax(null);
    setOrden("relevancia");
    setPage(1);
  }

  function handleMarca(nuevaMarca: string) {
    setMarca(nuevaMarca);
    const disponibles =
      nuevaMarca === "todas"
        ? estilos
        : Array.from(new Set(motos.filter((m) => m.marca === nuevaMarca).map((m) => m.estilo)));
    if (estilo !== "todos" && !disponibles.includes(estilo)) {
      setEstilo("todos");
    }
    setPage(1);
  }

  useGSAP(
    () => {
      gsap.from(".tienda-head > *", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tienda-head",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".tienda-item").forEach((el, i) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: (i % 3) * 0.06,
        });
      });
    },
    { scope: sectionRef, dependencies: [marca, estilo, precioMax, orden, page] }
  );

  return (
    <section
      ref={sectionRef}
      id="tienda"
      className="
    relative
    overflow-hidden
    py-13 sm:py-24 lg:py-13
    bg-[linear-gradient(180deg,#10130D_0%,#0C0E0A_55%,#050505_100%)]
  "
    >
      <div className="container relative z-10">
        <div className="tienda-head mb-9 max-w-155 sm:mb-11">
          <span className="mb-3 inline-block text-[0.72rem] tracking-[0.24em] text-gold uppercase">
            Catálogo completo
          </span>

          <h2
            className="font-display leading-[0.95] tracking-[0.02em] text-white"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            Nuestras motos
          </h2>

          <span className="mt-4 block h-0.75 w-14 bg-gold" />

          <p className="mt-4.5 text-[1.02rem] leading-relaxed text-[#E8DFC2]/60">
            Filtrá por marca, estilo y precio para encontrar tu próxima
            máquina.
          </p>
        </div>

        <div className="mb-10 rounded-xl border border-[#D4B21C]/15 bg-black/25 p-4 backdrop-blur sm:p-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filtro-marca" className={labelClass}>
                Marca
              </label>
              <select
                id="filtro-marca"
                value={marca}
                onChange={(e) => handleMarca(e.target.value)}
                className={selectClass}
              >
                <option value="todas">Todas las marcas</option>
                {marcas.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="filtro-estilo" className={labelClass}>
                Estilo
              </label>
              <select
                id="filtro-estilo"
                value={estilo}
                onChange={(e) => {
                  setEstilo(e.target.value);
                  setPage(1);
                }}
                className={`${selectClass} capitalize`}
              >
                <option value="todos">Todos los estilos</option>
                {estilosDisponibles.map((e) => (
                  <option key={e} value={e} className="capitalize">
                    {e.charAt(0) + e.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="filtro-precio" className={labelClass}>
                Precio
              </label>
              <select
                id="filtro-precio"
                value={precioMax ?? "todos"}
                onChange={(e) => {
                  setPrecioMax(
                    e.target.value === "todos" ? null : Number(e.target.value)
                  );
                  setPage(1);
                }}
                className={selectClass}
              >
                <option value="todos">Todos los precios</option>
                {PRECIO_BANDS.map((v) => (
                  <option key={v} value={v}>
                    Hasta {formatPrecio(v)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="filtro-orden" className={labelClass}>
                Ordenar por
              </label>
              <select
                id="filtro-orden"
                value={orden}
                onChange={(e) => {
                  setOrden(e.target.value as Orden);
                  setPage(1);
                }}
                className={selectClass}
              >
                {ORDEN_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {hayFiltros && (
              <button
                type="button"
                onClick={limpiarFiltros}
                className="pb-2.5 text-[0.86rem] font-semibold text-gold underline-offset-2 hover:underline"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="mt-4 border-t border-white/5 pt-4">
            <span className="text-[0.86rem] text-[#E8DFC2]/55">
              {ordenadas.length}{" "}
              {ordenadas.length === 1 ? "moto encontrada" : "motos encontradas"}
            </span>
          </div>
        </div>

        {visibles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((moto) => (
              <div className="tienda-item min-w-0" key={moto.id}>
                <MotoCard moto={moto} />
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-dashed border-[#D4B21C]/25 bg-black/20 py-16 text-center text-[0.95rem] text-[#E8DFC2]/60">
            No encontramos motos con estos filtros.
          </p>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="
                rounded-lg border border-[#D4B21C]/20 bg-black/20
                px-3 py-2 text-[0.86rem] text-[#E8DFC2]
                transition-colors duration-200
                hover:border-[#D4B21C]/60
                disabled:cursor-not-allowed disabled:opacity-40
              "
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={
                  n === page
                    ? "h-9 w-9 rounded-lg bg-[#D4B21C] text-[0.86rem] font-semibold text-[#080808]"
                    : "h-9 w-9 rounded-lg border border-[#D4B21C]/20 bg-black/20 text-[0.86rem] text-[#E8DFC2] transition-colors duration-200 hover:border-[#D4B21C]/60"
                }
              >
                {n}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="
                rounded-lg border border-[#D4B21C]/20 bg-black/20
                px-3 py-2 text-[0.86rem] text-[#E8DFC2]
                transition-colors duration-200
                hover:border-[#D4B21C]/60
                disabled:cursor-not-allowed disabled:opacity-40
              "
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
