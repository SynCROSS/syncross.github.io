import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeIntroduce from '../components/Home/HomeIntroduce';
import HomeTechStack from '../components/Home/HomeTechStack';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      setLoading(() => false);
    }
  }, [isReady]);

  if (loading) {
    return (
      <div className="flex jc-center ai-center flex-direction-col">
        <Head>
          <title>SynCROSS</title>
          <link rel="canonical" href="https://syncross.vercel.app/" />
        </Head>
        <div>Loading . . .</div>
      </div>
    );
  }

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
