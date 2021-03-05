import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitterSquare,
  faGithub,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

const HeaderBlock = styled.div`
  width: 100%;
  justify-content: space-between;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 15px 20px;

  & > ul {
    list-style: none;
    color: gray;
  }

  & > ul > li {
    display: inline-flex;
    margin: 0 1rem;
  }

  & > ul > li:hover {
    color: #000;
  }

  .fa-icon {
    font-size: 1.5rem;
    color: gray;
  }
  .fa-icon:hover {
    color: #505050;
  }
`;

const Header = () => {
  return (
    <HeaderBlock className="flex ai-center">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Work">
            <a>My Works</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/%EC%A4%80%EC%84%9D-%EB%B0%95-4a9866194/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/1MD3V3L0P3R"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" />
          </a>
        </li>
        <li>
          <a
            href="http://github.com/SynCROSS"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/junseok3125/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagramSquare} className="fa-icon" />
          </a>
        </li>
      </ul>
    </HeaderBlock>
  );
};

export default Header;
