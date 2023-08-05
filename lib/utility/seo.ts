import type { Metadata } from 'next';

export const getMetadata = ({
  title = 'SynCROSS',
  description = "I'm MERN Stack Developer. Let's Work Together To Make Your Website Perfect.",
  url = 'https://syncross.vercel.app/',
  siteTitle = '',
  canonicalHref = '',
} = {}): Metadata => ({
  title,
  description,
  authors: [
    {
      name: 'SynCROSS',
      url: 'https://github.com/SynCROSS',
    },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title,
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
    index: true,
    follow: true,
  },
  metadataBase: new URL(
    canonicalHref.startsWith('/') ? canonicalHref : `/${canonicalHref}`,
    url,
  ),
  openGraph: {
    type: 'website',
    url,
    title: `${title}${siteTitle !== '' ? ' | ' : ', The Knowledge Explorer'}`,
    siteName: `${title} | ${siteTitle}`,
    images: {
      url: '/image.jpg',
      secureUrl: '/image.jpg',
      type: 'image/jpeg',
      width: 1_200,
      height: 630,
      alt: 'SynCROSS',
    },
  },
  twitter: {
    title: `${title}, The Knowledge Explorer`,
    description,
    images: {
      url: '/image.jpg',
    },
    card: 'summary_large_image',
    site: '@__nam3__',
  },
  applicationName: title,
  formatDetection: {
    telephone: false,
  },
  referrer: 'strict-origin-when-cross-origin',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#333333' },
    { media: '(prefers-color-scheme: light)', color: '#e9e9e9' },
  ],
  manifest: '/manifest.json',
  verification: {
    google: 'yPjEuhxg0wZLY4uNjzQnetrY9IDRmyer0VTV3aDVJZo',
  },
  icons: {
    icon: [32, 16].map(size => ({
      type: 'image/png',
      sizes: `${size}x${size}`,
      url: `/favicon-${size}x${size}.png`,
    })),
    apple: [180, 157, 120, 167].map(size => ({
      rel: 'apple-touch-icon',
      sizes: `${size}x${size}`,
      url: `/apple-touch-icon-${size}x${size}.png`,
    })),
  },
  alternates: {
    canonical: `${url}${
      canonicalHref.startsWith('/') ? canonicalHref.slice(1) : canonicalHref
    }`,
  },
});
