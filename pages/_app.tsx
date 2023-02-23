import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { createGlobalStyle, css } from 'styled-components';
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
  window?.console.log(
    'file: _app.tsx ~ line 12 ~ reportWebVitals ~ metric',
    metric,
  );
}

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

type FontWeight = keyof typeof fontWeights;
const fontWeights = {
  Thin: 100,
  Hairline: 100,
  UltraLight: 200,
  ExtraLight: 200,
  Light: 300,
  Normal: 400,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  DemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  UltraBold: 800,
  Heavy: 900,
  Black: 900,
  ExtraBlack: 950,
  UltraBlack: 950,
};

type ExtractFromFileNameOptions = {
  separator?: string;
};

/**
 *
 * @param {string} font full font name includes file extension (ex: Poppins-Black.ttf)
 * @param {ExtractFromFileNameOptions} options
 * @returns {string} font name
 */
const getFontName = (
  font: string,
  { separator = '-' }: ExtractFromFileNameOptions = {},
): string => font.split(separator)[0];

/**
 *
 * @param {string} font full font name includes file extension (ex: Poppins-Black.ttf)
 * @param {{extension: string}} options
 * @returns {string} File Name Without Extension
 */
const removeExtension = (font: string, { extension = 'ttf' } = {}): string =>
  font.replace(new RegExp(`.${extension}$`, 'ig'), '');

/**
 *
 * @param {string} font full font name includes file extension (ex: Poppins-Black.ttf)
 * @param {ExtractFromFileNameOptions} options
 * @returns {string} Font Weight
 */
const getFontWeight = (
  font: string,
  { separator = '-' }: ExtractFromFileNameOptions = {},
): FontWeight => removeExtension(font.split(separator)[1]) as FontWeight;

const GlobalStyles = createGlobalStyle`
${() =>
  css`
    ${[
      'Poppins-Black.ttf',
      'Poppins-BlackItalic.ttf',
      'Poppins-Bold.ttf',
      'Poppins-BoldItalic.ttf',
      'Poppins-ExtraBold.ttf',
      'Poppins-ExtraBoldItalic.ttf',
      'Poppins-ExtraLight.ttf',
      'Poppins-Italic.ttf',
      'Poppins-Light.ttf',
      'Poppins-LightItalic.ttf',
      'Poppins-Medium.ttf',
      'Poppins-MediumItalic.ttf',
      'Poppins-Regular.ttf',
      'Poppins-SemiBold.ttf',
      'Poppins-SemiBoldItalic.ttf',
      'Poppins-Thin.ttf',
      'Poppins-ThinItalic.ttf',
    ].reduce(
      (result, font) => `${result} @font-face {
    font-family: ${getFontName(font)};
    src: url('/fonts/${getFontName(font)}/${font}') format('truetype');
    font-style: ${font.includes('Italic') ? 'italic' : 'normal'};
    font-weight: ${fontWeights[getFontWeight(font)] ?? 400};
    font-display: swap;
  }`,
      '',
    )}
  `}
`;

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

          <meta name="title" content={`${TITLE}`} />
          <meta name="description" content={`${DESCRIPTION}`} key="desc" />
          <meta name="author" content="SynCROSS" />

          <meta name="application-name" content={`${TITLE}`} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={`${TITLE}`} />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#333333" />
          <meta name="msapplication-tap-highlight" content="no" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${TITLE}`} />
          <meta property="og:description" content={`${DESCRIPTION}`} />
          <meta property="og:image" content="/icon.jpg" />
          <meta property="og:image:secure_url" content="/icon.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="721" />
          <meta property="og:image:height" content="721" />
          <meta property="og:image:alt" content="SynCROSS" />
          <meta property="og:url" content="https://syncross.vercel.app" />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:url" content="https://syncross.vercel.app/" />
          <meta property="twitter:title" content={`${TITLE}`} />
          <meta property="twitter:description" content={`${DESCRIPTION}`} />
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
        </Head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GlobalStyles />
        <Component />
      </Layout>
    </ViewportProvider>
  );
}
