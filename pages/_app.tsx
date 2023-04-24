import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import { ViewportProvider } from 'lib/utility/viewport';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'normalize.css';

import { Analytics } from '@vercel/analytics/react';
import 'styles/global.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  fallback: ['system-ui', 'arial'],
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
        <Analytics />
      </Layout>
    </ViewportProvider>
  );
}

export default App;
