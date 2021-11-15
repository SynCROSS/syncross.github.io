import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AboutBlock = styled.div`
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

const About = () => {
  const [loading, setLoading] = useState(true);
  const { isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      setLoading(() => false);
    }
  }, [isReady]);

  if (loading) {
    return (
      <AboutBlock className="flex jc-center ai-center flex-direction-col">
        <Head>
          <title>About</title>
          <link rel="canonical" href="https://syncross.vercel.app/About" />
        </Head>
        <div>Loading . . .</div>
      </AboutBlock>
    );
  }

  return (
    <AboutBlock className="flex ai-center jc-center flex-direction-col">
      <Head>
        <title>About</title>
        <link rel="canonical" href="https://syncross.vercel.app/About" />
      </Head>
      <AboutTitle>About</AboutTitle>
      <AboutContext>
        Hello, I'm <b>SynCROSS</b>
        <br />
        The Frontend Developer (<b>MERN</b> Stack).
        <br />I Love <b>Learning New Things</b>
        <br />
        But Also <b>Making Projects</b>&nbsp;Too.
        <br />I Think Fixing Error is <b>Hard</b>,
        <br />
        But It's&nbsp;
        <b>Necessary</b> & <b>Important</b>
        .
        <br />
        So I Will <b>Try</b> To <b>Fix</b> The Error & <b>Improve</b> UX.
        <br />
        If&nbsp;
        <b>U Wanna Hire</b>
        &nbsp;The Frontend Developer
        <br />
        Please&nbsp;
        <b>Contact Me</b>.
        <br />I Hope You Feel So Good. (●'◡'●)
      </AboutContext>
    </AboutBlock>
  );
};

export default About;
