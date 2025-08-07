/**
 * API Route para demonstração de SSR e ISR
 * Este endpoint simula dados do servidor para comparar diferentes estratégias
 * de renderização no Next.js.
 * 
 * Endpoints:
 * - GET: Retorna dados para SSR (Server-Side Rendering)
 * - POST: Retorna dados para ISR (Incremental Static Regeneration)
 * 
 * Ambos incluem delay simulado para demonstrar comportamento real de API
 */
import { NextResponse } from 'next/server';

export async function GET() {
  // Simula tempo de resposta do servidor
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    message: 'Dados SSR gerados no servidor',
    timestamp: new Date().toISOString(),
    type: 'SSR',
  });
}

export async function POST() {
  // Simula tempo de resposta do servidor
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    message: 'Dados ISR com revalidação de cache',
    timestamp: new Date().toISOString(),
    type: 'ISR',
  });
}
