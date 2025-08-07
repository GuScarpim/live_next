export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sobre o Projeto MFE
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Informações sobre a arquitetura de Micro Frontends
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Arquitetura
            </h2>
            <p className="text-gray-600 mb-4">
              Este projeto utiliza uma arquitetura de Micro Frontends com:
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Host Application (Next.js)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Micro Frontend (Aplicação separada)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Proxy Reverso para integração</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Tecnologias
            </h2>
            <p className="text-gray-600 mb-4">
              Stacks utilizadas:
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Next.js 15</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-700">React 19</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-700">TypeScript</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-700">Tailwind CSS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Benefícios da Arquitetura MFE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Desenvolvimento Independente</h4>
              <p className="text-green-700 text-sm">
                Equipes podem trabalhar em paralelo em diferentes micro frontends.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Deploy Independente</h4>
              <p className="text-green-700 text-sm">
                Cada micro frontend pode ser deployado separadamente.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Tecnologias Flexíveis</h4>
              <p className="text-green-700 text-sm">
                Diferentes micro frontends podem usar tecnologias diferentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 