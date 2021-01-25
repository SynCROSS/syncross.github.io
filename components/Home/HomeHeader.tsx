import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const HomeHeaderBlock = styled.header`
  margin: 50px auto;
  min-height: 80vh;

  & > h1 {
    font-weight: 100;
    font-size: 5rem;
    margin: 10px auto 20px;
  }
  & > h3 {
    font-size: 1.5rem;
    font-weight: 300;
    color: #aaa;
  }

  & > a {
    background-color: #111;
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 20px 40px 20px 20px;
    position: relative;
    width: 140px;
  }

  .fa-icon {
    margin-left: 10px;
    position: absolute;
    transition: all 0.15s ease-in-out;
    opacity: 0.5;
    top: 50.5%;
    transform: translate(0, -50%);
  }
`;

const HomeHeader = () => {
  const [right, setRight] = useState(false);

  const toggleRight = () => setRight(!right);

  return (
    <HomeHeaderBlock className="flex jc-center ai-center flex-direction-col">
      <h3>Frontend Developer</h3>
      <h1>
        SynCROSS, <br /> The Knowledge Explorer
      </h1>
      <Link href="/Work">
        <a onMouseOver={toggleRight} onMouseLeave={toggleRight}>
          My Work{' '}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="fa-icon"
            style={
              right && right
                ? { right: '25px', opacity: '1' }
                : { right: '30px', opacity: '.5' }
            }
          />
        </a>
      </Link>
    </HomeHeaderBlock>
  );
};

export default HomeHeader;
