import HomeHeader from 'components/Home/HomeHeader';
import { getMetadata } from 'lib/utility/seo';
import { Suspense, lazy } from 'react';

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
    <main className={'flex jc-center ai-center flex-direction-col'}>
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
