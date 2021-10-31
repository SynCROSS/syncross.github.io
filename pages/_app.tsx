import '../styles/globals.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export function reportWebVitals(metric: any): void {
  console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  const TITLE = 'SynCROSS';
  const DESCRIPTION =
    "I'm MERN Stack Developer. I Hope You Feel Good And Please Contact Me. (●'◡'●)";

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' 'unsafe-inline'; script-src 'unsafe-eval'; script-src-elem 'self' 'unsafe-inline'; font-src https://fonts.googleapis.com/  https://fonts.gstatic.com/; style-src-elem 'self' https://fonts.googleapis.com/ 'unsafe-inline'; img-src 'self' data:"
        />
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

        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
