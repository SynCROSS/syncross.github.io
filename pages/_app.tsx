import '../styles/globals.css';
import Layout from '../components/Layout';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  const TITLE = 'SynCROSS';
  const DESCRIPTION =
    "I'm MERN Stack Developer. Let's Work Together To Make Your Website Perfect.";

  const structuredData = {
    '@context': 'http://schema.org/',
    type: 'Person',
    jobTitle: 'Frontend Developer',
    name: 'SynCROSS',
    telephone: '+82-10-9874-2668',
    url: 'https://syncross.vercel.app',
  };

  const IPHONE_RETINA_ICON_SIZE = '120x120';
  const IPAD_ICON_SIZE = '157x157';
  const IPAD_RETINA_ICON_SIZE = '167x167';
  const IPHONE_ICON_SIZE = '180x180';

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="title" content={`${TITLE}`} />
        <meta name="description" content={`${DESCRIPTION}`} key="desc" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${TITLE}`} />
        <meta property="og:description" content={`${DESCRIPTION}`} />
        <meta
          property="og:image"
          content="https://syncross.vercel.app/icon.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://syncross.vercel.app/icon.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="721" />
        <meta property="og:image:height" content="721" />
        <meta property="og:image:alt" content="SynCROSS" />
        <meta property="og:url" content="https://syncross.vercel.app" />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://syncross.vercel.app/" />
        <meta property="twitter:title" content={`${TITLE}`} />
        <meta property="twitter:description" content={`${DESCRIPTION}`} />
        <meta
          property="twitter:image"
          content="https://syncross.vercel.app/icon.jpg"
        />

        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          name="google-site-verification"
          content="yPjEuhxg0wZLY4uNjzQnetrY9IDRmyer0VTV3aDVJZo"
        />

        <meta name="theme-color" content="#333333" />

        <link rel="manifest" href="/manifest.json" />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap&family=Poppins&display=swap"
          rel="stylesheet preload prefetch"
          as="style"
        />

        <link
          rel="apple-touch-icon"
          sizes={IPHONE_ICON_SIZE}
          href={`apple-touch-icon-${IPHONE_ICON_SIZE}.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes={IPAD_ICON_SIZE}
          href={`apple-touch-icon-${IPAD_ICON_SIZE}.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes={IPHONE_RETINA_ICON_SIZE}
          href={`apple-touch-icon-${IPHONE_RETINA_ICON_SIZE}.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes={IPAD_RETINA_ICON_SIZE}
          href={`apple-touch-icon-${IPAD_RETINA_ICON_SIZE}.png`}
        />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        <Script
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Component {...pageProps} />
      <noscript>Your Browser Is Too Old To Use Javascript</noscript>
    </Layout>
  );
}
