import styled from 'styled-components';
import Image from 'next/image';

const HomeIntroduceBlock = styled.section.attrs(props => ({
  ...props,
  className: 'flex jc-center ai-center',
}))`
  width: 100%;
  padding: 10rem;

  text-align: left;
  background-color: #111;
  color: #fefefe;
  min-height: 100vh;
`;

const IntroWrapper = styled.div.attrs(() => ({
  className: 'flex jc-center ai-center',
}))`
  width: 60rem;
  margin: auto;
`;

const IntroduceTitle = styled.h1`
  font-size: 5rem;
`;

const IntroduceContent = styled.p`
  color: #acacac;
  font-size: 1.2rem;

  padding: 0 7px;
`;

const ImgBlock = styled(Image)`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;

const introduce =
  'Oh hi there! My name is SynCROSS,\n' +
  'Frontend Developer and boy do I love learning new things.\n' +
  "I've amassed a great deal of skills due to my passion for " +
  'constantly learning new languages, frameworks, and other technologies. ' +
  'I have experience with: ' +
  'NextJS, TypeScript, Express, NestJS, MongoDB, MySQL, Oracle, Spring Boot.';

// skipcq: JS-D1001
function IntroduceText({ str }: { str: string }): JSX.Element {
  return (
    <span key={str}>
      {str} <br />
    </span>
  );
}

// skipcq: JS-D1001
function Intro(): JSX.Element {
  return (
    <div style={{ marginRight: '5rem' }} className="flex flex-direction-col">
      <IntroduceTitle>Introduce</IntroduceTitle>
      <IntroduceContent>
        {introduce.split('\n').map(str => (
          <IntroduceText key={str} str={str} />
        ))}
      </IntroduceContent>
    </div>
  );
}

// skipcq: JS-D1001
function HomeIntroduce(): JSX.Element {
  return (
    <HomeIntroduceBlock id="HomeIntroduce">
      <IntroWrapper>
        <Intro />
        <ImgBlock
          src="/icon.svg"
          width={1000}
          height={1000}
          alt="SynCROSS"
          loading="eager"
          placeholder="blur"
        />
      </IntroWrapper>
    </HomeIntroduceBlock>
  );
}

export default HomeIntroduce;
