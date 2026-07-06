# CyclesMotors — Landing

Concesionaria de motos, indumentaria y equipamiento. Next.js 14 (App Router) +
TypeScript + GSAP.

## Requisitos
- Node.js 18.17 o superior

## Instalación
Abrí una terminal DENTRO de esta carpeta (la que contiene package.json) y corré:

    npm install
    npm run dev

Luego abrí http://localhost:3000

## Qué falta cargar
1. Video del hero: poné tu archivo en public/hero.mp4. Mientras no exista,
   se muestra un degradé verde oliva de fondo.
2. Fotos de las motos: en public/motos/ con los nombres moto-01.jpg ... moto-06.jpg
   (ver src/data/motos.ts). Si falta una, la card muestra la inicial de la marca.

## Personalización rápida
- Colores: variables CSS en src/app/globals.css (:root)
- WhatsApp: constante WHATSAPP_URL en Navbar.tsx y Footer.tsx
- Motos: array en src/data/motos.ts
- Botones del hero: array "acciones" en Hero.tsx
