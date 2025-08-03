"use client"

import { useState, useEffect } from "react"
import { MapPinIcon } from "@heroicons/react/24/outline"

// Simulação de um componente de mapa pesado
export default function MapComponent() {
  const [markers, setMarkers] = useState<Array<{ id: number; x: number; y: number; name: string }>>([])
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null)

  // Simula carregamento de dados do mapa
  useEffect(() => {
    const cities = [
      { name: "São Paulo", x: 60, y: 70 },
      { name: "Rio de Janeiro", x: 65, y: 75 },
      { name: "Belo Horizonte", x: 62, y: 68 },
      { name: "Brasília", x: 55, y: 60 },
      { name: "Salvador", x: 58, y: 50 },
    ]

    const newMarkers = cities.map((city, index) => ({
      id: index + 1,
      x: city.x,
      y: city.y,
      name: city.name,
    }))

    setMarkers(newMarkers)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-900">Mapa Interativo do Brasil</h4>
        <div className="text-sm text-gray-500">Clique nos marcadores para mais informações</div>
      </div>

      {/* Simulação de mapa */}
      <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 overflow-hidden">
        {/* Contorno do Brasil (simplificado) */}
        <div className="absolute inset-4 bg-green-200 rounded-lg opacity-50" />

        {/* Marcadores */}
        {markers.map((marker) => (
          <button
            key={marker.id}
            onClick={() => setSelectedMarker(marker.id)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
              selectedMarker === marker.id
                ? "text-red-600 scale-125"
                : "text-blue-600 hover:text-red-500 hover:scale-110"
            }`}
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
            }}
          >
            <MapPinIcon className="w-6 h-6" />
          </button>
        ))}

        {/* Tooltip do marcador selecionado */}
        {selectedMarker && (
          <div
            className="absolute bg-white rounded-lg shadow-lg p-3 border border-gray-200 z-10"
            style={{
              left: `${markers.find((m) => m.id === selectedMarker)?.x}%`,
              top: `${(markers.find((m) => m.id === selectedMarker)?.y || 0) - 10}%`,
              transform: "translateX(-50%) translateY(-100%)",
            }}
          >
            <div className="text-sm font-medium text-gray-900">
              {markers.find((m) => m.id === selectedMarker)?.name}
            </div>
            <div className="text-xs text-gray-500">Cidade brasileira</div>
          </div>
        )}
      </div>

      {/* Lista de cidades */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {markers.map((marker) => (
          <button
            key={marker.id}
            onClick={() => setSelectedMarker(marker.id)}
            className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
              selectedMarker === marker.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {marker.name}
          </button>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>🗺️ Componente de Mapa:</strong> Este componente simula uma biblioteca de mapas pesada (como Google Maps
          ou Mapbox) que só é carregada quando o usuário realmente precisa visualizar o mapa.
        </p>
      </div>
    </div>
  )
}
