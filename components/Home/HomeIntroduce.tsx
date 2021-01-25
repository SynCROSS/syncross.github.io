import styled from 'styled-components';
import Image from 'next/image';

const HomeIntroduceBlock = styled.section`
  width: 100%;
  min-height: 50vh;
  text-align: left;
  padding: 50px;
  background-color: #111;
  color: #fefefe;

  & > .intro_wrapper {
    width: 25%;
  }

  & > .intro_wrapper > .introduce_title {
    font-size: 3rem;
    margin: 20px 0;
  }

  & > .intro_wrapper > .introduce {
    color: #acacac;
    width: 80%;
    font-size: 1.2rem;
    margin: 10px 0;
  }

  & > div > img {
    border-radius: 50%;
  }
`;

const HomeIntroduce = () => {
  return (
    <HomeIntroduceBlock className="flex jc-center ai-center">
      <div className="intro_wrapper flex jc-center flex-direction-col">
        <h1 className="introduce_title">Introduce</h1>
        <p className="introduce">
          Hello, I'm SynCROSS. I'm a Frontend developer and I love learning
          things. That's why I've been learning many frameworks, libraries, and
          other technologies since I first started developing them. Recently,
          I've been studying trends mainly.
        </p>
      </div>
      <Image src="/icon.svg" width={200} height={200} />
    </HomeIntroduceBlock>
  );
};

export default HomeIntroduce;
