import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MARKET.INK — Tattoo Growth OS",
  description:
    "El sistema de crecimiento para estudios de tatuaje y tatuadores: contenido, conversión, Meta Ads, WhatsApp, CRM, reservas y retención.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://market.ink"),
  openGraph: {
    title: "MARKET.INK — Tattoo Growth OS",
    description:
      "Convierte atención en conversaciones, reservas y capacidad rentable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
