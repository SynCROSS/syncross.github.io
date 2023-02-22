import Head from 'next/head';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type CenteredVerticalBlockProps = PropsWithChildren<{
  className?: HTMLAttributes<HTMLElement>['className'];
}>;
// skipcq: JS-D1001
const CenteredVerticalBlock: FC<CenteredVerticalBlockProps> =
  function CenteredVerticalBlock({ children, className = '' }) {
    return (
      <main
        className={`flex jc-center ai-center flex-direction-col ${className}`}
      >
        {children}
      </main>
    );
  };

CenteredVerticalBlock.defaultProps = {
  className: '',
};

const AboutBlock = styled(CenteredVerticalBlock)`
  margin: auto;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const AboutContext = styled.p`
  text-align: left;
  font-size: 1.5rem;
  margin: 0 1.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

// skipcq: JS-D1001
function About(): JSX.Element {
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
