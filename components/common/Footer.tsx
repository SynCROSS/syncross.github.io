import { bindStyle } from 'lib/utility/style';
import Link from 'next/link';

import styles from 'styles/common/Footer.module.css';

const year = new Date().getFullYear();

const cx = bindStyle(styles);

// skipcq: JS-D1001
function Footer() {
  return (
    <footer className={cx('footer')}>
      <p className={cx('copyright')}>
        Copyright &copy;&nbsp;
        <span>{year}</span>
        &nbsp;Made by&nbsp;
        <Link
          className={cx('github-link')}
          href="https://github.com/SynCROSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          SynCROSS
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
