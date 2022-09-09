import type { PropsWithChildren } from 'react';
import Footer from './common/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';

type LayoutProps<T = Record<string, unknown>> = PropsWithChildren<T>;

// skipcq: JS-D1001
function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <HeaderContainer />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
