import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Função principal do middleware que é executada em cada requisição
export function middleware(request: NextRequest) {
  // Obtém o pathname da URL atual
  const { pathname } = request.nextUrl

  // Simula verificação de autenticação através de cookie
  const isAuthenticated = request.cookies.get("auth-token")?.value === "authenticated"

  // Lista de rotas protegidas que requerem autenticação
  const protectedRoutes = ["/dashboard", "/profile", "/admin"]

  // Verifica se a rota atual é protegida
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  // Se a rota é protegida e o usuário não está autenticado
  if (isProtectedRoute && !isAuthenticated) {
    // Redireciona para a página de login
    const loginUrl = new URL("/auth/login", request.url)
    // Adiciona a URL de retorno como parâmetro
    loginUrl.searchParams.set("returnUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Adiciona headers personalizados para todas as requisições
  const response = NextResponse.next()

  // Header personalizado com timestamp da requisição
  response.headers.set("X-Request-Time", new Date().toISOString())

  // Header com informações do usuário (se autenticado)
  if (isAuthenticated) {
    response.headers.set("X-User-Status", "authenticated")
  }

  // Configuração de CORS para APIs
  if (pathname.startsWith("/api/")) {
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
  }

  return response
}

// Configuração de quais rotas o middleware deve processar
export const config = {
  // Matcher define em quais rotas o middleware será executado
  matcher: [
    // Executa em todas as rotas exceto arquivos estáticos e _next
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
