import type { PropsWithChildren } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

type LayoutProps<T = Record<string, unknown>> = PropsWithChildren<T>;

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
