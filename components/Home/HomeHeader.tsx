import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomeHeaderBlock = styled.div.attrs(props => ({
  ...props,
  className: 'flex jc-center ai-center flex-direction-col',
}))`
  min-height: 95vh;
  min-width: 100vw;
  background: linear-gradient(165deg, #e9e9e9 50%, #fff 50%);
`;

const HeadLine = styled.h1`
  font-size: 5rem;

  margin: 0 auto 20px;
  line-height: 1.2;
`;

const Job = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #aaa;
`;

const RouterLink = styled.a.attrs(() => ({ className: 'flex ai-center' }))`
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

  right: 1.2rem;
  opacity: 0.5;

  &:hover {
    right: 1rem;
    opacity: 1;
  }
`;

const ArrowButton = styled.button.attrs(props => ({
  ...props,
  className: 'flex jc-center ai-center',
}))`
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

/**
 * Scroll To 'HomeHeader' Component
 */
const scrollToHomeHeader = (): void => {
  if (typeof document !== 'undefined') {
    window?.scrollTo({
      top: document?.getElementById?.('HomeHeader')?.offsetHeight ?? 0 + 10,
      behavior: 'smooth',
    });
  }
};

// skipcq: JS-D1001
function MyWorksButton(): JSX.Element {
  return (
    <Link href="/Work" passHref>
      <RouterLink>
        <span
          style={{
            display: 'inline-block',
            height: '1rem',
            lineHeight: '1rem',
            fontWeight: 500,
          }}
        >
          My Works
        </span>
        &nbsp;
        <ArrowRightIcon icon={faArrowRight} />
      </RouterLink>
    </Link>
  );
}

// skipcq: JS-D1001
function HomeHeader(): JSX.Element {
  return (
    <HomeHeaderBlock id="HomeHeader">
      <Job>MERN Stack Developer</Job>
      <HeadLine>
        SynCROSS, <br /> The Knowledge Explorer
      </HeadLine>
      <MyWorksButton />
      <ArrowButton
        id="arrowScrollButton"
        title="Scroll Down Button"
        onClick={scrollToHomeHeader}
      >
        <ArrowDownIcon icon={faArrowDown} />
      </ArrowButton>
    </HomeHeaderBlock>
  );
}

export default HomeHeader;
