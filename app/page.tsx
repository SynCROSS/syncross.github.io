import HomeHeader from 'components/Home/HomeHeader';
import { getMetadata } from 'lib/utility/seo';
import dynamic from 'next/dynamic';

export const metadata = getMetadata();

const HomeIntroduce = dynamic(
  async () => await import('components/Home/HomeIntroduce'),
  {
    loading: () => <p>loading...</p>,
    ssr: true,
  },
);

const HomeTechStack = dynamic(
  async () => await import('components/Home/HomeTechStack'),
  {
    loading: () => <p>loading...</p>,
    ssr: true,
  },
);

// skipcq: JS-D1001
export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeIntroduce />
      <HomeTechStack />
    </>
  );
}
