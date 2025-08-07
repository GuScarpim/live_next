/**
 * Componente de Exemplo Dinâmico
 * Este componente demonstra um componente que é carregado dinamicamente,
 * ilustrando as vantagens do code splitting e lazy loading.
 * 
 * Funcionalidades:
 * - Estado local com contador interativo
 * - Simulação de carregamento para demonstrar loading states
 * - Exemplo prático de componente que pode ser carregado sob demanda
 * - Demonstração de hydration em componentes client-side
 */
'use client';

import { useState, useEffect } from 'react';

export default function DynamicExample() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-4 bg-gray-100 rounded">
        <p>Componente dinâmico carregando...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-blue-50 rounded border border-blue-200">
      <h3 className="font-semibold mb-2">Componente Carregado Dinamicamente</h3>

      <p className="text-sm text-black mb-4">
        Este componente foi carregado apenas quando necessário, reduzindo o bundle inicial.
      </p>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-blue-500 text-black rounded text-sm hover:bg-blue-600"
        >
          Contador: {count}
        </button>

        <div className="text-xs text-black">
          <p>• Carregamento sob demanda</p>
          <p>• Bundle separado</p>
          <p>• Melhor performance</p>
        </div>
      </div>
    </div>
  );
}
