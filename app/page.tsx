import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

// Página inicial com Static Generation (SSG)
// Esta página é gerada em build time e servida estaticamente
export default function HomePage() {
  // Lista de funcionalidades demonstradas no projeto
  const features = [
    {
      title: "Static Site Generation (SSG)",
      description: "Páginas geradas em build time para máxima performance",
      href: "/ssg",
      color: "bg-blue-500",
    },
    {
      title: "Server-Side Rendering (SSR)",
      description: "Renderização no servidor para conteúdo dinâmico",
      href: "/ssr",
      color: "bg-green-500",
    },
    {
      title: "Incremental Static Regeneration (ISR)",
      description: "Regeneração incremental de páginas estáticas",
      href: "/isr",
      color: "bg-purple-500",
    },
    {
      title: "API Routes",
      description: "Rotas de backend integradas ao Next.js",
      href: "/api/users",
      color: "bg-yellow-500",
    },
    {
      title: "Otimização de Imagens",
      description: "Componente next/image com otimizações automáticas",
      href: "/images",
      color: "bg-red-500",
    },
    {
      title: "Internacionalização (i18n)",
      description: "Suporte a múltiplos idiomas",
      href: "/i18n",
      color: "bg-indigo-500",
    },
    {
      title: "Dashboard Protegido",
      description: "Área protegida com middleware de autenticação",
      href: "/dashboard",
      color: "bg-pink-500",
    },
    {
      title: "Dynamic Imports",
      description: "Carregamento dinâmico de componentes",
      href: "/dynamic",
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Seção Hero */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">MFE Next.js</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Projeto demonstrativo completo utilizando todas as funcionalidades do Next.js 15 com TypeScript, Tailwind CSS
          e arquitetura de microfrontend.
        </p>
      </div>

      {/* Grid de funcionalidades */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-gray-300 transition-all duration-200"
          >
            {/* Indicador colorido */}
            <div className={`inline-flex rounded-lg p-3 ${feature.color} text-white mb-4`}>
              <ArrowRightIcon className="h-6 w-6" />
            </div>

            {/* Conteúdo do card */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>

            {/* Ícone de seta */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ArrowRightIcon className="h-5 w-5 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>

      {/* Seção de informações técnicas */}
      <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tecnologias Utilizadas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Next.js 15 (App Router)</li>
              <li>• React 18</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Funcionalidades</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• SSG, SSR, ISR</li>
              <li>• API Routes</li>
              <li>• Middleware</li>
              <li>• Internacionalização</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Otimizações</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Image Optimization</li>
              <li>• Dynamic Imports</li>
              <li>• Edge Functions</li>
              <li>• Cache Strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
