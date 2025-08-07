
/**
 * Página de Demonstração - Incremental Static Regeneration (ISR)
 * Esta página demonstra o ISR do Next.js, que permite atualizar páginas estáticas
 * sem rebuild completo da aplicação.
 * 
 * Funcionalidades:
 * - Geração estática com revalidação automática
 * - Cache inteligente com tempo de vida configurável
 * - Dados sempre atualizados sem perda de performance
 * - Revalidação a cada 10 segundos (configurável via next.revalidate)
 */

// Função que busca dados externos com revalidação automática
async function getISRData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
    next: { revalidate: 10 } // Revalida a cada 10 segundos
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar dados ISR');
  }

  return response.json();
}

export default async function IncrementalStaticRegenerationPage() {
  // Busca dados via ISR
  const isrData = await getISRData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Incremental Static Regeneration (ISR)</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Incremental Static Regeneration (ISR)</h2>
          <p className="mb-4">Dados revalidados a cada 10 segundos:</p>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Título:</strong> {isrData.title}</p>
            <p><strong>ID:</strong> {isrData.id}</p>
            <p><strong>Última atualização:</strong> {new Date().toLocaleString('pt-BR')}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
