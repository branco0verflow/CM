"use client";

import { useState } from "react";
import Link from "next/link";
import type { Moto } from "@/data/motos";
import SafeImage from "./SafeImage";
import ModalLead from "./ModalLead";

export default function MotoDetail({ moto }: { moto: Moto }) {
  const galeria = Array.from(new Set([moto.imagenPrincipal, ...moto.otrasImagenes]));
  const [activeImage, setActiveImage] = useState(moto.imagenPrincipal);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const specs = [
    { label: "Motor", value: moto.especificaciones.motor },
    { label: "Chasis", value: moto.especificaciones.chasis },
    { label: "Dimensiones", value: moto.especificaciones.dimensiones },
  ];

  const placeholder = <span className="absolute inset-0" aria-hidden />;

  return (
    <section className="relative bg-[linear-gradient(180deg,#10130D_0%,#0C0E0A_55%,#050505_100%)] py-8 sm:py-10">
      <div className="container">
        <Link
          href="/#tienda"
          className="mb-8 inline-flex items-center gap-2 text-[0.86rem] transition-colors duration-200 hover:text-gold"
        >
          ← Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Galería */}
          <div>
            <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-white">
              <SafeImage
                src={activeImage}
                alt={`${moto.marca} ${moto.modelo}`}
                className="absolute inset-0 h-full w-full object-cover"
                fallback={placeholder}
                loading="eager"
              />
              <span className="absolute top-3 left-3 z-2 rounded bg-gold px-2.5 py-1.25 text-[0.68rem] font-bold tracking-[0.08em] text-ink uppercase">
                {moto.estilo}
              </span>
            </div>

            {galeria.length > 1 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {galeria.map((img) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={
                      "relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border transition-colors duration-200 " +
                      (activeImage === img
                        ? "border-gold"
                        : "border-blue-300 hover:border-white")
                    }
                  >
                    <SafeImage
                      src={img}
                      alt={`${moto.marca} ${moto.modelo}`}
                      className="absolute inset-0 h-full w-full object-cover"
                      fallback={<span className="absolute inset-0" aria-hidden />}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <span className="text-[0.72rem] tracking-[0.24em] text-gold uppercase">
              {moto.marca}
            </span>
            <h1
              className="font-display leading-[0.95] tracking-[0.02em] text-white"
              style={{ fontSize: "clamp(2.6rem, 5vw, 3.8rem)" }}
            >
              {moto.modelo}
            </h1>
            <p className="mt-1 text-[1rem]">{moto.version}</p>

            <p className="mt-5 font-display text-[2rem] tracking-[0.02em] text-white">
              {moto.precio}
            </p>

            <p className="mt-5 max-w-125 text-[1rem] leading-relaxed">
              {moto.descripcion}
            </p>

            {moto.colores.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-3 text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                  Colores disponibles
                </h2>
                <div className="flex flex-wrap gap-4">
                  {moto.colores.map((color) => (
                    <button
                      key={color.nombre}
                      type="button"
                      onClick={() => {
                        setActiveColor(color.nombre);
                        setActiveImage(color.imagenPrincipalColor);
                      }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <span
                        className={
                          "relative h-12 w-12 overflow-hidden rounded-full border-2 transition-colors duration-200 " +
                          (activeColor === color.nombre
                            ? "border-gold"
                            : "border-emerald-800/60 hover:border-emerald-600")
                        }
                      >
                        <SafeImage
                          src={color.imagenPrincipalColor}
                          alt={color.nombre}
                          className="absolute inset-0 h-full w-full object-cover"
                          fallback={<span className="absolute inset-0 bg-emerald-900" aria-hidden />}
                        />
                      </span>
                      <span className="text-[0.72rem] text-emerald-200/70">{color.nombre}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-9">
              <h2 className="mb-3 text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                Especificaciones
              </h2>
              <dl className="divide-y divide-emerald-800/60 border-t border-emerald-800/60">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex gap-6 py-3">
                    <dt className="w-32 shrink-0 text-[0.86rem] text-emerald-200/60">
                      {spec.label}
                    </dt>
                    <dd className="text-[0.92rem] text-white">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-[0.92rem] font-bold tracking-wide text-ink transition-colors duration-200 hover:bg-gold-bright"
            >
              Me interesa
            </button>
          </div>
        </div>
      </div>

      <ModalLead open={modalOpen} onClose={() => setModalOpen(false)} moto={moto} />
    </section>
  );
}
