"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Moto } from "@/data/motos";

export default function MotoCard({ moto }: { moto: Moto }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setBroken(true);
    }
  }, []);

  return (
    <article
      className="
        group relative flex flex-col overflow-hidden rounded-xl
        border border-[#D4B21C]/15
        bg-[linear-gradient(180deg,#15180F_0%,#0B0D09_100%)]
        shadow-[0_24px_70px_rgba(0,0,0,.35)]
        transition-[border-color,box-shadow,transform] duration-300
        hover:-translate-y-1
        hover:border-[#D4B21C]/45
        hover:shadow-[0_30px_90px_rgba(0,0,0,.55)]
      "
    >
      <Link href={`/motos/${moto.id}`}>
        <div className="relative aspect-4/3 overflow-hidden bg-[#10130D]">
          {!broken && (
            <img
              ref={imgRef}
              className="
              absolute inset-0 h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-103
            "
              src={moto.imagenPrincipal}
              alt={`${moto.marca} ${moto.modelo}`}
              loading="lazy"
              onError={() => setBroken(true)}
            />
          )}

          <span
            className="
            absolute top-3 left-3 z-2 rounded
            border border-[#D4B21C]/35
            bg-[#D4B21C]
            px-2.5 py-1.25
            text-[0.68rem] font-bold tracking-[0.08em]
            text-[#080808] uppercase
            shadow-[0_10px_24px_rgba(0,0,0,.35)]
          "
          >
            {moto.estilo}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 px-5 pt-4.5 pb-5">
          <span className="text-[0.72rem] tracking-[0.18em] text-[#D4B21C] uppercase">
            {moto.marca}
          </span>

          <h3 className="font-display text-[1.9rem] leading-none tracking-[0.02em] text-[#F5EFD8]">
            {moto.modelo}
          </h3>

          <div className="mt-0.5 flex items-center gap-2 text-[0.82rem] text-[#E8DFC2]/55">
            <span>{moto.version}</span>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-4">
            <span className="font-display text-[1.35rem] tracking-[0.02em] text-[#F5EFD8]">
              {moto.precio}
            </span>

            <button
            className="
              rounded-lg border border-[#D4B21C]/25
              bg-transparent px-4 py-2
              text-[0.8rem] font-semibold text-[#E8DFC2]
              transition-colors duration-200
              hover:border-[#D4B21C]
              hover:bg-[#D4B21C]
              hover:text-[#080808]
            "
          >
            Ver ficha
          </button>


          </div>
        </div>
      </Link>
    </article>
  );
}