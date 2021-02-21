import styled from 'styled-components';

const HomeTechStackBlock = styled.section`
  width: 30%;
  margin: 20px auto;

  & > h1 {
    font-size: 3rem;
    margin: 20px auto;
  }

  & > .tech_list {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  & > .tech_list > img {
    border-radius: 50%;
    background: #f0f0f0;
    box-shadow: 10px 10px 20px #cccccc, -10px -10px 20px #ffffff;
    padding: 30px;
    margin: 15px;
    transition: all 0.2s ease-in-out;
  }

  & > .tech_list > img:hover {
    background-color: #f8f8f8;
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
      <h1 id="Tech Stack">Tech Stack</h1>
      <div className="tech_list flex ai-center ">
        {techStacks?.map(techStack => (
          <img
            key={`${techStack}`}
            height="100"
            width="100"
            src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${techStack}.svg`}
            title={`${techStack}`}
            alt={`${techStack}`}
          />
        ))}
      </div>
    </HomeTechStackBlock>
  );
};

export default HomeTechStack;
