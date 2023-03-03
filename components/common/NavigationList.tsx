import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Children } from 'react';

import css from 'styled-jsx/css';

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/About',
  },
  {
    name: 'My Works',
    href: '/Work',
  },
];

const snsPages = [
  {
    href: 'https://www.linkedin.com/in/%EC%A4%80%EC%84%9D-%EB%B0%95-4a9866194/?locale=en_US',
    'aria-label': 'LinkedIn',
    icon: faLinkedin,
  },
  {
    href: 'https://twitter.com/__nam3__',
    'aria-label': 'Twitter',
    icon: faTwitterSquare,
  },
  {
    href: 'https://github.com/SynCROSS',
    'aria-label': 'Github',
    icon: faGithub,
  },
  {
    href: 'https://www.instagram.com/junseok3125/',
    'aria-label': 'Instagram',
    icon: faInstagram,
  },
];

// skipcq: JS-D1001
export function NavigationList() {
  return (
    <ul className="item-list">
      {Children.toArray(
        pages?.map?.(page => (
          <li className="link-item">
            <Link href={page.href}>{page?.name}</Link>
          </li>
        )),
      )}
      <style jsx>
        {`
          .item-list {
            list-style: none;
          }
          .link-item {
            display: inline-flex;
            margin: 0 1rem;
            color: #808080;
          }
          @media (prefers-reduced-motion: no-preference) {
            .link-item {
              transition: all 0.2s ease-in-out;
            }
          }
          @media (hover: hover) {
            .link-item:hover {
              color: #505050;
              font-weight: 500;
            }
          }
          /* iPhone Portrait */
          @media screen and (max-device-width: 480px) and (orientation: portrait) {
            .item-list {
              flex: 1;

              display: inline-flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .link-item {
              color: #bfbfbf;
              margin: 0.5rem 0;
            }
          }
        `}
      </style>
    </ul>
  );
}

const iconLink = css.resolve`
  /* iPhone Portrait */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    a {
      color: #bfbfbf;
    }
  }
`;
const icon = css.resolve`
  svg {
    font-size: 1.5rem;
  }
`;

// skipcq: JS-D1001
export function SnsNavigationList() {
  return (
    <ul className="item-list">
      {Children.toArray(
        snsPages?.map?.(page => (
          <li className="link-item">
            <Link
              className={iconLink.className}
              href={page?.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={page?.['aria-label']}
            >
              <FontAwesomeIcon className={icon.className} icon={page?.icon} />
            </Link>
          </li>
        )),
      )}
      <style jsx>
        {`
          .item-list {
            list-style: none;
          }
          .link-item {
            display: inline-flex;
            margin: 0 1rem;
            color: #808080;
          }
          @media (prefers-reduced-motion: no-preference) {
            .link-item {
              transition: all 0.2s ease-in-out;
            }
          }
          @media (hover: hover) {
            .link-item:hover {
              color: #505050;
              font-weight: 500;
            }
          }
          /* iPhone Portrait */
          @media screen and (max-device-width: 480px) and (orientation: portrait) {
            .item-list {
              flex: 1;

              display: inline-flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .link-item {
              margin: 0.5rem 0;
            }
          }
        `}
      </style>
      {iconLink.styles}
      {icon.styles}
    </ul>
  );
}
