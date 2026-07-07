const WHATSAPP_URL =
  "https://wa.me/59897094444?text=Hola%20CyclesMotors,%20quiero%20consultar%20por%20una%20moto";

const DIRECCION = "Del Virrey Ceballos 256, Colonia del Sacramento, Uruguay";
const MAPA_URL = `https://www.google.com/maps?q=${encodeURIComponent(DIRECCION)}&output=embed`;

const colLinkClass = "text-[0.92rem] text-cream-dim transition-colors duration-250 hover:text-gold";
const colHeadingClass = "mb-1 text-[0.72rem] font-semibold tracking-[0.2em] text-gold uppercase";
const proseClass = "font-serif text-[0.95rem] leading-relaxed text-cream-dim";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="grain relative overflow-hidden border-t border-gold/25 bg-black py-12 pb-7 sm:py-16 lg:py-20"
    >
      <div className="container">
        <div className="relative z-1 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1.1fr]">
          <div className="max-w-90 sm:col-span-2 lg:col-span-1">
            <img className="mb-4.5 h-16 w-auto" src="/logo01.png" alt="CyclesMotors" />
            <p className={proseClass}>
              Concesionaria de motos, indumentaria y equipamiento. Historia
              sobre dos ruedas desde 1956.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Catálogo">
            <h4 className={colHeadingClass}>Catálogo</h4>
            <a className={colLinkClass} href="/tienda">Motos</a>
            <a className={colLinkClass} href="/equipamiento">Indumentaria</a>
            <a className={colLinkClass} href="/equipamiento">Equipamientos</a>
            <a className={colLinkClass} href="/#destacados">Destacados</a>
          </nav>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h4 className={colHeadingClass}>Contacto</h4>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.92rem] font-semibold text-gold!"
              >
                WhatsApp · 097 094 444
              </a>
              <span className={`${proseClass} text-[0.92rem]`}>
                {DIRECCION.replace(", Uruguay", "")}
              </span>
              <span className={`${proseClass} text-[0.92rem]`}>
                Lunes a viernes · 10 a 18 h
                <br />
                Sábados · 9 a 13 h
              </span>
            </div>

            <div className="h-36 w-full overflow-hidden rounded-lg border border-cream/10">
              <iframe
                src={MAPA_URL}
                title="Ubicación de CyclesMotors en el mapa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.3]"
                style={{ filter: "invert(92%) hue-rotate(180deg) contrast(90%)" }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-1 mt-9 flex flex-col items-start gap-4 border-t border-cream/10 pt-6 text-[0.85rem] text-sand sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-serif">© {year} CyclesMotors. Todos los derechos reservados.</span>
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
