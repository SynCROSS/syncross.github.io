import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import css from 'styled-jsx/css';

const routerLink = css.resolve`
  a {
    background-color: #111;
    color: #fff;
    border-radius: 50px;
    font-size: 1.2rem;

    cursor: pointer;
    padding: 1.2rem 1.5rem;
    position: relative;
  }
  @media (hover: hover) {
    a > :global(svg) {
      opacity: 0.5;
    }
    a:hover > :global(svg) {
      opacity: 1;
      transform: translate(5px, 0);
    }
  }
`;

const arrowRightIcon = css.resolve`
  svg {
    margin-left: 0.5rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    svg {
      transition: all 0.15s ease-in-out;
    }
  }
`;

const arrowDownIcon = css.resolve`
  svg {
    width: 2rem;
  }
  @media (prefers-reduced-motion: no-preference) {
    svg {
      transition: all 0.2s ease-in-out;
    }
  }
`;

// skipcq: JS-D1001
function MyWorksButton() {
  return (
    <Link className={routerLink.className} href="/Work">
      <span className="inline-medium-text">My Works</span>
      <FontAwesomeIcon
        className={arrowRightIcon.className}
        icon={faArrowRight}
      />
      <style jsx>
        {`
          .inline-medium-text {
            font-weight: 500;
          }
        `}
      </style>
      {routerLink.styles}
      {arrowRightIcon.styles}
    </Link>
  );
}

// skipcq: JS-D1001
function HomeHeader() {
  const headerRef = useRef<HTMLElement>(null);
  /**
   * Scroll To 'HomeHeader' Component
   */
  const scrollToHomeHeader = useCallback(() => {
    scrollTo({
      top: (headerRef.current?.offsetHeight ?? 0) + 70,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section
      ref={headerRef}
      className="flex jc-center ai-center flex-direction-col home-header"
    >
      <h3 className="job">MERN Stack Developer</h3>
      <h1 className="headline">
        SynCROSS, <br /> The Knowledge Explorer
      </h1>
      <MyWorksButton />
      <button
        className="arrow-button"
        title="Scroll Down Button"
        onClick={scrollToHomeHeader}
      >
        <FontAwesomeIcon
          className={arrowDownIcon.className}
          icon={faArrowDown}
        />
      </button>
      <style jsx>
        {`
          .home-header {
            width: 100vw;
            min-height: 90vh;

            background: linear-gradient(165deg, #e9e9e9 50%, #fff 50%);

            position: relative;
          }
          .headline {
            font-size: 5rem;

            margin: 0 auto 20px;
            line-height: 1.2;
          }
          .job {
            font-size: 1.5rem;
            font-weight: 300;
            color: #aaa;
          }
          .arrow-button {
            width: 5rem;
            height: 5rem;

            position: absolute;
            bottom: -3rem;

            font-size: 2rem;
            color: #f8f8f8;
            background-color: #000;
          }
          @media (hover: hover) {
            .arrow-button:hover {
              background-color: #1c1c1c;
            }
            .arrow-button:hover > :global(svg) {
              transform: translate(0, 5px);
            }
          }
          @media all and (min-width: 480px) and (max-width: 768px) {
            .headline {
              font-size: 3rem !important;
            }
          }
          /* iPhone Portrait */
          @media screen and (max-device-width: 480px) and (orientation: portrait) {
            .headline {
              font-size: 3rem;
            }
          }
          /* iPhone Landscape */
          @media screen and (max-device-width: 480px) and (orientation: landscape) {
            .headline {
              font-size: 3rem;
            }
          }
          /* iPad Landscape */
          @media screen and (min-device-width: 481px) and (orientation: landscape) {
            .headline {
              font-size: 4rem;
            }
          }
        `}
      </style>
      {arrowDownIcon.styles}
    </section>
  );
}

export default HomeHeader;
