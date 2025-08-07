/**
 * Componente de Loading Global
 * Este componente é exibido automaticamente durante carregamentos
 * de páginas ou quando há Suspense boundaries ativados.
 * 
 * Funcionalidades:
 * - Loading spinner animado
 * - Tela completa com design consistente
 * - Integração automática com roteamento do Next.js
 * - Feedback visual para o usuário durante carregamentos
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}
