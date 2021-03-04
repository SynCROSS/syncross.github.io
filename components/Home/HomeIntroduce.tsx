import styled from 'styled-components';
import Image from 'next/image';

const HomeIntroduceBlock = styled.section`
  width: 100%;
  min-height: 50vh;
  text-align: left;
  padding: 50px;
  background-color: #111;
  color: #fefefe;
`;

const IntroWrapper = styled.div`
  width: 25%;
`;

const IntroduceTitle = styled.h1`
  font-size: 3rem;
  margin: 20px 0;
`;

const Introduce = styled.p`
  color: #acacac;
  width: 80%;
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ImgBlock = styled(Image)`
  border-radius: 50%;
`;

const HomeIntroduce = () => {
  return (
    <HomeIntroduceBlock className="flex jc-center ai-center">
      <IntroWrapper className="flex jc-center flex-direction-col">
        <IntroduceTitle>Introduce</IntroduceTitle>
        <Introduce>
          Hello, I'm SynCROSS. I'm a Frontend developer and I love learning
          things. That's why I've been learning many frameworks, libraries, and
          other technologies since I first started developing them. Recently,
          I've been studying trends mainly.
        </Introduce>
      </IntroWrapper>
      <ImgBlock src="/icon.svg" width={200} height={200} />
    </HomeIntroduceBlock>
  );
};

export default HomeIntroduce;
