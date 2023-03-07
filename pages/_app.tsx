import Layout from 'components/Layout';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Poppins } from 'next/font/google';

import { ViewportProvider } from 'lib/utility/viewport';

import '@fortawesome/fontawesome-svg-core/styles.css';

/**
 * Log Metrics
 * @param metric Metrics Of Website
 */
export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log('file: _app.tsx ~ line 12 ~ reportWebVitals ~ metric', metric);
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// skipcq: JS-D1001
function App({ Component }: AppProps) {
  return (
    <ViewportProvider>
      <Layout>
        {/* skipcq: JS-0455 */}
        <style jsx global>{`
          *,
          *:before,
          *:after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: ${poppins.style.fontFamily};
            scroll-behavior: smooth;
          }

          body {
            height: 100%;
            min-height: 100vh;
            text-align: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            cursor: pointer;
            border: none;
          }

          ul {
            list-style: none;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          *::-webkit-scrollbar {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .flex {
            display: flex;
          }

          .flex-direction-col {
            flex-direction: column;
          }

          .ai-center {
            align-items: center;
          }

          .ai-baseline {
            align-items: baseline;
          }

          .jc-center {
            justify-content: center;
          }

          #__next {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
        `}</style>
        <Component />
      </Layout>
    </ViewportProvider>
  );
}

export default App;
