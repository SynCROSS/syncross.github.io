import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitterSquare,
  faGithub,
  faInstagramSquare,
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

const IconList = styled.ul`
  list-style: none;
  color: gray;
`;

const IconItem = styled.li`
  display: inline-flex;
  margin: 0 1rem;

  &:hover {
    color: #000;
  }

  @media only screen and (max-width: 600px) {
    line-height: 2rem;
  }
`;

const FontAwesomeIconBlock = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: gray;

  &:hover {
    color: #505050;
  }
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

const Header = () => {
  const openMenu = () => {
    document.getElementById('header').style.width = '100px';
    document.getElementById('headerBlock').style.width = '100%';
    document.getElementById('outsideOfModal').style.width = '100%';
  };

  const closeMenu = () => {
    document.getElementById('header').removeAttribute('style');
    document.getElementById('headerBlock').removeAttribute('style');
    document.getElementById('outsideOfModal').style.width = '0';
  };

  return (
    <HeaderBlock id="headerBlock">
      <MenuButton
        aria-details="Menu Icon"
        aria-label="Menu Icon"
        onClick={openMenu}
      >
        ☰
      </MenuButton>
      <HeaderList className="flex ai-center" id="header">
        <CloseButton
          aria-details="Close Menu Button"
          aria-label="Close Menu Button"
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <IconList>
          <IconItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </IconItem>
          <IconItem>
            <Link href="/About">
              <a>About</a>
            </Link>
          </IconItem>
          <IconItem>
            <Link href="/Work">
              <a>My Works</a>
            </Link>
          </IconItem>
        </IconList>
        <IconList>
          <IconItem>
            <a
              href="https://www.linkedin.com/in/%EC%A4%80%EC%84%9D-%EB%B0%95-4a9866194/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIconBlock icon={faLinkedin} />
            </a>
          </IconItem>
          <IconItem>
            <a
              href="https://twitter.com/1MD3V3L0P3R"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIconBlock icon={faTwitterSquare} />
            </a>
          </IconItem>
          <IconItem>
            <a
              href="http://github.com/SynCROSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIconBlock icon={faGithub} />
            </a>
          </IconItem>
          <IconItem>
            <a
              href="https://www.instagram.com/junseok3125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIconBlock icon={faInstagramSquare} />
            </a>
          </IconItem>
        </IconList>
      </HeaderList>
      <Outside id="outsideOfModal" onClick={closeMenu} />
    </HeaderBlock>
  );
};

export default Header;
