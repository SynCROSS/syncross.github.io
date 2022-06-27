// @ts-check

const withPwa = require('next-pwa');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  // enabled: process?.env?.ANALYZE === 'true',
  enabled: false,
});

const withPlugins = require('next-compose-plugins');

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
      `default-src 'self' fonts.googleapis.com vitals.vercel-insights.com 'unsafe-inline'; ` +
      `object-src 'none'; ` +
      `report-uri 'none'; ` +
      `script-src 'self' 'unsafe-eval'; ` +
      `script-src-elem 'self' 'unsafe-inline'; ` +
      `font-src fonts.googleapis.com fonts.gstatic.com; ` +
      `style-src-elem 'self' fonts.googleapis.com 'unsafe-inline'; ` +
      `img-src 'self' unpkg.com github-readme-stats.vercel.app data:; ` +
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
  images: {
    domains: ['unpkg.com', 'github-readme-stats.vercel.app'],
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    styledComponents: true,
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

module.exports = withPlugins(
  [
    [
      withPwa,
      {
        pwa: {
          dest: 'public',
          sw: 'service-worker.js',
        },
      },
    ],
    [withBundleAnalyzer],
  ],
  nextConfig,
);
