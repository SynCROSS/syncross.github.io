import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

const AboutBlock = styled.div`
  width: 50%;
  margin: auto;
`;

const AboutTitle = styled.h1`
  margin: 1rem;
  font-size: 3rem;
`;

const AboutContext = styled.p`
  text-align: left;
  font-size: 2rem;
  margin: 1rem;
`;

const About = () => {
  return (
    <AboutBlock className="flex ai-center jc-center flex-direction-col">
      <Head>
        <title>About</title>
      </Head>
      <AboutTitle>About</AboutTitle>
      <AboutContext>
        This is My Personal Site. The App built with Next.js and Typescript. And
        This is My Portfolio and My First Personal Project. So I'm Very Excited
        to Make This Site. Many People might be wondering why I chose Next
        instead of Gatsby to make this site. Because I didn't know Gatsby when I
        started this project.
      </AboutContext>
    </AboutBlock>
  );
};

export default About;
