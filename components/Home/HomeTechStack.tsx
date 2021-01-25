import styled from 'styled-components';

const HomeTechStackBlock = styled.section`
  width: 50%;
  margin: 20px auto;

  & > h1 {
    font-size: 3rem;
  }
`;

const HomeTechStack = () => {
  return (
    <HomeTechStackBlock>
      <h1>Tech Stack</h1>
    </HomeTechStackBlock>
  );
};

export default HomeTechStack;
