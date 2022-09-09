import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import type { DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp:
            App =>
            ({ Component, pageProps, router, __N_RSC, __N_SSP, __N_SSG }) =>
              sheet.collectStyles(
                <App
                  Component={Component}
                  pageProps={pageProps as unknown}
                  router={router}
                  __N_RSC={__N_RSC}
                  __N_SSP={__N_SSP}
                  __N_SSG={__N_SSG}
                />,
              ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>Your Browser Is Too Old To Use Javascript</noscript>
        </body>
      </Html>
    );
  }
}
