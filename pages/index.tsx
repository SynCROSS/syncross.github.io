import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import HomeHeader from '../components/Home/HomeHeader';

// TODO Make Custom Skeleton UI For HomeIntroduce
import HomeIntroduce from '../components/Home/HomeIntroduce';

// TODO Make Custom Skeleton UI For HomeTechStack
import HomeTechStack from '../components/Home/HomeTechStack';

// skipcq: JS-D1001
function Home(): JSX.Element {
  const { ref: introduceRef, inView: isIntroduceInView } = useInView({
    threshold: 0,
  });
  const { ref: techStackRef, inView: isTechStackInView } = useInView({
    threshold: 0,
  });

  return (
    <main className="flex jc-center ai-center flex-direction-col">
      <Head>
        <title>SynCROSS</title>
        <link rel="canonical" href="https://syncross.vercel.app/" />
      </Head>
      <HomeHeader />
      <div ref={introduceRef} style={{ width: '100%' }}>
        {isIntroduceInView && <HomeIntroduce />}
      </div>
      <div ref={techStackRef} style={{ width: '100%' }}>
        {isTechStackInView && <HomeTechStack />}
      </div>
    </main>
  );
}

export default Home;
