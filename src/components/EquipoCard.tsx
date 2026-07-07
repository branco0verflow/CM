import type { Equipo } from "@/data/equipo";
import SafeImage from "./SafeImage";

const WHATSAPP_URL = (equipo: Equipo) =>
  `https://wa.me/59891307441?text=${encodeURIComponent(
    `Hola CyclesMotors, me interesa "${equipo.nombre}".`
  )}`;

export default function EquipoCard({ equipo }: { equipo: Equipo }) {
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
      <div className="relative aspect-4/3 overflow-hidden bg-[#10130D]">
        <SafeImage
          src={equipo.imagenPrincipalEquipo}
          alt={equipo.nombre}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
          fallback={<span className="absolute inset-0" aria-hidden />}
        />

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
          {equipo.categoria}
        </span>

        {equipo.stock <= 5 && (
          <span
            className="
              absolute top-3 right-3 z-2 rounded
              bg-black/60 px-2.5 py-1.25
              text-[0.64rem] font-semibold tracking-[0.06em]
              text-[#E8DFC2] uppercase
              backdrop-blur
            "
          >
            Últimas unidades
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-5 pt-4.5 pb-5">
        <span className="text-[0.72rem] tracking-[0.18em] text-[#D4B21C] uppercase">
          {equipo.marca}
        </span>

        <h3 className="font-display text-[1.5rem] leading-tight tracking-[0.02em] text-[#F5EFD8]">
          {equipo.nombre}
        </h3>

        <div className="mt-0.5 flex items-center gap-2 text-[0.82rem] text-[#E8DFC2]/55">
          <span>
            {equipo.talles.length} {equipo.talles.length === 1 ? "talle" : "talles"}
          </span>
          <span aria-hidden>·</span>
          <span>
            {equipo.colores.length} {equipo.colores.length === 1 ? "color" : "colores"}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="font-display text-[1.35rem] tracking-[0.02em] text-[#F5EFD8]">
            {equipo.moneda} {equipo.precio.toLocaleString("es-UY")}
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
            Consultar
          </button>
        </div>
      </div>
    </article>
  );
}
