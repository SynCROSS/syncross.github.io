// @ts-check

const withOffline = require('next-offline');

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
      `default-src 'self' https://fonts.googleapis.com/ vitals.vercel-insights.com 'unsafe-inline'; ` +
      `object-src 'none'; ` +
      `report-uri 'none'; ` +
      `script-src 'self' 'unsafe-eval'; ` +
      `script-src-elem 'self' 'unsafe-inline'; ` +
      `font-src https://fonts.googleapis.com/  https://fonts.gstatic.com/; ` +
      `style-src-elem 'self' https://fonts.googleapis.com/ 'unsafe-inline'; ` +
      `img-src 'self' data:; ` +
      `frame-ancestors 'self'`,
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
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  images: {
    domains: ['unpkg.com', 'github-readme-stats.vercel.app'],
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

module.exports = withOffline(nextConfig);
