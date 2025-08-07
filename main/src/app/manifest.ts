import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA',
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons/FIAP-NEXT.svg',
        sizes: '192x192',
        type: 'image/svg+xml'
      },
      {
        src: '/icons/favicon.ico',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
  };
}