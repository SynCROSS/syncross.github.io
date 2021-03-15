import Head from 'next/head';
import HomeHeader from '../components/Home/HomeHeader';
import HomeIntroduce from '../components/Home/HomeIntroduce';
import HomeTechStack from '../components/Home/HomeTechStack';

const Home = () => {
  return (
    <div className="flex jc-center ai-center flex-direction-col">
      <Head>
        <title>SynCROSS</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <HomeHeader />
      <HomeIntroduce />
      <HomeTechStack />
    </div>
  );
};

export default Home;
