import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/appProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
  title: "Innova Corp | Transformación Digital",
  description:
    "En Innova Corp, ayudamos a las empresas a liderar la innovación tecnológica a través de desarrollo de software, consultoría y transformación digital.",
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
          font-sans antialiased
        `}
      >
        <Header />
        <AppProvider>{children}</AppProvider>
        <Footer/>
      </body>
    </html>
  );
}
