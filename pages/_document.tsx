import type { AppPropsType, AppType } from 'next/dist/shared/lib/utils';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { NextRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx?.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage?.({
          enhanceApp:
            (App: AppType) =>
            (
              props: PropsWithChildren<
                AppPropsType<NextRouter, Record<string, unknown>>
              >,
            ) =>
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
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
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
