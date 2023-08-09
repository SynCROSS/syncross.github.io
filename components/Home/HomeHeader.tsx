'use client';

import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { bindStyle } from 'lib/utility/style';
import Link from 'next/link';
import { ElementRef, useCallback, useRef } from 'react';
import styles from 'styles/home/HomeHeader.module.css';

const cx = bindStyle(styles);

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
        'flex justify-center items-center flex-col w-full min-h-[90vh] py-8 px-0 relative'
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
          'text-center text-3xl mx-1',
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
          'link-button',
          ' bg-neutral-950 text-white cursor-pointer relative leading-3 p-3 rounded-full mt-2 text-sm',
          'md:mt-4',
          'xl:px-4 xl:text-lg xl:mt-5',
          '2xl:py-4 2xl:px-7 2xl:text-xl',
          'min-[2560px]:py-6 min-[2560px]:px-8 min-[2560px]:text-2xl',
          'min-[3840px]:py-10 min-[3840px]:px-11 min-[3840px]:text-4xl min-[3840px]:mt-10',
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
        className={cx('arrow-button')}
        title="Scroll Down Button"
        onClick={scrollToHomeHeader}
      >
        <FontAwesomeIcon
          className={cx('arrow-down-icon motion-safe:transition-all')}
          icon={faArrowDown}
        />
      </button>
    </section>
  );
}

export default HomeHeader;
