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
            'Montserrat-Black.ttf',
            'Montserrat-BlackItalic.ttf',
            'Montserrat-Bold.ttf',
            'Montserrat-BoldItalic.ttf',
            'Montserrat-ExtraBold.ttf',
            'Montserrat-ExtraBoldItalic.ttf',
            'Montserrat-ExtraLight.ttf',
            'Montserrat-ExtraLight.ttf',
            'Montserrat-Italic.ttf',
            'Montserrat-Light.ttf',
            'Montserrat-LightItalic.ttf',
            'Montserrat-Medium.ttf',
            'Montserrat-MediumItalic.ttf',
            'Montserrat-Regular.ttf',
            'Montserrat-SemiBold.ttf',
            'Montserrat-SemiBoldItalic.ttf',
            'Montserrat-Thin.ttf',
            'Montserrat-ThinItalic.ttf',
          ].map(font => (
            <link
              key={font}
              rel="preload"
              href={`fonts/${font.split('-')[0]}/${font}`}
              as="font"
              type="font/tff"
              crossOrigin=""
            />
          ))}
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
