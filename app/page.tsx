import HomeHeader from 'components/Home/HomeHeader';
import { getMetadata } from 'lib/utility/seo';
import { Suspense, lazy } from 'react';
import { css } from 'styled-system/css';

export const metadata = getMetadata();

const HomeIntroduce = lazy(
  async () => await import('../components/Home/HomeIntroduce'),
);

const HomeTechStack = lazy(
  async () => await import('../components/Home/HomeTechStack'),
);

// skipcq: JS-D1001
export default function Home() {
  return (
    <main className={css({})}>
      <HomeHeader />
      <Suspense fallback={<p>loading...</p>}>
        <HomeIntroduce />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <HomeTechStack />
      </Suspense>
    </main>
  );
}
