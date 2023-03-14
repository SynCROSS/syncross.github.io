import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import { ViewportProvider } from 'lib/utility/viewport';

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'normalize.css';

import 'styles/global.css';

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
