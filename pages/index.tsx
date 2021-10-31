import Head from 'next/head';
import { useEffect } from 'react';
import HomeHeader from '../components/Home/HomeHeader';
import HomeIntroduce from '../components/Home/HomeIntroduce';
import HomeTechStack from '../components/Home/HomeTechStack';

const Home = () => {
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
