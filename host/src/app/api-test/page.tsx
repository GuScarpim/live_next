/**
 * Página de Teste de API - Comparação SSR vs ISR
 * Esta página demonstra na prática a diferença entre Server-Side Rendering (SSR)
 * e Incremental Static Regeneration (ISR) no Next.js 15.
 * 
 * Funcionalidades:
 * - Fetch de dados com estratégia SSR (sem cache)
 * - Fetch de dados com estratégia ISR (com revalidação)
 * - Comparação visual dos resultados
 * - Demonstração de performance entre as duas abordagens
 */

const API_URL = "http://localhost:3000";

// Função para buscar dados usando SSR (sem cache)
async function fetchSSRData() {
  const res = await fetch(`${API_URL}/api/data`, {
    cache: 'no-store',
  });
  return res.json();
}


// Função para buscar dados usando ISR (com revalidação automática)
async function fetchISRData() {
  const res = await fetch(`${API_URL}/api/data`, {
    method: 'POST',
    next: { revalidate: 10 },
  });
  return res.json();
}


export default async function SSR_ISR_Page() {

  const ssr = await fetchSSRData();
  const isr = await fetchISRData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SSR vs ISR - Next.js 15</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Server-side Rendering (SSR)</h2>
          <p className="mb-2">Dados renderizados a cada requisição (sem cache):</p>
          <pre className="bg-gray-100 p-4 text-sm rounded overflow-auto">
            {JSON.stringify(ssr, null, 2)}
          </pre>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Incremental Static Regeneration (ISR)</h2>
          <p className="mb-2">Dados com cache e revalidação automática:</p>
          <pre className="bg-gray-100 p-4 text-sm rounded overflow-auto">
            {JSON.stringify(isr, null, 2)}
          </pre>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Comparação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="text-blue-800 font-semibold mb-2">SSR</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Sempre atualizado</li>
                <li>• Gera tempo de resposta maior</li>
                <li>• Sem uso de cache</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h3 className="text-green-800 font-semibold mb-2">ISR</h3>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Usa cache inteligente</li>
                <li>• Atualiza automaticamente</li>
                <li>• Ótimo para performance</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
