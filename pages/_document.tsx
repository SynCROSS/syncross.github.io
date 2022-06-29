import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx?.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage?.({
          enhanceApp: App => props =>
            sheet?.collectStyles?.(<App {...props} />),
        });

      const initialProps = await Document?.getInitialProps?.(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps?.styles}
            {sheet?.getStyleElement?.()}
          </>
        ),
      };
    } catch (e) {
      console.error(e);
    } finally {
      sheet?.seal?.();
    }
    return {
      html: '',
    };
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

export default MyDocument;
