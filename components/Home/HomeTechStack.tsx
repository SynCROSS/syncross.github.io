import { Children } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const HomeTechStackBlock = styled.div`
  margin: 20px auto;
`;

const TechStackTitle = styled.h1`
  font-size: 3rem;
  margin: 20px auto;
`;

const TechList = styled.ul.attrs(() => ({
  className: 'flex jc-center ai-center',
}))`
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
`;

const TechListItem = styled.li`
  border-radius: 50px;
  background: #f8f8f8;
  box-shadow: 10px 10px 20px #cccccc, -10px -10px 20px #ffffff;
  padding: 20px;
  margin: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fcfcfc;
  }
`;

const techStacks = ['mongodb', 'express', 'react', 'nodedotjs'];

/**
 * Get Tech Stack Icon URL
 * @param techStack Tech Stack name
 * @returns {string} Tech Stack Icon URL
 */
const getIconURL = (techStack: string): string =>
  `https://unpkg.com/simple-icons@v5/icons/${techStack}.svg`;
// skipcq: JS-D1001
function HomeTechStack(): JSX.Element {
  return (
    <HomeTechStackBlock>
      <TechStackTitle>Tech Stack</TechStackTitle>
      <TechList>
        {Array.isArray(techStacks) &&
          Children.toArray(
            techStacks.map(techStack => (
              <TechListItem>
                <Image
                  src={getIconURL(`${techStack}`)}
                  title={`${techStack}`}
                  alt={`${techStack}`}
                  width={70}
                  height={70}
                  quality={100}
                  loading="lazy"
                />
              </TechListItem>
            )),
          )}
      </TechList>
    </HomeTechStackBlock>
  );
}

export default HomeTechStack;
