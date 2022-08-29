import Link from 'next/link';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemList = styled.ul`
  list-style: none;
`;
const LinkItem = styled.li`
  display: inline-flex;
  margin: 0 1rem;

  color: #808080;
  transition: 0.2s all ease-in-out;

  &:hover {
    color: #505050;
  }

  @media only screen and (max-width: 600px) {
    line-height: 2rem;
  }
`;

const FontAwesomeIconBlock = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const pages = [
  {
    name: 'Home',
    href: '/',
  }, {
    name: 'About',
    href: '/About',
  }, {
    name: 'My Works',
    href: '/Work',
  },
];

const snsPages = [
  {
    href: 'https://www.linkedin.com/in/%EC%A4%80%EC%84%9D-%EB%B0%95-4a9866194/?locale=en_US',
    'aria-label': 'LinkedIn',
    icon: faLinkedin,
  }, {
    href: 'https://twitter.com/1MD3V3L0P3R',
    'aria-label': 'Twitter',
    icon: faTwitterSquare,
  }, {
    href: 'https://github.com/SynCROSS',
    'aria-label': 'Github',
    icon: faGithub,
  }, {
    href: 'https://www.instagram.com/junseok3125/',
    'aria-label': 'Instagram',
    icon: faInstagram,
  },
];

export function NavigationList(): JSX.Element {
  return (
      <ItemList>
        {pages?.map?.(page => (
            <LinkItem key={page?.name}>
              <Link href={page?.href}>
                <a>{page?.name}</a>
              </Link>
            </LinkItem>
        ))}
      </ItemList>
  );
}

export function SnsNavigationList(): JSX.Element {
  return (
      <ItemList>
        {snsPages?.map?.(page => (
            <LinkItem key={page?.['aria-label']}>
              <Link href={page?.href}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={page?.['aria-label']}
                >
                  <FontAwesomeIconBlock icon={page?.icon}/>
                </a>
              </Link>
            </LinkItem>
        ))}
      </ItemList>
  );
}
