import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Navigation } from "./components/navigation"

// Configuração da fonte Inter do Google Fonts
const inter = Inter({
  subsets: ["latin"],
  // Otimização de carregamento da fonte
  display: "swap",
})

// Metadados da aplicação para SEO
export const metadata: Metadata = {
  title: {
    // Template para títulos de páginas específicas
    template: "%s | MFE Next.js",
    // Título padrão
    default: "MFE Next.js - Microfrontend Completo",
  },
  description: "Projeto MFE demonstrando todas as funcionalidades do Next.js 15",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MFE", "Microfrontend"],
  authors: [{ name: "Desenvolvedor MFE" }],
  // Configuração para redes sociais
  openGraph: {
    title: "MFE Next.js - Microfrontend Completo",
    description: "Projeto demonstrativo com todas as funcionalidades do Next.js",
    type: "website",
    locale: "pt_BR",
  },
  // Configuração para Twitter
  twitter: {
    card: "summary_large_image",
    title: "MFE Next.js",
    description: "Projeto MFE com Next.js 15",
  },
  // Configuração de viewport para responsividade
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

// Layout raiz que envolve toda a aplicação
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        {/* Provider para contextos globais (tema, autenticação, etc.) */}
        <Providers>
          <div className="min-h-full">
            {/* Navegação persistente em todas as páginas */}
            <Navigation />

            {/* Conteúdo principal da aplicação */}
            <main className="py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
            </main>

            {/* Rodapé persistente */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-500">© 2024 MFE Next.js. Todos os direitos reservados.</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
