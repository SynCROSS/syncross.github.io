import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import styled from 'styled-components';

const HomeHeaderBlock = styled.div`
  width: 100vw;
  min-height: 90vh;

  background: linear-gradient(165deg, #e9e9e9 50%, #fff 50%);

  position: relative;
`;

const HeadLine = styled.h1`
  font-size: 5rem;

  margin: 0 auto 20px;
  line-height: 1.2;

  /*------------------------------------------
  Responsive Grid Media Queries - 1280, 1024, 768, 480
   1280-1024   - desktop (default grid)
   1024-768    - tablet landscape
   768-480     - tablet 
   480-less    - phone landscape & smaller
--------------------------------------------*/
  /* @media all and (min-width: 1024px) and (max-width: 1280px) {
    background-color: #111;
  } */

  /* @media all and (min-width: 768px) and (max-width: 1024px) {
    background-color: #222;
  } */

  @media all and (min-width: 480px) and (max-width: 768px) {
    font-size: 3rem !important;
  }

  /* @media all and (max-width: 480px) {
    background-color: #444;
  } */

  /* Portrait */
  /* @media screen and (orientation: portrait) {
    background-color: #555;
  } */
  /* Landscape */
  /* @media screen and (orientation: landscape) {
    background-color: #666;
  } */

  /* CSS for iPhone, iPad, and Retina Displays */

  /* Non-Retina */
  /* @media screen and (-webkit-max-device-pixel-ratio: 1) {
    background-color: #777;
  } */

  /* Retina */
  /* @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 3/2),
    only screen and (min--moz-device-pixel-ratio: 1.5),
    only screen and (min-device-pixel-ratio: 1.5) {
    background-color: #888;
  } */

  /* iPhone Portrait */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    font-size: 3rem;
  }

  /* iPhone Landscape */
  @media screen and (max-device-width: 480px) and (orientation: landscape) {
    font-size: 3rem;
  }

  /* iPad Portrait */
  /* @media screen and (min-device-width: 481px) and (orientation: portrait) {
    background-color: #bbb;
  } */

  /* iPad Landscape */
  @media screen and (min-device-width: 481px) and (orientation: landscape) {
    font-size: 4rem;
  }
`;

const Job = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #aaa;
`;

const RouterLink = styled(Link)`
  background-color: #111;
  color: #fff;
  border-radius: 50px;
  font-size: 1.2rem;

  cursor: pointer;
  padding: 1.2rem 1.5rem;
  position: relative;
`;

const InlineMediumText = styled.span`
  font-weight: 500;
`;

const ArrowRightIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;

  @media (hover: hover) {
    transition: all 0.15s ease-in-out;
    opacity: 0.5;

    opacity: 0.5;

    &:hover {
      transform: translate(0.5rem, 0);
      opacity: 1;
    }
  }
`;

const ArrowButton = styled.button`
  width: 5rem;
  height: 5rem;

  position: absolute;
  bottom: -3rem;

  font-size: 2rem;
  color: #f8f8f8;
  background-color: #000;

  @media (hover: hover) {
    transition: all 0.2s ease-in-out;
    transform: translate();
    &:hover {
      background-color: #222;
      color: #fff;
    }
  }
`;

const ArrowDownIcon = styled(FontAwesomeIcon)`
  width: 2rem;
`;

// skipcq: JS-D1001
function MyWorksButton(): JSX.Element {
  return (
    <RouterLink href="/Work" className="flex ai-center">
      <InlineMediumText>My Works</InlineMediumText>
      <ArrowRightIcon icon={faArrowRight} />
    </RouterLink>
  );
}

// skipcq: JS-D1001
function HomeHeader(): JSX.Element {
  const headerRef = useRef<HTMLDivElement>(null);
  /**
   * Scroll To 'HomeHeader' Component
   */
  const scrollToHomeHeader = useCallback(() => {
    if (typeof window !== 'undefined') {
      window?.scrollTo({
        top: (headerRef.current?.offsetHeight ?? 0) + 70,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <HomeHeaderBlock
      ref={headerRef}
      className="flex jc-center ai-center flex-direction-col"
    >
      <Job>MERN Stack Developer</Job>
      <HeadLine>
        SynCROSS, <br /> The Knowledge Explorer
      </HeadLine>
      <MyWorksButton />
      <ArrowButton
        className="flex jc-center ai-center"
        title="Scroll Down Button"
        onClick={scrollToHomeHeader}
      >
        <ArrowDownIcon icon={faArrowDown} />
      </ArrowButton>
    </HomeHeaderBlock>
  );
}

export default HomeHeader;
