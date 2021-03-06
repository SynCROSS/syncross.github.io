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
        This Is My Personal Site. The App Built With Next.js And Typescript. And
        This Is My Portfolio And My First Personal Project. So I'm Very Excited
        to Make This Site. Many People Might Be Wondering Why I Chose Next
        Instead Of Gatsby to Make This Site. Because I Didn't Know Gatsby When I
        Started This Project. Now I Already Know Gatsby But I Won't Change Next
        Into Gatsby. Because I Will Add Dynamic Contents When I Have A Chance
        Later. I Hope You Feel Good. :)
      </AboutContext>
    </AboutBlock>
  );
};

export default About;
