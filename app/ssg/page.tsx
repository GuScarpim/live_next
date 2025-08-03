import type { Metadata } from "next"

// Metadados específicos para esta página
export const metadata: Metadata = {
  title: "Static Site Generation (SSG)",
  description: "Demonstração de geração estática de site com Next.js",
}

// Interface para os dados dos posts
interface Post {
  id: number
  title: string
  body: string
  userId: number
}

// Função que busca dados em build time
async function getPosts(): Promise<Post[]> {
  // Simula uma chamada de API que acontece apenas em build time
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6", {
    // Cache indefinido - dados são buscados apenas uma vez no build
    cache: "force-cache",
  })

  if (!res.ok) {
    throw new Error("Falha ao buscar posts")
  }

  return res.json()
}

// Página SSG - gerada em build time
export default async function SSGPage() {
  // Busca os dados em build time
  const posts = await getPosts()

  return (
    <div className="space-y-8">
      {/* Cabeçalho explicativo */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Static Site Generation (SSG)</h1>
        <div className="prose text-blue-800">
          <p className="mb-4">
            Esta página utiliza <strong>Static Site Generation (SSG)</strong>, onde o conteúdo é gerado em{" "}
            <em>build time</em> e servido como HTML estático.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Performance:</strong> Carregamento instantâneo
            </li>
            <li>
              <strong>SEO:</strong> Conteúdo totalmente indexável
            </li>
            <li>
              <strong>CDN:</strong> Pode ser servido por CDN globalmente
            </li>
            <li>
              <strong>Custo:</strong> Menor custo de servidor
            </li>
          </ul>
          <p className="mt-4 text-sm">
            <strong>Quando usar:</strong> Conteúdo que não muda frequentemente, como blogs, documentação, páginas de
            marketing.
          </p>
        </div>
      </div>

      {/* Lista de posts gerados estaticamente */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Posts Gerados Estaticamente</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.body}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Post #{post.id}</span>
                <span>Usuário {post.userId}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Informações técnicas */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalhes Técnicos da Implementação</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Configuração:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Função assíncrona no componente</li>
              <li>• Fetch com cache: 'force-cache'</li>
              <li>• Dados buscados em build time</li>
              <li>• HTML gerado estaticamente</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Vantagens:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Tempo de carregamento mínimo</li>
              <li>• Excelente para SEO</li>
              <li>• Pode ser servido por CDN</li>
              <li>• Menor carga no servidor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
