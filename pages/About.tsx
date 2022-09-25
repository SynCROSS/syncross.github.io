import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const AboutBlock = styled.main.attrs(() => ({
  className: 'flex jc-center ai-center flex-direction-col',
}))`
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const AboutTitle = styled.h1`
  margin: 1rem;
  font-size: 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const AboutContext = styled.p`
  text-align: left;
  font-size: 1.5rem;
  margin: 1rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

// skipcq: JS-D1001
function About(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const { isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      setLoading(false);
    }
  }, [isReady]);

  if (loading) {
    return (
      <AboutBlock>
        <Head>
          <title>About</title>
          <link rel="canonical" href="https://syncross.vercel.app/About" />
        </Head>
        <div>Loading About . . .</div>
      </AboutBlock>
    );
  }

  return (
    <AboutBlock>
      <Head>
        <title>About</title>
        <link rel="canonical" href="https://syncross.vercel.app/About" />
      </Head>
      <AboutTitle>About</AboutTitle>
      <AboutContext>
        Hello, I&apos;m <strong>SynCROSS</strong>,
        <br />
        The <strong>MERN</strong> Stack Developer.
        <br />I Love&nbsp;
        <strong>Learning New Things</strong>
        <br />
        So I Learnt&nbsp;<strong>Javascript</strong>, &nbsp;
        <strong>Typescript</strong>,&nbsp;
        <br />
        <strong>React</strong>, &nbsp;<strong>Next.js</strong>, &nbsp;
        <strong>Node.js</strong>, &nbsp;<strong>PostgreSQL</strong>, etc.
        <br />
        If&nbsp;
        <strong>U Wanna Hire</strong>
        &nbsp;Me
        <br />
        Please&nbsp;
        <strong>Contact</strong>
        .
        <br />I Hope You Feel So Good. (●&apos;◡&apos;●)
      </AboutContext>
    </AboutBlock>
  );
}

export default About;
