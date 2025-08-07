/**
 * Wrapper para Componente Dinâmico
 * Este componente demonstra como usar next/dynamic para carregar componentes
 * de forma lazy, implementando code splitting automático.
 * 
 * Funcionalidades:
 * - Importação dinâmica com next/dynamic
 * - Loading state customizado durante o carregamento
 * - Desabilitação do SSR para componentes client-only (ssr: false)
 * - Fallback com Suspense como camada adicional de segurança
 */
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Configuração da importação dinâmica com loading customizado
const DynamicComponent = dynamic(() => import('@/components/DynamicExample'), {
  loading: () => (
    <div className="p-4 bg-gray-100 rounded">
      Carregando componente dinâmico...
    </div>
  ),
  ssr: false // Desabilita SSR para este componente
});

export default function DynamicWrapper() {
  return (
  
    <Suspense fallback={<div className="p-4 bg-gray-100 rounded">Carregando...</div>}>
      <DynamicComponent />
    </Suspense>
  );
}
