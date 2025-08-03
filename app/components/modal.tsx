"use client"

import { useEffect } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface ModalProps {
  onClose: () => void
}

export default function Modal({ onClose }: ModalProps) {
  // Fecha modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          {/* Botão de fechar */}
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Conteúdo do modal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Modal Carregado Dinamicamente</h3>

            <p className="text-gray-600">
              Este modal foi carregado usando Dynamic Import, o que significa que seu código só foi baixado quando você
              clicou no botão para abri-lo.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-medium text-purple-900 mb-2">Vantagens:</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Reduz o bundle inicial</li>
                <li>• Carrega apenas quando necessário</li>
                <li>• Melhora a performance</li>
                <li>• Experiência do usuário otimizada</li>
              </ul>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Cancelar
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
