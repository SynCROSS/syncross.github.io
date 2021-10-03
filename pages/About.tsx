import Head from 'next/head';
import React from 'react';
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
  return (
    <AboutBlock className="flex ai-center jc-center flex-direction-col">
      <Head>
        <title>About</title>
      </Head>
      <AboutTitle>About</AboutTitle>
      <AboutContext>
        This App Built With Next.js And Typescript.
        <br />
        And This Is My Portfolio And My First Personal Project.
        <br />
        So I'm Very Excited to Make This Site.
        <br />
        Many People Might Be Wondering
        <br />
        Why I Chose Next Instead Of Gatsby to Make This Site.
        <br />
        Because I Didn't Know Gatsby When I Started This Project.
        <br />
        And Next.js Can Change Rendering Solution Between CSR & SSR.
        <br />
        Anyway,
        <br />
        If U Wanna Hire Some Frontend Engineers
        <br />
        Please Contact Me.
        <br />I Hope You Feel So Good. (●'◡'●)
      </AboutContext>
    </AboutBlock>
  );
};

export default About;
