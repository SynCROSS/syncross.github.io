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
      `default-src 'self' https://vitals.vercel-insights.com 'unsafe-inline'; 
      object-src 'none'; 
      report-uri https://vitals.vercel-insights.com; 
      report-to https://vitals.vercel-insights.com; 
      connect-src 'self' https://vitals.vercel-insights.com; 
      script-src 'self' 'unsafe-eval'; 
      script-src-elem 'self' 'unsafe-inline'; 
      font-src 'self'; 
      style-src-elem 'self' fonts.googleapis.com 'unsafe-inline'; 
      img-src 'self' unpkg.com github-readme-stats.vercel.app data:; 
      frame-ancestors 'self'`
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

module.exports = withBundleAnalyzer(withPwa(nextConfig));
