import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/appProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { Roboto, Cormorant_Garamond } from "next/font/google";

const robotoThin = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-thin",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600","700"],
  subsets: ["latin"],
  variable: "--font-bell",
  display: "swap",
});


// Carga fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandra Roggero M. Beratung",
  description:
    "Contribuimos cada día a que las personas experimenten una profunda satisfacción en su camino profesional y crezcan personalmente. Hoy en día, se trata de más que solo 'encontrar' nuevos empleados rápidamente. Se trata de construir equipos de trabajo óptimos, compuestos por una organización estructurada de manera coherente con los objetivos de la empresa.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${inter.variable}
          ${robotoThin.variable}
          ${cormorant.variable}
          font-sans antialiased
        `}
      >
        
          <AppProvider>
            <Header />
            {children}
            <Footer/>
          </AppProvider>
        
      </body>
    </html>
  );
}
