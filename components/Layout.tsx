import type { PropsWithChildren } from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from './common/Footer';

type LayoutProps<T = Record<string, unknown>> = PropsWithChildren<T>;

// skipcq: JS-D1001
function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeaderContainer />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
