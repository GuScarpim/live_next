/**
 * Página de Demonstração - Image Optimization
 * Esta página demonstra as capacidades de otimização automática de imagens
 * do Next.js através do componente Image.
 * 
 * Funcionalidades demonstradas:
 * - Comparação entre imagem otimizada (Next.js Image) vs não otimizada (HTML img)
 * - Lazy loading automático
 * - Redimensionamento responsivo
 * - Formatos modernos (WebP, AVIF) quando suportados
 * - Priorização de imagem com priority prop
 */
import Image from 'next/image';

export default function ImageOptimizationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">🖼️ Otimização de Imagens com Next.js</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Imagem Otimizada (Next.js)</h2>
          <Image
            src="https://picsum.photos/id/237/600/400"
            alt="Imagem otimizada"
            width={600}
            height={400}
            className="rounded shadow"
            priority
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Imagem Não Otimizada (HTML)</h2>
          <img
            src="https://picsum.photos/id/237/600/400"
            alt="Imagem não otimizada"
            width={600}
            height={400}
            className="rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
