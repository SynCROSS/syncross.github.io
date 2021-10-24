import Head from 'next/head';
import { useEffect } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeIntroduce from '../components/Home/HomeIntroduce';
import HomeTechStack from '../components/Home/HomeTechStack';

const Home = () => {
  useEffect(() => {
    try {
      if (typeof document !== 'undefined' && typeof navigator !== 'undefined') {
        document.documentElement.lang = navigator.language;
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div className="flex jc-center ai-center flex-direction-col">
      <Head>
        <title>SynCROSS</title>
      </Head>
      <HomeHeader />
      <HomeIntroduce />
      <HomeTechStack />
    </div>
  );
};

export default Home;
