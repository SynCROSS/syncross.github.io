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
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="syncross" />
        <meta
          name="description"
          content="SynCROSS's Portfolio Site. This App Built with Nextjs and TypeScript. I Hope You Feel Good. :)"
        />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <HomeHeader />
      <HomeIntroduce />
      <HomeTechStack />
    </div>
  );
};

export default Home;
