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
      `default-src 'self' https://fonts.googleapis.com/ 'unsafe-inline'; ` +
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

module.exports = {
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
