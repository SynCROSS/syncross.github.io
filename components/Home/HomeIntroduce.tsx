import Image from 'next/image';
import styled from 'styled-components';

const HomeIntroduceBlock = styled.section`
  width: 100%;
  padding: 10rem;

  text-align: start;
  background-color: #111111;
  color: #fefefe;
  min-height: 100vh;
`;

const IntroWrapper = styled.div`
  width: 60%;
`;

const IntroduceTitle = styled.h1`
  font-size: 5rem;
`;

const IntroduceContent = styled.p`
  color: #acacac;
  font-size: 1.2rem;

  padding: 0 7px;
`;

// skipcq: JS-D1001
function Intro(): JSX.Element {
  return (
    <div style={{ marginRight: '5rem' }} className="flex flex-direction-col">
      <IntroduceTitle>Introduce</IntroduceTitle>
      <IntroduceContent>
        Oh hi there! My name is SynCROSS, <br />
        Frontend Developer and boy do I love learning new things. <br />
        I&apos;ve amassed a great deal of skills due to my passion for
        constantly learning new languages, frameworks, and other technologies.
        I have experience with:
        NextJS, TypeScript, Express, NestJS, MongoDB, MySQL, Oracle, Spring Boot.,
      </IntroduceContent>
    </div>
  );
}

// skipcq: JS-D1001
function HomeIntroduce(): JSX.Element {
  return (
    <HomeIntroduceBlock id="HomeIntroduce" className="flex jc-center ai-center">
      <IntroWrapper className="flex jc-center ai-center">
        <Intro />
        <Image
          src="/icon.svg"
          width={300}
          height={300}
          alt="SynCROSS"
          loading="lazy"
          style={{ aspectRatio: 1, borderRadius: '50%' }}
        />
      </IntroWrapper>
    </HomeIntroduceBlock>
  );
}

export default HomeIntroduce;
