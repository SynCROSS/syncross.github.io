import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import HomeHeader from '../components/Home/HomeHeader';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      setLoading(false);
    }
  }, [isReady]);

  if (loading) {
    return (
      <div className="flex jc-center ai-center flex-direction-col">
        <Head>
          <title>SynCROSS</title>
          <link rel="canonical" href="https://syncross.vercel.app/" />
        </Head>
        <div style={{ height: `calc(100vh-${64 + 56}}px)` }}>
          Loading Index . . .
        </div>
      </div>
    );
  }
  // TODO Make Custom Skeleton UI For HomeIntroduce
  const HomeIntroduce = dynamic(
    () => import('../components/Home/HomeIntroduce'),
    { loading: () => <p>Loading Introduce. . .</p> },
  );

  // TODO Make Custom Skeleton UI For HomeTechStack
  const HomeTechStack = dynamic(
    () => import('../components/Home/HomeTechStack'),
    { loading: () => <p>Loading Tech Stack. . .</p> },
  );

  return (
    <div className="flex jc-center ai-center flex-direction-col">
      <Head>
        <title>SynCROSS</title>
        <link rel="canonical" href="https://syncross.vercel.app/" />
      </Head>
      <HomeHeader />
      <HomeIntroduce />
      <HomeTechStack />
    </div>
  );
};

export default Home;
