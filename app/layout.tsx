'use client';

import Layout from 'components/Layout';
import { Poppins } from 'next/font/google';

import { ViewportProvider } from 'lib/utility/viewport';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { Analytics } from '@vercel/analytics/react';
import 'styles/global.css';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui', 'arial'],
});

// skipcq: JS-D1001
function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="mask-icon" href="/icon.svg" color="#e9e9e9" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{"@context":"http://schema.org/","type":"Person","jobTitle":"Frontend Developer","name":"SynCROSS","telephone":"+82-10-9874-2668","url":"https://syncross.vercel.app"}',
          }}
          key="product-jsonld"
        />
        <ViewportProvider>
          <Layout>
            {children}
            <Analytics />
          </Layout>
        </ViewportProvider>
      </body>
    </html>
  );
}

export default App;
