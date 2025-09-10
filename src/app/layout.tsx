import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap'
});

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: "Mi Vida Keto ALMA CREATIVA",
    template: "%s | Mi Vida Keto ALMA CREATIVA"
  },
  description: "🥑✨ Transforma tu vida con el estilo keto y despierta tu creatividad. Ebooks, tips de salud, idiomas y bienestar integral. ¡Un espacio colorido donde la nutrición se encuentra con el arte!",
  keywords: ["keto", "cetogénico", "creatividad", "salud", "bienestar", "idiomas", "ebooks", "nutrición", "arte", "transformación"],
  authors: [{ name: "Mi Vida Keto ALMA CREATIVA" }],
  creator: "Mi Vida Keto ALMA CREATIVA",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mividaketoalmacreativa.com",
    title: "🥑✨ Mi Vida Keto ALMA CREATIVA",
    description: "Transforma tu vida con el estilo keto y despierta tu creatividad. ¡Colores, energía y bienestar!",
    siteName: "Mi Vida Keto ALMA CREATIVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "🥑✨ Mi Vida Keto ALMA CREATIVA",
    description: "Transforma tu vida con el estilo keto y despierta tu creatividad. ¡Colores, energía y bienestar!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col relative`}>
        {/* Fondo decorativo animado */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-keto-purple/20 to-keto-pink/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-keto-teal/20 to-keto-blue/20 rounded-full blur-3xl animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-keto-orange/10 to-keto-accent/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        {/* Contenido principal */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}