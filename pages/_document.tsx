import Document, {
  type DocumentContext,
  type DocumentInitialProps,
} from 'next/document';
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
}
