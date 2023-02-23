import { config } from '@fortawesome/fontawesome-svg-core';
import { Poppins } from '@next/font/google';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { ViewportProvider } from '../lib/utility/viewport';
import '../styles/globals.css';

config.autoAddCss = false;

/**
 * Log Metrics
 * @param metric Metrics Of Website
 */
export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log('file: _app.tsx ~ line 12 ~ reportWebVitals ~ metric', metric);
}

const TITLE = 'SynCROSS';
const DESCRIPTION =
  "I'm MERN Stack Developer. Let's Work Together To Make Your Website Perfect.";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// skipcq: JS-D1001
export default function App({ Component }: AppProps): JSX.Element {
  return (
    <ViewportProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="all" />

          <meta name="title" content={TITLE} />
          <meta name="description" content={DESCRIPTION} key="desc" />
          <meta name="author" content="SynCROSS" />

          <meta name="application-name" content={TITLE} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={TITLE} />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#333333" />
          <meta name="msapplication-tap-highlight" content="no" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content="/icon.jpg" />
          <meta property="og:image:secure_url" content="/icon.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="721" />
          <meta property="og:image:height" content="721" />
          <meta property="og:image:alt" content="SynCROSS" />
          <meta property="og:url" content="https://syncross.vercel.app" />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:url" content="https://syncross.vercel.app/" />
          <meta property="twitter:title" content={TITLE} />
          <meta property="twitter:description" content={DESCRIPTION} />
          <meta property="twitter:image" content="/icon.jpg" />

          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta
            name="google-site-verification"
            content="yPjEuhxg0wZLY4uNjzQnetrY9IDRmyer0VTV3aDVJZo"
          />

          <meta name="theme-color" content="#333333" />

          <link rel="manifest" href="/manifest.json" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon-180x180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="157x157"
            href="apple-touch-icon-157x157.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="apple-touch-icon-167x167.png"
          />

          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        </Head>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{"@context":"http://schema.org/","type":"Person","jobTitle":"Frontend Developer","name":"SynCROSS","telephone":"+82-10-9874-2668","url":"https://syncross.vercel.app"}',
          }}
        />
        <Component />
      </Layout>
    </ViewportProvider>
  );
}
