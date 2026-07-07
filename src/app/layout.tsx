import type { Metadata } from "next";
import { Outfit, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyclesmotors.vercel.app"),

  title: {
    default: "CyclesMotors",
    template: "%s Concesionaria oficial",
  },
  description:
    "CyclesMotors, màs que motos. Historia sobre dos ruedas desde 1956.",

  // ── Favicons ──────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn) ──────────────────
  openGraph: {
    title: "CyclesMotors",
    description:
      "CyclesMotors | Colonia del Sacramento. Historia sobre dos ruedas desde 1956.",
    url: "https://cyclesmotors.vercel.app",
    siteName: "CyclesMotors",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "CyclesMotors —",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "CyclesMotors | Colonia del Sacramento",
    description:
      "Motos, indumentaria y equipamiento en Colonia del Sacramento. Historia sobre dos ruedas desde 1956.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${outfit.variable} ${bebasNeue.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
