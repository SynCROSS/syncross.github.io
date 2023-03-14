import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bindStyle } from 'lib/utility/style';
import Link from 'next/link';

import styles from 'styles/common/SnsNavigationList.module.css';

const cx = bindStyle(styles);

// skipcq: JS-D1001
function SnsNavigationList() {
  return (
    <ul className={cx('item-list')}>
      <li className={cx('link-item')}>
        <Link
          className={cx('icon-link')}
          href="https://www.linkedin.com/in/%EC%A4%80%EC%84%9D-%EB%B0%95-4a9866194/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile Link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </li>
      <li className={cx('link-item')}>
        <Link
          className={cx('icon-link')}
          href="https://twitter.com/__nam3__"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile Link"
        >
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Link>
      </li>
      <li className={cx('link-item')}>
        <Link
          className={cx('icon-link')}
          href="https://github.com/SynCROSS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile Link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </li>
      <li className={cx('link-item')}>
        <Link
          className={cx('icon-link')}
          href="https://www.instagram.com/junseok3125/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile Link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </li>
    </ul>
  );
}

export default SnsNavigationList;
