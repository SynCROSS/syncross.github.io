import styled from 'styled-components';

const HomeTechStackBlock = styled.section`
  width: 30%;
  margin: 20px auto;
`;

const TechStackTitle = styled.h1`
    font-size: 3rem;
    margin: 20px auto;
  }
`;

const TechList = styled.div`
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const TechListImage = styled.img`
  width: 100;
  height: 100;
  border-radius: 50%;
  background: #f0f0f0;
  box-shadow: 10px 10px 20px #cccccc, -10px -10px 20px #ffffff;
  padding: 30px;
  margin: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const HomeTechStack = () => {
  const techStacks = [
    'mongodb',
    'express',
    'react',
    'node-dot-js',
    'redux',
    'typescript',
    'styled-components',
    'socket-dot-io',
    'sass',
    'mysql',
    'oracle',
    'jest',
    'go',
    'python',
    'graphql',
    'apollographql',
    'next-dot-js',
    'vercel',
    'svelte',
    'gatsby',
  ];

  return (
    <HomeTechStackBlock>
      <TechStackTitle>Tech Stack</TechStackTitle>
      <TechList className="flex ai-center ">
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
