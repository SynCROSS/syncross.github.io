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
  border-radius: 50%;
`;

const HomeIntroduce = () => {
  return (
    <HomeIntroduceBlock className="flex jc-center ai-center">
      <IntroWrapper className="flex jc-center ai-center">
        <IntroContext className="flex flex-direction-col">
          <IntroduceTitle>Introduce</IntroduceTitle>
          <Introduce>
            Hello, I'm SynCROSS. I'm a Frontend developer and I love learning
            new things. That's why I've been learning many frameworks,
            libraries, and other technologies since I first started developing
            them. Recently, I've been studying trends mainly.
          </Introduce>
        </IntroContext>
        <ImgBlock src="/icon.svg" width={1000} height={1000} />
      </IntroWrapper>
    </HomeIntroduceBlock>
  );
};

export default HomeIntroduce;
