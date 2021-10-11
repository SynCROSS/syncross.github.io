import '../styles/globals.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="SynCROSS" />
        <meta
          name="description"
          content="SynCROSS's Portfolio. I'm MERN Stack Developer. I Hope You Feel Good And Please Contact Me. (●'◡'●)"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
