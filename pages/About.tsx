import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const AboutBlock = styled.div`
  & > h1 {
    margin: 1rem auto;
  }
`;

const About = () => {
  return (
    <AboutBlock className="flex ai-center jc-center flex-direction-col">
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <p>
        This is My Personal Site. The App built with Next.js and Typescript.
      </p>
    </AboutBlock>
  );
};

export default About;
