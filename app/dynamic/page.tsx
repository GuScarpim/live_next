"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

// Dynamic import de um componente pesado (carregado apenas quando necessário)
const HeavyChart = dynamic(() => import("../components/heavy-chart"), {
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
        <p className="text-gray-600">Carregando gráfico...</p>
      </div>
    </div>
  ),
  ssr: false, // Desabilita SSR para este componente
})

// Dynamic import de um modal (carregado apenas quando aberto)
const Modal = dynamic(() => import("../components/modal"), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-32"></div>,
})

// Dynamic import de um componente de mapa (biblioteca pesada)
const MapComponent = dynamic(() => import("../components/map-component"), {
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Carregando mapa...</p>
      </div>
    </div>
  ),
  ssr: false,
})

export default function DynamicPage() {
  const [showChart, setShowChart] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showMap, setShowMap] = useState(false)

  return (
    <div className="space-y-8">
      {/* Cabeçalho explicativo */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-teal-900 mb-4">Dynamic Imports</h1>
        <div className="prose text-teal-800">
          <p className="mb-4">
            <strong>Dynamic Imports</strong> permitem carregar componentes apenas quando necessário, reduzindo o tamanho
            do bundle inicial e melhorando a performance.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Code Splitting:</strong> Divide o código em chunks menores
            </li>
            <li>
              <strong>Lazy Loading:</strong> Carrega componentes sob demanda
            </li>
            <li>
              <strong>Loading States:</strong> Mostra indicadores durante carregamento
            </li>
            <li>
              <strong>SSR Control:</strong> Controla renderização no servidor
            </li>
          </ul>
        </div>
      </div>

      {/* Controles para demonstração */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Demonstrações de Dynamic Import</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Botão para carregar gráfico */}
          <div className="text-center">
            <button
              onClick={() => setShowChart(!showChart)}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                showChart ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              {showChart ? "Ocultar Gráfico" : "Carregar Gráfico"}
            </button>
            <p className="text-sm text-gray-600 mt-2">Componente pesado com biblioteca de gráficos</p>
          </div>

          {/* Botão para abrir modal */}
          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="w-full px-4 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors duration-200"
            >
              Abrir Modal
            </button>
            <p className="text-sm text-gray-600 mt-2">Modal carregado dinamicamente</p>
          </div>

          {/* Botão para carregar mapa */}
          <div className="text-center">
            <button
              onClick={() => setShowMap(!showMap)}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                showMap
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {showMap ? "Ocultar Mapa" : "Carregar Mapa"}
            </button>
            <p className="text-sm text-gray-600 mt-2">Componente de mapa com biblioteca externa</p>
          </div>
        </div>
      </div>

      {/* Componente de gráfico carregado dinamicamente */}
      {showChart && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Gráfico Carregado Dinamicamente</h3>
          <HeavyChart />
        </div>
      )}

      {/* Componente de mapa carregado dinamicamente */}
      {showMap && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🗺️ Mapa Interativo</h3>
          <MapComponent />
        </div>
      )}

      {/* Modal carregado dinamicamente */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      {/* Informações sobre bundle size */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📦 Impacto no Bundle Size</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
              2MB
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Sem Dynamic Import</h4>
            <p className="text-sm text-gray-600">Todos os componentes carregados no bundle inicial</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
              500KB
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Com Dynamic Import</h4>
            <p className="text-sm text-gray-600">Bundle inicial reduzido, componentes carregados sob demanda</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
              75%
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Redução</h4>
            <p className="text-sm text-gray-600">Melhoria significativa no tempo de carregamento inicial</p>
          </div>
        </div>
      </div>

      {/* Informações técnicas */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementação Técnica dos Dynamic Imports</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Configurações:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>
                • <code>loading</code>: Componente de carregamento
              </li>
              <li>
                • <code>ssr: false</code>: Desabilita SSR
              </li>
              <li>
                • <code>suspense</code>: Usa React Suspense
              </li>
              <li>• Importação condicional</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Benefícios:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Redução do bundle inicial</li>
              <li>• Carregamento mais rápido</li>
              <li>• Melhor experiência do usuário</li>
              <li>• Code splitting automático</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
