/**
 * Layout principal da aplicação Host
 * Este arquivo define o layout base que será aplicado a todas as páginas da aplicação.
 * 
 * Configurações:
 * - Fontes Google (Geist Sans e Geist Mono)
 * - Estilos globais via CSS
 * - Componente de navegação compartilhado
 * - Metadados padrão da aplicação
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

// Configuração da fonte principal (Geist Sans)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configuração da fonte monoespaçada (Geist Mono) para códigos
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MFE Host App",
  description: "Multi-zone Micro Frontend Host Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
