/**
 * Componente de Loading Global
 * Este componente exibe um overlay de carregamento controlado por um store global,
 * permitindo mostrar loading em qualquer parte da aplicação.
 * 
 * Funcionalidades:
 * - Overlay de tela completa com backdrop
 * - Controle via Zustand store global
 * - Spinner animado centralizado
 * - Renderização condicional baseada no estado de loading
 */
'use client';

import { useLoadingGlobalStore } from '@/core/store/loading-global.store';

export default function LoadingGlobal() {
  const isLoading = useLoadingGlobalStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
    </div>
  );
}
