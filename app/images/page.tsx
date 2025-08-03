import Image from "next/image"
import type { Metadata } from "next"

// Metadados para a página de imagens
export const metadata: Metadata = {
  title: "Otimização de Imagens",
  description: "Demonstração do componente next/image e suas otimizações",
}

export default function ImagesPage() {
  // Lista de imagens para demonstração
  const images = [
    {
      src: "https://picsum.photos/800/600?random=1",
      alt: "Paisagem aleatória 1",
      title: "Imagem Responsiva",
      description: "Imagem que se adapta automaticamente ao tamanho da tela",
    },
    {
      src: "https://picsum.photos/800/600?random=2",
      alt: "Paisagem aleatória 2",
      title: "Lazy Loading",
      description: "Carregada apenas quando entra na viewport",
    },
    {
      src: "https://picsum.photos/800/600?random=3",
      alt: "Paisagem aleatória 3",
      title: "Formato Otimizado",
      description: "Automaticamente convertida para WebP/AVIF quando suportado",
    },
    {
      src: "https://picsum.photos/800/600?random=4",
      alt: "Paisagem aleatória 4",
      title: "Placeholder Blur",
      description: "Efeito de blur durante o carregamento",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Cabeçalho explicativo */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-red-900 mb-4">Otimização de Imagens com next/image</h1>
        <div className="prose text-red-800">
          <p className="mb-4">
            O componente <code>next/image</code> oferece otimizações automáticas para melhorar a performance e
            experiência do usuário.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Lazy Loading:</strong> Carrega imagens apenas quando necessário
            </li>
            <li>
              <strong>Responsive:</strong> Adapta automaticamente ao dispositivo
            </li>
            <li>
              <strong>Formatos Modernos:</strong> WebP/AVIF quando suportado
            </li>
            <li>
              <strong>Placeholder:</strong> Evita layout shift durante carregamento
            </li>
          </ul>
        </div>
      </div>

      {/* Demonstração de imagem hero */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
            alt="Paisagem montanhosa ao nascer do sol"
            fill
            className="object-cover"
            priority // Carrega imediatamente (acima da dobra)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">Imagem Hero</h2>
              <p className="text-lg">Carregada com prioridade (priority=true)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de imagens otimizadas */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeria de Imagens Otimizadas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  // Placeholder blur para melhor UX
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  // Tamanhos responsivos
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparação de performance */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Benefícios de Performance</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
              75%
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Redução de Tamanho</h4>
            <p className="text-sm text-gray-600">Conversão automática para formatos modernos (WebP/AVIF)</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
              90%
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Lazy Loading</h4>
            <p className="text-sm text-gray-600">Carregamento apenas quando a imagem entra na viewport</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
              0
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Layout Shift</h4>
            <p className="text-sm text-gray-600">Dimensões definidas previnem mudanças de layout</p>
          </div>
        </div>
      </div>

      {/* Informações técnicas */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurações Técnicas do next/image</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Propriedades Principais:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>
                • <code>fill</code>: Preenche o container pai
              </li>
              <li>
                • <code>priority</code>: Carrega imediatamente
              </li>
              <li>
                • <code>placeholder="blur"</code>: Efeito de blur
              </li>
              <li>
                • <code>sizes</code>: Tamanhos responsivos
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Otimizações Automáticas:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Conversão para WebP/AVIF</li>
              <li>• Redimensionamento automático</li>
              <li>• Lazy loading por padrão</li>
              <li>• Cache otimizado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
