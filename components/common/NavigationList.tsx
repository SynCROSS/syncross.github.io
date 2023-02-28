import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Children } from 'react';
import styled from 'styled-components';

const ItemList = styled.ul`
  list-style: none;
`;

const LinkItem = styled.li`
  display: inline-flex;
  margin: 0 1rem;
  color: #808080;

  @media (prefers-reduced-motion: no-preference) {
    transition: all 0.2s ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      color: #505050;
      font-weight: 500;
    }
  }

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

  /* @media all and (min-width: 480px) and (max-width: 768px) {
    background-color: #333;
  } */

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
    & > a {
      color: #bfbfbf;
    }
    margin: 0.5rem 0;
  }

  /* iPhone Landscape */
  /* @media screen and (max-device-width: 480px) and (orientation: landscape) {
    background-color: #aaa;
  } */

  /* iPad Portrait */
  /* @media screen and (min-device-width: 481px) and (orientation: portrait) {
    background-color: #bbb;
  } */

  /* iPad Landscape */
  /* @media screen and (min-device-width: 481px) and (orientation: landscape) {
    background-color: #ccc;
  } */
`;

const FontAwesomeIconBlock = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

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
    <ItemList>
      {Children.toArray(
        pages?.map?.(page => (
          <LinkItem>
            <Link href={page.href}>{page?.name}</Link>
          </LinkItem>
        )),
      )}
    </ItemList>
  );
}

// skipcq: JS-D1001
export function SnsNavigationList() {
  return (
    <ItemList>
      {Children.toArray(
        snsPages?.map?.(page => (
          <LinkItem>
            <Link
              href={page?.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={page?.['aria-label']}
            >
              <FontAwesomeIconBlock icon={page?.icon} />
            </Link>
          </LinkItem>
        )),
      )}
    </ItemList>
  );
}
