import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const HomeHeaderBlock = styled.header`
  min-height: 95vh;
  min-width: 100vw;
  background: linear-gradient(165deg, #f5f5f5 50%, #fff 50%);
`;

const HeadLine = styled.h1`
  font-weight: 900;
  font-size: 5rem;

  margin: 0 auto 20px;
  line-height: 1.2;
`;

const Job = styled.h3`
  font-size: 1.5rem;
  font-weight: 100;
  color: #aaa;
`;

const RouterLink = styled.a`
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;

  cursor: pointer;
  padding: 1rem 40px 1rem 20px;
  position: relative;
  width: 10rem;
`;

const FontAwesomeIconBlock = styled(FontAwesomeIcon)`
  margin-left: 10px;
  position: absolute;
  top: 50.5%;

  transition: all 0.15s ease-in-out;
  opacity: 0.5;
  transform: translate(0, -50%);
`;

const ArrowButton = styled.button`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 92vh;

  font-size: 2rem;
  color: #f8f8f8;
  background-color: #000;

  &:hover {
    background-color: #1c1c1c;
    color: #fff;
  }
`;

const HomeHeader = () => {
  const [right, setRight] = useState(false);
  const toggleRight = () => setRight(!right);

  function movePresentScroll(event) {
    window.scrollTo(event.pageX, event.pageY + 10);
  }

  return (
    <HomeHeaderBlock className="flex jc-center ai-center flex-direction-col">
      <Job>Frontend Developer</Job>
      <HeadLine>
        SynCROSS, <br /> The Knowledge Explorer
      </HeadLine>
      <Link href="/Work">
        <RouterLink onMouseOver={toggleRight} onMouseOut={toggleRight}>
          My Work{' '}
          <FontAwesomeIconBlock
            icon={faArrowRight}
            style={
              right && right
                ? { right: '1.2rem', opacity: '1' }
                : { right: '1.5rem', opacity: '.5' }
            }
          />
        </RouterLink>
      </Link>
      <ArrowButton onClick={movePresentScroll}>
        <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
      </ArrowButton>
    </HomeHeaderBlock>
  );
};

export default HomeHeader;
