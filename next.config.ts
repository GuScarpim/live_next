import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Habilita o modo experimental para usar as últimas funcionalidades
  experimental: {
    // Habilita o Turbopack para desenvolvimento mais rápido
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  // Configuração de internacionalização (i18n)
  i18n: {
    // Idiomas suportados pela aplicação
    locales: ["pt-BR", "en-US", "es-ES"],
    // Idioma padrão
    defaultLocale: "pt-BR",
    // Detecta automaticamente o idioma do usuário
    localeDetection: true,
  },

  // Configuração de otimização de imagens
  images: {
    // Domínios externos permitidos para otimização de imagens
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Formatos de imagem suportados
    formats: ["image/webp", "image/avif"],
    // Tamanhos de imagem para responsividade
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Tamanhos de imagem para ícones
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },

  // Configuração de headers de segurança
  async headers() {
    return [
      {
        // Aplica headers de segurança em todas as rotas
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ]
  },

  // Configuração de rewrites para roteamento personalizado
  async rewrites() {
    return [
      {
        // Rewrite para API externa (exemplo de proxy)
        source: "/api/external/:path*",
        destination: "https://jsonplaceholder.typicode.com/:path*",
      },
    ]
  },

  // Configuração de redirects
  async redirects() {
    return [
      {
        // Redirect de rota antiga para nova
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ]
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
