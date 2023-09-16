'use client';

import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import { type ElementRef, useCallback, useRef } from 'react';

// skipcq: JS-D1001
function HomeHeader() {
  const headerRef = useRef<ElementRef<'section'>>(null);
  /**
   * Scroll To 'HomeHeader' Component
   */
  const scrollToHomeHeader = useCallback(() => {
    scrollTo({
      top: (headerRef.current?.offsetHeight ?? 0) + 10,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section
      ref={headerRef}
      className={
        'relative flex min-h-[90vh] w-full flex-col items-center justify-center px-0 py-8'
      }
      style={{
        backgroundImage: 'linear-gradient(165deg, #e9e9e9 50%, #fff 50%)',
      }}
    >
      <h3
        className={classNames(
          'text-base font-light text-neutral-400',
          'md:text-lg',
          'xl:text-xl',
          '2xl:text-2xl',
          'min-[3840px]:text-5xl',
        )}
      >
        MERN Stack Developer
      </h3>
      <h1
        className={classNames(
          'mx-1 text-center text-3xl font-medium',
          'md:text-5xl',
          'xl:text-6xl',
          '2xl:text-7xl',
          'min-[2560px]:text-8xl',
          'min-[3840px]:text-9xl',
        )}
      >
        SynCROSS, <br /> The Knowledge Explorer
      </h1>
      <Link
        className={classNames(
          'arrow-right-link-button',
          ' relative mt-2 cursor-pointer rounded-full bg-neutral-950 p-3 text-sm leading-3 text-white',
          'md:mt-4',
          'xl:mt-5 xl:px-4 xl:text-lg',
          '2xl:px-7 2xl:py-4 2xl:text-xl',
          'min-[2560px]:px-8 min-[2560px]:py-6 min-[2560px]:text-2xl',
          'min-[3840px]:mt-10 min-[3840px]:px-11 min-[3840px]:py-10 min-[3840px]:text-4xl',
        )}
        href="/work"
      >
        <span className={'font-medium'}>
          My Works
          <FontAwesomeIcon
            className={classNames(
              'ml-2 motion-safe:transition-all',
              '2xl:ml-3',
              'min-[2560px]:ml-4',
              'min-[3840px]:ml-8',
            )}
            icon={faArrowRight}
          />
        </span>
      </Link>
      <button
        className={classNames(
          'arrow-down-scroll-button',
          'absolute bottom-[-1.5em] h-12 w-12 bg-black text-xl text-neutral-100 hover:bg-neutral-900',
          'xl:h-20 xl:w-20 xl:text-3xl',
          'min-[2560px]:bottom-[-1.4em] min-[2560px]:h-28 min-[2560px]:w-28 min-[2560px]:text-5xl',
          'min-[3840px]:bottom-[-1.5em] min-[3840px]:h-40 min-[3840px]:w-40 min-[3840px]:text-6xl',
        )}
        title="Scroll Down Button"
        onClick={scrollToHomeHeader}
      >
        <FontAwesomeIcon
          className={classNames('motion-safe:transition-all')}
          icon={faArrowDown}
        />
      </button>
    </section>
  );
}

export default HomeHeader;
