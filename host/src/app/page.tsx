export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo ao MFE Host
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Esta é a aplicação host que gerencia múltiplos micro frontends
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Páginas do Host
            </h2>
            <p className="text-gray-600 mb-4">
              Estas são páginas que estão rodando diretamente nesta aplicação host.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Home - Página atual</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Sobre - Informações sobre o projeto</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-gray-700">File-based Routing - Roteamento baseado em arquivos</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Static Generation (SSG) - Geração estática</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Server-side Rendering (SSR) - Renderização no servidor</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Incremental Static Regeneration (ISR) - Revalidação incremental</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Image Optimization - Otimização de imagens</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Dynamic Imports - Importações dinâmicas</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Teste API - Cache e SSR</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Micro Frontends (Main)
            </h2>
            <p className="text-gray-600 mb-4">
              Estas são páginas que estão sendo servidas pelo projeto MFE separado.
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-gray-700">MFE Login - Autenticação de usuários</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-gray-700">MFE Home - Página principal do MFE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            FIAP
          </h3>
          <p className="text-blue-800">
            Live 4FRTN - Prof. Gustavo Scarpim
          </p>
        </div>
      </div>
    </div>
  );
}
