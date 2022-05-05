import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitterSquare,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const HeaderBlock = styled.div`
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 15px 20px;

  @media only screen and (max-width: 600px) {
    width: 100px;
    padding: 0;
  }
`;

const HeaderList = styled.div`
  justify-content: space-between;
  width: 100%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    width: 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    overflow-x: hidden;

    background-color: #111;
    transition: all 0.5s ease-in-out;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
`;

const ItemList = styled.ul`
  list-style: none;
`;

const LinkItem = styled.li`
  display: inline-flex;
  margin: 0 1rem;

  color: gray;
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

const MenuButton = styled.button`
  font-size: 2rem;
  color: #aaa;
  background: transparent;
  float: left;
  display: none;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    display: block;
    margin: 15px 20px;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: transparent;
  color: #e0e0e0;

  position: absolute;
  top: 2rem;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const Outside = styled.div`
  display: none;
  min-height: 100vh;
  width: 0;
  height: 100%;
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: 600px) {
    display: block;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

function Header(): JSX.Element {
  const openMenu = (): void => {
    if (typeof document === 'undefined') {
      return;
    }

    const header = document.getElementById('header');
    const headerBlock = document.getElementById('headerBlock');
    const outsideOfModal = document.getElementById('outsideOfModal');

    if (
      !header?.style?.width ||
      !headerBlock?.style?.width ||
      !outsideOfModal?.style?.width
    ) {
      return;
    }

    header.style.width = '100px';
    headerBlock.style.width = '100%';
    outsideOfModal.style.width = '100%';
  };

  const closeMenu = (): void => {
    if (typeof document === 'undefined') {
      return;
    }

    const header = document.getElementById?.('header');
    const headerBlock = document.getElementById?.('headerBlock');
    const outsideOfModal = document.getElementById?.('outsideOfModal');

    if (!outsideOfModal?.style?.width) {
      return;
    }

    header?.removeAttribute?.('style');
    headerBlock?.removeAttribute?.('style');
    outsideOfModal.style.width = '0';
  };

  return (
    <HeaderBlock id="headerBlock">
      <MenuButton title="Menu Icon" onClick={openMenu}>
        ☰
      </MenuButton>
      <HeaderList className="flex ai-center" id="header">
        <CloseButton title="Close Menu Button" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <ItemList>
          <LinkItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="/About">
              <a>About</a>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="/Work">
              <a>My Works</a>
            </Link>
          </LinkItem>
        </ItemList>
        <ItemList>
          <LinkItem>
            <Link href="https://www.linkedin.com/in/%EC%A4%80%EC%84%9D-%EB%B0%95-4a9866194/?locale=en_US">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIconBlock icon={faLinkedin} />
              </a>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://twitter.com/1MD3V3L0P3R">
              <a target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIconBlock icon={faTwitterSquare} />
              </a>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="http://github.com/SynCROSS">
              <a target="_blank" rel="noopener noreferrer" aria-label="Github">
                <FontAwesomeIconBlock icon={faGithub} />
              </a>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://www.instagram.com/junseok3125/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIconBlock icon={faInstagram} />
              </a>
            </Link>
          </LinkItem>
        </ItemList>
      </HeaderList>
      <Outside id="outsideOfModal" onClick={closeMenu} />
    </HeaderBlock>
  );
}

export default Header;
