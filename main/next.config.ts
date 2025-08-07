import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const isDev = process.env.NODE_ENV === 'development';

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: isDev,
  buildExcludes: [
    /middleware-manifest.json$/,
    /_middleware.js$/,
    /_document.js$/
  ]
});

const baseConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  turbopack: {  }
};

const withNextIntl = createNextIntlPlugin();
const nextConfig = withPWA(withNextIntl(baseConfig));

export default nextConfig;