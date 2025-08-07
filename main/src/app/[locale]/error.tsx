/**
 * Página de Erro Global
 * Este componente é renderizado automaticamente quando ocorre um erro
 * não tratado em qualquer parte da aplicação.
 * 
 * Funcionalidades:
 * - Captura e exibe erros não tratados
 * - Opção de tentar novamente (reset)
 * - Link para voltar à página inicial
 * - Log automático de erros para debugging
 * - Interface amigável para o usuário
 */
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string; }; // Erro capturado pelo boundary
  reset: () => void; // Função para tentar recarregar o componente
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
      <div className="flex gap-4">
        <button onClick={reset} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Tentar novamente
        </button>
        <Link href="/" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
          Voltar para a home
        </Link>
      </div>
    </div>
  );
}
