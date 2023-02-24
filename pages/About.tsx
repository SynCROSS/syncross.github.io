import SEO from 'components/common/Seo';
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
function About() {
  return (
    <AboutBlock>
      <SEO siteTitle="About" canonicalHref="/About" />
      <AboutTitle>About</AboutTitle>
      <AboutContext>
        Hello, I&apos;m <b>SynCROSS</b>,
        <br />
        The <b>MERN</b> Stack Developer.
        <br />I Love&nbsp;
        <b>Learning New Things</b>
        <br />
        So I Learnt&nbsp;<b>Javascript</b>, &nbsp;
        <b>Typescript</b>,&nbsp;
        <br />
        <b>React</b>, &nbsp;<b>Next.js</b>, &nbsp;
        <b>Node.js</b>, &nbsp;<b>PostgreSQL</b>, etc.
        <br />
        If&nbsp;
        <b>U Wanna Hire</b>
        &nbsp;Me
        <br />
        Please&nbsp;
        <b>Contact</b>
        .
        <br />I Hope You Feel So Good. (●&apos;◡&apos;●)
      </AboutContext>
    </AboutBlock>
  );
}

export default About;
