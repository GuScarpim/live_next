"use client"

import { useEffect, useState } from "react"

// Simulação de um componente pesado com biblioteca de gráficos
export default function HeavyChart() {
  const [data, setData] = useState<number[]>([])

  // Simula carregamento de dados pesados
  useEffect(() => {
    const generateData = () => {
      const newData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
      setData(newData)
    }

    generateData()
    const interval = setInterval(generateData, 3000)
    return () => clearInterval(interval)
  }, [])

  const maxValue = Math.max(...data)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-900">Vendas Mensais (Simulado)</h4>
        <div className="text-sm text-gray-500">Atualizado a cada 3 segundos</div>
      </div>

      {/* Gráfico de barras simples */}
      <div className="flex items-end space-x-2 h-48 bg-gray-50 p-4 rounded-lg">
        {data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-blue-500 rounded-t transition-all duration-500 ease-in-out"
              style={{
                height: `${(value / maxValue) * 100}%`,
                minHeight: "4px",
              }}
            />
            <div className="text-xs text-gray-600 mt-2">{index + 1}</div>
          </div>
        ))}
      </div>

      {/* Legenda */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Jan</span>
        <span>Dez</span>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>💡 Componente Pesado:</strong> Este componente simula uma biblioteca de gráficos pesada que só é
          carregada quando necessário, reduzindo o bundle inicial da aplicação.
        </p>
      </div>
    </div>
  )
}
