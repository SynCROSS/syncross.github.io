import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import { Children } from 'react';

const snsNavigationArray = [
  {
    href: 'https://www.linkedin.com/in/%EC%A4%80%EC%84%9D-%EB%B0%95-4a9866194/?locale=en_US',
    'aria-label': 'LinkedIn Profile Link',
    icon: faLinkedin,
  },
  {
    href: 'https://twitter.com/__nam3__',
    'aria-label': 'Twitter Profile Link',
    icon: faTwitterSquare,
  },
  {
    href: 'https://github.com/SynCROSS',
    'aria-label': 'Github Profile Link',
    icon: faGithub,
  },
  {
    href: 'https://www.instagram.com/junseok3125/',
    'aria-label': 'Instagram Profile Link',
    icon: faInstagram,
  },
];

// skipcq: JS-D1001
function SnsNavigationList() {
  return (
    <ul
      className={classNames(
        'inline-flex text-2xl',
        'max-sm:portrait:flex-1 max-sm:portrait:justify-center max-sm:portrait:items-center max-sm:portrait:flex-col',
        'min-[2560px]:text-4xl',
        'min-[3840px]:text-5xl',
      )}
    >
      {Children.toArray(
        snsNavigationArray.map(snsNavigation => (
          <li
            className={classNames(
              'my-0 mx-4 motion-safe:transition-all hover:text-neutral-600 hover:font-medium text-neutral-500',
              'max-sm:portrait:my-2 max-sm:portrait:mx-0',
              'sm:my-0 sm:mx-2',
              'md:mx-4',
              'min-[3840px]:mx-6',
            )}
          >
            <Link
              className={classNames('max-sm:text-neutral-300')}
              href={snsNavigation.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={snsNavigation['aria-label']}
            >
              <FontAwesomeIcon icon={snsNavigation.icon} />
            </Link>
          </li>
        )),
      )}
    </ul>
  );
}

export default SnsNavigationList;
