import styled from 'styled-components';
import Image from 'next/image';

const HomeIntroduceBlock = styled.section`
  width: 100%;
  padding: 10rem;

  text-align: left;
  background-color: #111;
  color: #fefefe;
  min-height: 100vh;
`;

const IntroWrapper = styled.div`
  width: 60rem;
  margin: auto;
`;

const IntroduceTitle = styled.h1`
  font-size: 5rem;
`;

const IntroContext = styled.div`
  margin-right: 5rem;
`;

const Introduce = styled.p`
  color: #acacac;
  font-size: 1.2rem;

  padding: 0 7px;
`;

const ImgBlock = styled(Image)`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;

const HomeIntroduce = () => {
  return (
    <HomeIntroduceBlock id="HomeIntroduce" className="flex jc-center ai-center">
      <IntroWrapper className="flex jc-center ai-center">
        <IntroContext className="flex flex-direction-col">
          <IntroduceTitle>Introduce</IntroduceTitle>
          <Introduce>
            Hello, I'm a Junior Frontend Developer and I love learning new
            things. <br />
            That's why I've been learning many frameworks, libraries, and other
            technologies since I first started developing. <br />
            I Can Code With 'NextJS', 'TypeScript', 'Express', 'NestJS',
            'MongoDB', 'MySQL', 'Oracle', 'Spring Boot', and more. <br />{' '}
            Recently, I've been studying trends mainly.
            <br />
            Every time I codes, I think What Makes Better UX & Good Codes.{' '}
            <br />
          </Introduce>
        </IntroContext>
        <ImgBlock
          src="/icon.svg"
          width={1000}
          height={1000}
          alt=""
          loading="eager"
        />
      </IntroWrapper>
    </HomeIntroduceBlock>
  );
};

export default HomeIntroduce;
