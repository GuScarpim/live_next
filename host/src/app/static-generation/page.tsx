/**
 * Página de Demonstração - Static Generation (SSG)
 * Esta página demonstra a geração estática do Next.js, onde o conteúdo
 * é gerado no momento do build e servido como HTML estático.
 * 
 * Características do SSG:
 * - Conteúdo gerado em build time
 * - Máxima performance de carregamento
 * - Ideal para conteúdo que não muda frequentemente
 * - CDN-friendly e cache otimizado
 */

// Força a geração estática desta página
export const dynamic = 'force-static';

export default function StaticGenerationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Static Generation (SSG)</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Static Generation (SSG)</h2>
          <p className="mb-4">Esta página é gerada estaticamente no build e servida como HTML estático.</p>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Timestamp de build:</strong> {new Date().toLocaleString('pt-BR')}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
