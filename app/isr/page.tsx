import type { Metadata } from "next"

// Metadados para a página ISR
export const metadata: Metadata = {
  title: "Incremental Static Regeneration (ISR)",
  description: "Demonstração de regeneração estática incremental com Next.js",
}

// Interface para dados de comentários
interface Comment {
  id: number
  name: string
  email: string
  body: string
  postId: number
}

// Função que busca dados com revalidação periódica (ISR)
async function getComments(): Promise<Comment[]> {
  // Esta chamada é cached e revalidada a cada 60 segundos
  const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=12", {
    // Revalida a cada 60 segundos
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error("Falha ao buscar comentários")
  }

  return res.json()
}

// Função para obter timestamp de geração
function getGenerationTimestamp(): string {
  return new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

// Página ISR - gerada estaticamente e revalidada periodicamente
export default async function ISRPage() {
  // Busca dados com cache e revalidação
  const comments = await getComments()
  const timestamp = getGenerationTimestamp()

  return (
    <div className="space-y-8">
      {/* Cabeçalho explicativo */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-purple-900 mb-4">Incremental Static Regeneration (ISR)</h1>
        <div className="prose text-purple-800">
          <p className="mb-4">
            Esta página utiliza <strong>Incremental Static Regeneration (ISR)</strong>, combinando os benefícios de SSG
            com atualizações periódicas.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Performance:</strong> Servido estaticamente (rápido)
            </li>
            <li>
              <strong>Atualização:</strong> Revalidado a cada 60 segundos
            </li>
            <li>
              <strong>Escalabilidade:</strong> Não sobrecarrega o servidor
            </li>
            <li>
              <strong>Flexibilidade:</strong> Conteúdo semi-dinâmico
            </li>
          </ul>
          <p className="mt-4 text-sm">
            <strong>Quando usar:</strong> Conteúdo que muda ocasionalmente, como feeds de notícias, catálogos de
            produtos, comentários.
          </p>
        </div>

        {/* Timestamp para mostrar quando a página foi gerada */}
        <div className="mt-4 p-3 bg-purple-100 rounded-md">
          <p className="text-sm font-medium text-purple-900">🔄 Página gerada em: {timestamp}</p>
          <p className="text-xs text-purple-700 mt-1">Esta página é revalidada automaticamente a cada 60 segundos</p>
        </div>
      </div>

      {/* Lista de comentários com ISR */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comentários (Atualizados via ISR)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{comment.name}</h3>
                  <p className="text-xs text-gray-500 truncate">{comment.email}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-4 mb-3">{comment.body}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Comentário #{comment.id}</span>
                <span>Post {comment.postId}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Informações sobre revalidação */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Como Funciona a Revalidação ISR</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
              1
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Primeira Requisição</h4>
            <p className="text-gray-600">Página é servida estaticamente (gerada no build)</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
              2
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Após 60 Segundos</h4>
            <p className="text-gray-600">Próxima requisição dispara revalidação em background</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
              3
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Página Atualizada</h4>
            <p className="text-gray-600">Nova versão é servida para requisições subsequentes</p>
          </div>
        </div>
      </div>

      {/* Informações técnicas */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalhes Técnicos da Implementação ISR</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Configuração:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• next: {"{ revalidate: 60 }"}</li>
              <li>• Cache com revalidação automática</li>
              <li>• Regeneração em background</li>
              <li>• Fallback para versão anterior</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Benefícios:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Performance de página estática</li>
              <li>• Conteúdo sempre relativamente atual</li>
              <li>• Menor carga no servidor</li>
              <li>• Escalabilidade automática</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
