import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from 'next/document';
import { Children } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  /**
   * getInitialProps Of Document
   * @param ctx Context Of Document
   * @returns {Promise<DocumentInitialProps>} Initial Props of Document
   */
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
            ({ Component, pageProps, router, __N_SSP, __N_SSG }) =>
              sheet.collectStyles(
                <App
                  Component={Component}
                  pageProps={pageProps}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  router={router}
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

  // skipcq: JS-D1001
  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          {[
            'Poppins-Black.ttf',
            'Poppins-BlackItalic.ttf',
            'Poppins-Bold.ttf',
            'Poppins-BoldItalic.ttf',
            'Poppins-ExtraBold.ttf',
            'Poppins-ExtraBoldItalic.ttf',
            'Poppins-ExtraLight.ttf',
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
          ].map(font =>
            Children.toArray(
              <link
                rel="preload"
                href={`fonts/Poppins/${font}`}
                as="font"
                type="font/ttf"
                crossOrigin=""
              />,
            ),
          )}
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
