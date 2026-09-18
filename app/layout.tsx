import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "MARKET.INK — Tattoo Growth OS",
    template: "%s · MARKET.INK",
  },
  description:
    "El sistema de crecimiento para estudios de tatuaje: posicionamiento, contenido, WhatsApp, Meta Ads, CRM, reservas y retención.",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: "MARKET.INK — Tattoo Growth OS",
    description:
      "Agenda llena. Marca con tinta. Un sistema para convertir atención en conversaciones, reservas y capacidad rentable.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARKET.INK — Tattoo Growth OS",
    description: "Agenda llena. Marca con tinta.",
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
