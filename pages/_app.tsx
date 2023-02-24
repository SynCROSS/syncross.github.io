import { config } from '@fortawesome/fontawesome-svg-core';
import { Poppins } from '@next/font/google';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
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
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
        <Component />
      </Layout>
    </ViewportProvider>
  );
}

export default App;
