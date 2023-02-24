// @ts-check

const withPwa = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  sw: 'service-worker.js',
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self';" +
      "object-src 'none'; " +
      'report-uri https://vitals.vercel-insights.com; ' +
      'report-to https://vitals.vercel-insights.com; ' +
      "connect-src 'self' https://vitals.vercel-insights.com https://github-readme-stats.vercel.app; " +
      "script-src 'self' https://vitals.vercel-insights.com 'unsafe-eval'; " +
      "script-src-elem 'self' https://vitals.vercel-insights.com 'unsafe-eval'; " +
      "font-src 'self'; " +
      "style-src 'self' fonts.googleapis.com 'unsafe-inline'; " +
      "style-src-elem 'self' fonts.googleapis.com 'unsafe-inline'; " +
      "img-src 'self' unpkg.com github-readme-stats.vercel.app data:; " +
      "frame-ancestors 'self'",
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        pathname: '/simple-icons@v5/icons/*.svg',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '/api/pin',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        // * Apply these headers to all routes in application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(withPwa(nextConfig));
