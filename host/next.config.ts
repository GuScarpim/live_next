/**
 * Configuração do Next.js para a aplicação Host
 * Este arquivo configura a aplicação host para trabalhar com Micro Frontends,
 * incluindo proxy reverso, otimizações de imagem e configurações CORS.
 * 
 * Principais configurações:
 * - Rewrite rules para integração com MFE
 * - Configurações de CORS para comunicação entre aplicações
 * - Otimizações de imagem para domínios externos
 * - Configurações experimentais de performance
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações experimentais para melhor performance
  experimental: {
    webpackBuildWorker: true, // Utiliza workers para builds mais rápidos
  },
  // Configuração para otimização de imagens externas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Permite carregamento de imagens do Picsum
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Configuração de proxy reverso para integração com Micro Frontend
  async rewrites() {
    return [
      {
        source: '/mfe/:path*', // Todas as rotas começando com /mfe
        destination: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3001/:path*' // Redireciona para aplicação MFE local
          : 'http://localhost:3001/:path*', // Em produção, ajustar para URL real
      },
    ];
  },
  // Configuração de headers CORS para integração com MFE
  async headers() {
    return [
      {
        source: '/mfe/:path*', // Aplicar headers apenas para rotas do MFE
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Permite acesso de qualquer origem (ajustar conforme necessário)
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS', // Métodos HTTP permitidos
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization', // Headers permitidos
          },
        ],
      },
    ];
  },
};

export default nextConfig;
