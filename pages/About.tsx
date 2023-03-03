import Seo from 'components/common/Seo';

// skipcq: JS-D1001
function About() {
  return (
    <main className="flex jc-center ai-center flex-direction-col about">
      <Seo siteTitle="About" canonicalHref="/About" />
      <h1 className="about-title">About</h1>
      <p className="about-description">
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
      <style jsx>
        {`
          .about {
            margin: auto;
          }
          .about-title {
            font-size: 3rem;
          }
          .about-description {
            text-align: left;
            font-size: 1.5rem;
            margin: 0 1.5rem;
          }
          @media only screen and (max-width: 600px) {
            .about-title {
              font-size: 2.4rem;
            }
            .about-description {
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </main>
  );
}

export default About;
