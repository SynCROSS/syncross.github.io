import Image from 'next/image';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type CenteredSectionProps = PropsWithChildren<{
  className?: HTMLAttributes<HTMLElement>['className'];
}>;
// skipcq: JS-D1001
const CenteredSection: FC<CenteredSectionProps> = function CenteredSection({
  children,
  className = '',
}) {
  return (
    <section className={`flex ai-center jc-center ${className}`}>
      {children}
    </section>
  );
};

CenteredSection.defaultProps = {
  className: '',
};

type CenteredBlockProps = PropsWithChildren<{
  className?: HTMLAttributes<HTMLDivElement>['className'];
}>;
// skipcq: JS-D1001
const CenteredBlock: FC<CenteredBlockProps> = function CenteredBlock({
  children,
  className = '',
}) {
  return (
    <div className={`flex ai-center jc-center ${className}`}>{children}</div>
  );
};

CenteredBlock.defaultProps = {
  className: '',
};

const HomeIntroduceBlock = styled(CenteredSection)`
  width: 100%;

  text-align: start;
  background-color: #111111;
  color: #fefefe;
  min-height: 100vh;
`;

const IntroWrapper = styled(CenteredBlock)`
  width: 60%;

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap-reverse;
  }
`;

const IntroBlock = styled.div`
  margin-right: 5rem;
  margin-top: 0;

  @media only screen and (max-width: 600px) {
    margin-right: 0;
    margin-top: 5rem;
  }
`;

const IntroduceTitle = styled.h1`
  font-size: 4em;
`;

const IntroduceContent = styled.p`
  color: #acacac;
  font-size: 1.2rem;

  padding: 0 7px;
`;

// skipcq: JS-D1001
function Intro(): JSX.Element {
  return (
    <IntroBlock>
      <IntroduceTitle>Introduce</IntroduceTitle>
      <IntroduceContent>
        Oh hi there! My name is SynCROSS, <br />
        Frontend Developer and boy do I love learning new things. <br />
        I&apos;ve amassed a great deal of skills due to my passion for
        constantly learning new languages, frameworks, and other technologies. I
        have experience with: NextJS, TypeScript, Express, NestJS, MongoDB,
        MySQL, Oracle, Spring Boot.,
      </IntroduceContent>
    </IntroBlock>
  );
}

// skipcq: JS-D1001
function HomeIntroduce(): JSX.Element {
  return (
    <HomeIntroduceBlock>
      <IntroWrapper>
        <Intro />
        <Image
          src="/icon.svg"
          width={300}
          height={300}
          alt="SynCROSS"
          loading="lazy"
          // skipcq: JS-0394
          style={{ aspectRatio: 1, borderRadius: '50%' }}
        />
      </IntroWrapper>
    </HomeIntroduceBlock>
  );
}

export default HomeIntroduce;
