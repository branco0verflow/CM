"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// 091 307 441 -> formato internacional Uruguay para WhatsApp
const WHATSAPP_URL =
  "https://wa.me/59897094444?text=Hola%20CyclesMotors,%20quiero%20consultar%20por%20una%20moto";

const links = [
  { label: "Tienda de Motos", href: "/tienda" },
  { label: "Equipamiento", href: "/equipamiento" },
  { label: "Servicio Post Venta", href: "#service" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(".nav-inner > *", {
        y: -24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.1,
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-cream/10 bg-ink/85 backdrop-blur-md"
    >
      <div className="nav-inner container flex h-16 items-center justify-between gap-6 md:grid md:h-19 md:grid-cols-[auto_1fr_auto]">
        <a href="/" className="flex h-full items-center" aria-label="CyclesMotors — inicio">
          <img
            src="/logo01.png"
            alt="CyclesMotors"
            className="h-10.5 w-auto object-contain md:h-13"
          />
        </a>

        <nav className="hidden items-center justify-center gap-6 md:flex lg:gap-11" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-[1rem] tracking-[0.04em] text-cream-dim uppercase transition-colors duration-200 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="inline-flex items-center gap-2 text-[0.92rem] tracking-wide text-cream-dim transition-colors duration-200 hover:text-gold"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.031 0h-.062C5.373 0 0 5.373 0 12c0 2.625.847 5.056 2.287 7.034L.79 23.209l4.298-1.375A11.94 11.94 0 0 0 12.031 24C18.66 24 24 18.627 24 12S18.66 0 12.031 0zm7.16 19.096A9.933 9.933 0 0 1 12.031 22a9.9 9.9 0 0 1-5.045-1.378l-.362-.214-3.741 1.198 1.216-3.647-.235-.374A9.9 9.9 0 0 1 2.06 12c0-5.514 4.486-10 10.031-10 2.673 0 5.183 1.04 7.072 2.929A9.929 9.929 0 0 1 22 12.06c0 5.514-4.486 9.936-8.809 7.036z" />
            </svg>
            <span>097 094 444</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-9 w-9 place-items-center text-cream md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-cream/10 bg-ink/95 px-5 py-4 md:hidden"
          aria-label="Principal móvil"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 font-display text-[1.05rem] tracking-[0.04em] text-cream-dim uppercase transition-colors duration-200 hover:bg-cream/5 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
