"use client";

import { useEffect, useState } from "react";
import type { Moto } from "@/data/motos";

const PAISES = [
  { codigo: "+598", nombre: "Uruguay", bandera: "🇺🇾" },
  { codigo: "+55", nombre: "Brasil", bandera: "🇧🇷" },
  { codigo: "+54", nombre: "Argentina", bandera: "🇦🇷" },
];

const WHATSAPP_NUMERO = "59897094444";

export default function ModalLead({
  open,
  onClose,
  moto,
}: {
  open: boolean;
  onClose: () => void;
  moto: Moto;
}) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [paisCodigo, setPaisCodigo] = useState(PAISES[0].codigo);
  const [telefono, setTelefono] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Bloquea el scroll del fondo mientras el modal está abierto.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Permite cerrar con Escape.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Resetea el formulario cada vez que se vuelve a abrir.
  useEffect(() => {
    if (open) {
      setNombre("");
      setApellido("");
      setPaisCodigo(PAISES[0].codigo);
      setTelefono("");
      setPregunta("");
      setEnviado(false);
    }
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lineas = [
      `Hola CyclesMotors, me interesa la ${moto.marca} ${moto.modelo} (${moto.version}).`,
      `Nombre: ${nombre} ${apellido}`,
      `Teléfono: ${paisCodigo} ${telefono}`,
      pregunta.trim() ? `Consulta: ${pregunta.trim()}` : null,
    ].filter(Boolean);


    setEnviado(true);
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Consultar por ${moto.marca} ${moto.modelo}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-105 rounded-2xl border border-[#D4B21C]/25 bg-[linear-gradient(180deg,#15180F_0%,#0B0D09_100%)] p-6 shadow-[0_30px_90px_rgba(0,0,0,.55)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full text-[#E8DFC2]/60 transition-colors duration-200 hover:text-gold"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {!enviado ? (
          <>
            <span className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
              {moto.marca} {moto.modelo}
            </span>
            <h2 className="mt-1 font-display text-[1.9rem] leading-none tracking-[0.02em] text-white">
              Me interesa
            </h2>
            <p className="mt-2 text-[0.9rem] text-[#E8DFC2]/60">
              Dejanos tus datos y te contactamos por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-nombre" className="text-[0.68rem] font-semibold tracking-[0.14em] text-[#E8DFC2]/45 uppercase">
                    Nombre
                  </label>
                  <input
                    id="lead-nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="rounded-lg border border-[#D4B21C]/20 bg-[#080A07]/80 px-4 py-2.5 text-[0.9rem] text-[#E8DFC2] outline-none transition-colors duration-200 focus:border-[#D4B21C]/70"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-apellido" className="text-[0.68rem] font-semibold tracking-[0.14em] text-[#E8DFC2]/45 uppercase">
                    Apellido
                  </label>
                  <input
                    id="lead-apellido"
                    type="text"
                    required
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="rounded-lg border border-[#D4B21C]/20 bg-[#080A07]/80 px-4 py-2.5 text-[0.9rem] text-[#E8DFC2] outline-none transition-colors duration-200 focus:border-[#D4B21C]/70"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="lead-telefono" className="text-[0.68rem] font-semibold tracking-[0.14em] text-[#E8DFC2]/45 uppercase">
                  Teléfono celular
                </label>
                <div className="flex gap-2">
                  <select
                    aria-label="Código de país"
                    value={paisCodigo}
                    onChange={(e) => setPaisCodigo(e.target.value)}
                    className="rounded-lg border border-[#D4B21C]/20 bg-[#080A07]/80 px-2.5 py-2.5 text-[0.9rem] text-[#E8DFC2] outline-none transition-colors duration-200 focus:border-[#D4B21C]/70"
                  >
                    {PAISES.map((p) => (
                      <option key={p.codigo} value={p.codigo}>
                        {p.bandera} {p.codigo}
                      </option>
                    ))}
                  </select>
                  <input
                    id="lead-telefono"
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="99 123 456"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="flex-1 rounded-lg border border-[#D4B21C]/20 bg-[#080A07]/80 px-4 py-2.5 text-[0.9rem] text-[#E8DFC2] outline-none transition-colors duration-200 focus:border-[#D4B21C]/70"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="lead-pregunta" className="text-[0.68rem] font-semibold tracking-[0.14em] text-[#E8DFC2]/45 uppercase">
                  Tu consulta
                </label>
                <textarea
                  id="lead-pregunta"
                  rows={3}
                  placeholder="¿Tenés alguna pregunta sobre esta moto? (opcional)"
                  value={pregunta}
                  onChange={(e) => setPregunta(e.target.value)}
                  className="resize-none rounded-lg border border-[#D4B21C]/20 bg-[#080A07]/80 px-4 py-2.5 text-[0.9rem] text-[#E8DFC2] outline-none transition-colors duration-200 focus:border-[#D4B21C]/70"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-[0.92rem] font-bold tracking-wide text-ink transition-colors duration-200 hover:bg-gold-bright"
              >
                Enviar
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-ink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="30" height="30" aria-hidden>
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h2 className="mt-5 font-display text-[1.9rem] leading-none tracking-[0.02em] text-white">
              ¡Listo!
            </h2>
            <p className="mt-2 text-[0.9rem] text-[#E8DFC2]/60">
              Tu consulta fue enviada. Te vamos a contactar a la brevedad.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4B21C]/30 px-8 py-3 text-[0.9rem] font-semibold text-[#E8DFC2] transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
