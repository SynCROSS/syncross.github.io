/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const runtimeCaching = require('next-pwa/cache.js');

const withPwa = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching,
});

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.NODE_ENV === 'development',
// });

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
      "script-src 'self' 'unsafe-eval';" +
      "script-src-elem 'self' 'unsafe-inline' https://va.vercel-scripts.com; " +
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
  {
    key: 'Access-Control-Allow-Origin',
    value: 'https://vitals.vercel-insights.com',
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
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return await Promise.resolve([
      {
        // * Apply these headers to all routes in application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]);
  },
};

module.exports = withPwa(nextConfig);
