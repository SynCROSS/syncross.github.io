import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindStyle } from 'lib/utility/style';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import styles from 'styles/home/HomeHeader.module.css';

const cx = bindStyle(styles);

// skipcq: JS-D1001
function HomeHeader() {
  const headerRef = useRef<HTMLElement>(null);
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
      className={cx(
        'flex jc-center ai-center flex-direction-col',
        'home-header',
      )}
    >
      <h3 className={cx('job')}>MERN Stack Developer</h3>
      <h1 className={cx('headline')}>
        SynCROSS, <br /> The Knowledge Explorer
      </h1>
      <Link className={cx('link-button')} href="/Work">
        <span className={cx('inline-medium-text')}>My Works</span>
        <FontAwesomeIcon
          className={cx('arrow-right-icon')}
          icon={faArrowRight}
        />
      </Link>
      <button
        className={cx('arrow-button')}
        title="Scroll Down Button"
        onClick={scrollToHomeHeader}
      >
        <FontAwesomeIcon className={cx('arrow-down-icon')} icon={faArrowDown} />
      </button>
    </section>
  );
}

export default HomeHeader;
