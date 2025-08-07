
/**
 * Página de Demonstração - Dynamic Imports
 * Esta página demonstra o uso de importações dinâmicas no Next.js para otimização
 * de performance através de code splitting automático.
 * 
 * Conceitos demonstrados:
 * - Lazy loading de componentes com next/dynamic
 * - Code splitting automático
 * - Redução do bundle inicial
 * - Loading states para componentes dinâmicos
 */
import DynamicWrapper from '@/components/DynamicWrapper';

export default function DynamicImportsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dynamic Imports</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Dynamic Imports</h2>

          <p className="mb-4">
            Componente abaixo é carregado dinamicamente usando <code>next/dynamic</code>:
          </p>

          <DynamicWrapper />
        </section>
      </div>
    </div>
  );
}
