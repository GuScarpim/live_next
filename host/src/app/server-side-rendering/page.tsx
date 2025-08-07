
/**
 * Página de Demonstração - Server-Side Rendering (SSR)
 * Esta página demonstra o SSR do Next.js, onde os dados são buscados
 * no servidor a cada requisição, garantindo sempre dados atualizados.
 * 
 * Características do SSR:
 * - Dados sempre atualizados (sem cache)
 * - Renderização no servidor a cada request
 * - SEO otimizado com conteúdo pré-renderizado
 * - Maior tempo de resposta inicial comparado ao SSG/ISR
 */

// Função que busca dados no servidor a cada requisição (sem cache)
async function getServerData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar dados');
  }

  return response.json();
}

export default async function ServerSideRenderingPage() {

  const serverData = await getServerData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Server-side Rendering (SSR)</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Server-side Rendering (SSR)</h2>
          <p className="mb-4">Dados buscados no servidor a cada requisição:</p>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Título:</strong> {serverData.title}</p>
            <p><strong>ID:</strong> {serverData.id}</p>
          </div>
        </section>
      </div>
    </div>
  );
}


