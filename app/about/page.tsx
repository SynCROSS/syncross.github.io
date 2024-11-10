import classNames from 'classnames';
import { getMetadata } from 'lib/utility/seo';

export const metadata = getMetadata({
  siteTitle: 'About',
  canonicalHref: '/about'
});

// skipcq: JS-D1001
function About() {
  return (
    <>
      <h1
        className={classNames(
          'text-5xl mb-4',
          'max-[640px]:text-4xl',
          'min-[2560px]:text-7xl',
          'min-[3840px]:text-8xl',
        )}
      >
        About
      </h1>
      <p
        className={classNames(
          'text-left text-2xl mx-4',
          'max-[640px]:text-lg',
          'min-[2560px]:text-4xl',
          'min-[3840px]:text-6xl',
        )}
      >
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
      </p>
    </>
  );
}

export default About;
