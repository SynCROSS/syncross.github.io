import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { NavigationList, SnsNavigationList } from './NavigationList';

type CenterAlignedHeaderProps = PropsWithChildren<
  Pick<HeaderProps, 'isOpened'> & {
    className?: HTMLAttributes<HTMLElement>['className'];
  }
>;

// skipcq: JS-D1001
const CenterAlignedHeader: FC<CenterAlignedHeaderProps> =
  function CenterAlignedHeader({ children, className = '' }) {
    return (
      <header className={`flex ai-center ${className}`}>{children}</header>
    );
  };

CenterAlignedHeader.defaultProps = {
  className: '',
};

const HeaderBlock = styled(CenterAlignedHeader)`
  width: 100%;
  padding: 15px 20px;

  z-index: 2;

  position: fixed;
  top: 0;
  left: 0;

  justify-content: space-between;
  background: transparent;

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
    width: ${({ isOpened }) => (isOpened ? '100px' : 0)};
    height: 100vh;

    padding: ${({ isOpened }) => (isOpened ? '15px 20px' : 0)};

    visibility: ${({ isOpened }) => (isOpened ? 'visible' : 'hidden')};

    overflow-x: hidden;

    flex-direction: column;

    background-color: #121212;
    transition: all 0.5s ease-in-out;

    & > ul {
      flex: 1;

      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
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

const MenuButton = styled.button`
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
    width: 2rem;
    height: 2rem;

    position: fixed;
    top: 1rem;
    left: 1.2rem;

    z-index: 2;

    background: transparent;

    font-size: 2rem;
    color: #aaa;

    &::before {
      content: '☰';
    }
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

const CloseButton = styled.button`
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
    background: transparent;
    color: #e0e0e0;
    margin-top: 2rem;
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

const Outside = styled.div<Pick<HeaderProps, 'isOpened'>>`
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
    width: ${({ isOpened }) => (isOpened ? '100%' : 0)};

    position: fixed;
    inset: 0;

    z-index: 1;

    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.5s ease-in-out;
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

type HeaderProps = {
  isOpened: boolean;
  width: number;
  openMenu: VoidFunction;
  closeMenu: VoidFunction;
};

// skipcq: JS-D1001
function Header({ isOpened, width, openMenu, closeMenu }: HeaderProps) {
  return (
    <>
      {width <= 480 && <MenuButton title="Menu Icon" onClick={openMenu} />}
      <HeaderBlock isOpened={isOpened}>
        {width <= 480 && isOpened && (
          <CloseButton title="Close Menu Button" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        )}
        <NavigationList />
        <SnsNavigationList />
      </HeaderBlock>
      {width <= 480 && isOpened && (
        <Outside isOpened={isOpened} onClick={closeMenu} />
      )}
    </>
  );
}

export default Header;
