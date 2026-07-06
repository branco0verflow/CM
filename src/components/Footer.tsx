const WHATSAPP_URL =
  "https://wa.me/59891307441?text=Hola%20CyclesMotors,%20quiero%20consultar%20por%20una%20moto";

const colLinkClass = "text-[0.92rem] text-cream-dim transition-colors duration-250 hover:text-gold";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="grain relative overflow-hidden border-t border-gold/25 bg-black py-12 pb-7 sm:py-16 lg:py-20"
    >
      <div className="container">
        <div className="relative z-1 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-90 sm:col-span-2 lg:col-span-1">
            <img className="mb-4.5 h-16 w-auto" src="/logo01.png" alt="CyclesMotors" />
            <p className="text-[0.95rem] leading-relaxed text-cream-dim">
              Concesionaria de motos, indumentaria y equipamiento. Historia
              sobre dos ruedas desde 1956.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Catálogo">
            <h4 className="mb-1 font-display text-[1.35rem] tracking-[0.04em] text-cream">
              Catálogo
            </h4>
            <a className={colLinkClass} href="#destacados">Motos</a>
            <a className={colLinkClass} href="#indumentaria">Indumentaria</a>
            <a className={colLinkClass} href="/equipamiento">Equipamientos</a>
            <a className={colLinkClass} href="#destacados">Destacados</a>
          </nav>

          <div className="flex flex-col gap-3">
            <h4 className="mb-1 font-display text-[1.35rem] tracking-[0.04em] text-cream">
              Contacto
            </h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.92rem] font-semibold text-gold!"
            >
              WhatsApp · 091 307 441
            </a>
            <span className="text-[0.92rem] text-cream-dim">Montevideo, Uruguay</span>
            <span className="text-[0.92rem] text-cream-dim">Lun a Sáb · 9 a 19 h</span>
          </div>
        </div>

        <div className="relative z-1 mt-9 flex flex-col items-start gap-4 border-t border-cream/10 pt-6 text-[0.85rem] text-sand sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} CyclesMotors. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <a className={colLinkClass} href="#" aria-label="Instagram">
              Instagram
            </a>
            <a className={colLinkClass} href="#" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
