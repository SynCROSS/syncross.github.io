import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useCallback } from 'react';

const HomeHeaderBlock = styled.header`
  min-height: 95vh;
  min-width: 100vw;
  background: linear-gradient(165deg, #e9e9e9 50%, #fff 50%);
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
  width: auto;
`;

const ArrowRightIcon = styled(FontAwesomeIcon)`
  width: 1rem;
  margin-left: 10px;
  position: absolute;
  top: 50%;

  transition: all 0.15s ease-in-out;
  opacity: 0.5;
  transform: translate(0, -50%);
`;

const ArrowButton = styled.button`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 92vh;

  transition: all 0.2s ease-in-out;
  scroll-behavior: smooth;
  font-size: 2rem;
  color: #f8f8f8;
  background-color: #000;

  &:hover {
    background-color: #1c1c1c;
    color: #fff;
  }
`;

const ArrowDownIcon = styled(FontAwesomeIcon)`
  width: 2rem;
`;

const HomeHeader = () => {
  const [right, setRight] = useState(false);

  const moveCurrentScroll = () =>
    typeof document !== 'undefined' &&
    window?.scrollTo({
      top: document?.getElementById?.('HomeHeader')?.offsetHeight + 10,
      behavior: 'smooth',
    });

  const toggleRight = useCallback(() => setRight(right => !right), []);

  return (
    <HomeHeaderBlock
      id="HomeHeader"
      className="flex jc-center ai-center flex-direction-col"
    >
      <Job>Frontend Developer</Job>
      <HeadLine>
        SynCROSS, <br /> The Knowledge Explorer
      </HeadLine>
      <Link href="/Work" passHref>
        <RouterLink
          onMouseOver={toggleRight}
          onMouseOut={toggleRight}
          className="flex ai-center"
        >
          <span
            style={{
              lineHeight: '1rem',
              height: '1rem',
              display: 'inline-block',
            }}
          >
            My Works
          </span>
          &nbsp;
          <ArrowRightIcon
            icon={faArrowRight}
            style={
              right
                ? { right: '1rem', opacity: '1' }
                : { right: '1.2rem', opacity: '.5' }
            }
          />
        </RouterLink>
      </Link>
      <ArrowButton
        id="arrowScrollButton"
        className="flex jc-center ai-center"
        title="Scroll Down Button"
        onClick={moveCurrentScroll}
      >
        <ArrowDownIcon icon={faArrowDown}></ArrowDownIcon>
      </ArrowButton>
    </HomeHeaderBlock>
  );
};

export default HomeHeader;
