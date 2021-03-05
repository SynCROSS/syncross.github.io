import styled from 'styled-components';

const HomeTechStackBlock = styled.section`
  width: 50%;
  margin: 20px auto;
`;

const TechStackTitle = styled.h1`
  font-size: 3rem;
  margin: 20px auto;
`;

const TechList = styled.div`
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TechListImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: #f8f8f8;
  box-shadow: 10px 10px 20px #cccccc, -10px -10px 20px #ffffff;
  padding: 40px;
  margin: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fcfcfc;
  }
`;

const HomeTechStack = () => {
  const techStacks = ['mongodb', 'express', 'react', 'node-dot-js'];

  return (
    <HomeTechStackBlock>
      <TechStackTitle>Tech Stack</TechStackTitle>
      <TechList className="flex ai-center">
        {techStacks?.map(techStack => (
          <TechListImage
            key={`${techStack}`}
            src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${techStack}.svg`}
            title={`${techStack}`}
            alt={`${techStack}`}
          />
        ))}
      </TechList>
    </HomeTechStackBlock>
  );
};

export default HomeTechStack;
