import type { Metadata } from "next"

// Metadados para a página SSR
export const metadata: Metadata = {
  title: "Server-Side Rendering (SSR)",
  description: "Demonstração de renderização no servidor com Next.js",
}

// Interface para dados do usuário
interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: {
    name: string
  }
}

// Função que busca dados em cada requisição (SSR)
async function getUsers(): Promise<User[]> {
  // Esta chamada acontece no servidor a cada requisição
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // Sem cache - dados sempre frescos
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Falha ao buscar usuários")
  }

  return res.json()
}

// Função para obter timestamp atual
function getCurrentTimestamp(): string {
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

// Página SSR - renderizada no servidor a cada requisição
export default async function SSRPage() {
  // Busca dados frescos a cada requisição
  const users = await getUsers()
  const timestamp = getCurrentTimestamp()

  return (
    <div className="space-y-8">
      {/* Cabeçalho explicativo */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-green-900 mb-4">Server-Side Rendering (SSR)</h1>
        <div className="prose text-green-800">
          <p className="mb-4">
            Esta página utiliza <strong>Server-Side Rendering (SSR)</strong>, onde o conteúdo é renderizado no servidor
            a cada requisição.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Dados Frescos:</strong> Sempre atualizados
            </li>
            <li>
              <strong>SEO:</strong> Conteúdo indexável pelos buscadores
            </li>
            <li>
              <strong>Personalização:</strong> Pode ser personalizado por usuário
            </li>
            <li>
              <strong>Tempo Real:</strong> Reflete mudanças imediatamente
            </li>
          </ul>
          <p className="mt-4 text-sm">
            <strong>Quando usar:</strong> Conteúdo que muda frequentemente, dashboards, feeds personalizados, dados em
            tempo real.
          </p>
        </div>

        {/* Timestamp para mostrar que a página é renderizada a cada requisição */}
        <div className="mt-4 p-3 bg-green-100 rounded-md">
          <p className="text-sm font-medium text-green-900">🕒 Página renderizada em: {timestamp}</p>
          <p className="text-xs text-green-700 mt-1">Recarregue a página para ver um novo timestamp</p>
        </div>
      </div>

      {/* Lista de usuários renderizada no servidor */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Usuários (Dados Frescos do Servidor)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.company.name}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium w-16">Email:</span>
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium w-16">Telefone:</span>
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium w-16">Website:</span>
                  <span className="truncate">{user.website}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informações técnicas */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalhes Técnicos da Implementação SSR</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Configuração:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Função assíncrona no componente</li>
              <li>• Fetch com cache: 'no-store'</li>
              <li>• Renderização a cada requisição</li>
              <li>• Dados sempre atualizados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Características:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Dados frescos em cada carregamento</li>
              <li>• Maior tempo de resposta inicial</li>
              <li>• Ideal para conteúdo dinâmico</li>
              <li>• Suporte a personalização</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
