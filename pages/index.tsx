import Seo from 'components/common/Seo';
import HomeHeader from 'components/Home/HomeHeader';
import dynamic from 'next/dynamic';
import type { FC } from 'react';

// TODO Make Custom Skeleton UI For HomeIntroduce
const HomeIntroduce = dynamic(
  async () => await import('../components/Home/HomeIntroduce'),
  {
    ssr: false,
  },
) as FC;

// TODO Make Custom Skeleton UI For HomeTechStack
const HomeTechStack = dynamic(
  async () => await import('../components/Home/HomeTechStack'),
  {
    ssr: false,
  },
) as FC;

// skipcq: JS-D1001
function Home() {
  return (
    <main className="flex jc-center ai-center flex-direction-col">
      <Seo />
      <HomeHeader />
      <HomeIntroduce />
      <HomeTechStack />
    </main>
  );
}

export default Home;
