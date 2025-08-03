import { type NextRequest, NextResponse } from "next/server"

// Configuração para usar Edge Runtime
export const runtime = "edge"

// Função Edge que roda na borda da rede (mais próximo do usuário)
export async function GET(request: NextRequest) {
  // Obtém informações geográficas do usuário
  const country = request.geo?.country || "Unknown"
  const city = request.geo?.city || "Unknown"
  const region = request.geo?.region || "Unknown"

  // Obtém informações do user agent
  const userAgent = request.headers.get("user-agent") || "Unknown"

  // Obtém IP do usuário (mascarado por privacidade)
  const ip = request.ip || request.headers.get("x-forwarded-for") || "Unknown"
  const maskedIp = ip
    .split(".")
    .map((part, index) => (index < 2 ? part : "xxx"))
    .join(".")

  // Dados de resposta
  const responseData = {
    message: "Esta resposta foi gerada por uma Edge Function!",
    timestamp: new Date().toISOString(),
    location: {
      country,
      city,
      region,
    },
    request: {
      ip: maskedIp,
      userAgent: userAgent.substring(0, 100) + "...", // Trunca para privacidade
      method: request.method,
      url: request.url,
    },
    edge: {
      runtime: "edge",
      benefits: [
        "Menor latência (executa próximo ao usuário)",
        "Melhor performance global",
        "Menor cold start",
        "Escalabilidade automática",
      ],
    },
  }

  // Retorna resposta JSON com headers de cache
  return NextResponse.json(responseData, {
    headers: {
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      "X-Edge-Function": "true",
      "X-Response-Time": new Date().toISOString(),
    },
  })
}

// POST para demonstrar processamento de dados na edge
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Processamento simples de dados na edge
    const processedData = {
      original: body,
      processed: {
        timestamp: new Date().toISOString(),
        wordCount: JSON.stringify(body).length,
        location: request.geo?.country || "Unknown",
        processed_by: "Edge Function",
      },
    }

    return NextResponse.json(processedData, {
      headers: {
        "X-Edge-Function": "true",
        "X-Processing-Location": request.geo?.country || "Unknown",
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar dados na edge" }, { status: 400 })
  }
}
