import dynamic from 'next/dynamic';
import SEO from '../components/common/Seo';
import HomeHeader from '../components/Home/HomeHeader';

// TODO Make Custom Skeleton UI For HomeIntroduce
const HomeIntroduce = dynamic(
  () => import('../components/Home/HomeIntroduce'),
  {
    ssr: false,
  },
);

// TODO Make Custom Skeleton UI For HomeTechStack
const HomeTechStack = dynamic(
  () => import('../components/Home/HomeTechStack'),
  {
    ssr: false,
  },
);

// skipcq: JS-D1001
function Home(): JSX.Element {
  return (
    <main className="flex jc-center ai-center flex-direction-col">
      <SEO />
      <HomeHeader />
      <HomeIntroduce />
      <HomeTechStack />
    </main>
  );
}

export default Home;
