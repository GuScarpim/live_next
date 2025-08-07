import Link from 'next/link';


export default function FileBasedRoutingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">File-based Routing</h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">File-based Routing</h2>

          <p className="mb-4">
            Esta página é acessível via <code>/file-based-routing</code> graças ao file-based routing do Next.js.
          </p>

          <div className="space-y-2">
            <Link href="/" className="text-blue-600 hover:underline block">← Voltar para Home</Link>
            <Link href="/about" className="text-blue-600 hover:underline block">→ Ir para Sobre</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
