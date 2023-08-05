import { getMetadata } from 'lib/utility/seo';
import { bindStyle } from 'lib/utility/style';

import styles from 'styles/About.module.css';

export const metadata = getMetadata({
  siteTitle: 'About',
  canonicalHref: '/about',
});

const cx = bindStyle(styles);

// skipcq: JS-D1001
function About() {
  return (
    <main
      className={cx('flex jc-center ai-center flex-direction-col', 'about')}
    >
      <h1 className={cx('about-title')}>About</h1>
      <p className={cx('about-description')}>
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
    </main>
  );
}

export default About;
