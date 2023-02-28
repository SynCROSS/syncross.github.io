import Footer from 'components/common/Footer';
import HeaderContainer from 'containers/common/HeaderContainer';
import type { PropsWithChildren } from 'react';

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
