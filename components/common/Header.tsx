import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavigationList, SnsNavigationList } from './NavigationList';

const HeaderBlock = styled.header<Pick<HeaderProps, 'isOpened'>>`
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 15px 20px;

  @media only screen and (max-width: 600px) {
    width: ${({ isOpened }) => (isOpened ? '100px' : 0)};
    padding: 0;
  }
`;

const HeaderList = styled.div.attrs(({ isOpened }: HeaderProps) => ({
  isOpened,
  className: 'flex ai-center',
}))`
  justify-content: space-between;
  width: 100%;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    z-index: 10;

    width: ${({ isOpened }) => (isOpened ? '100px' : 0)};
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

const MenuButton = styled.button`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    background: transparent;
    color: #aaa;
    display: block;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    margin: 15px 20px;

    &::before {
      content: '☰';
    }
  }
`;

const CloseButton = styled.button`
  @media only screen and (max-width: 600px) {
    background: transparent;
    color: #e0e0e0;

    position: absolute;
    top: 2rem;
    display: block;
  }
`;

const Outside = styled.div<Pick<HeaderProps, 'isOpened'>>`
  @media only screen and (max-width: 600px) {
    width: ${({ isOpened }) => (isOpened ? '100%' : 0)};
    position: fixed;
    inset: 0;
    transition: all 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

type HeaderProps = {
  isOpened: boolean;
  screen: Pick<Screen, 'width' | 'height'>;
  openMenu: VoidFunction;
  closeMenu: VoidFunction;
};

// skipcq: JS-D1001
function Header({
  isOpened,
  screen,
  openMenu,
  closeMenu,
}: HeaderProps): JSX.Element {
  return (
    <HeaderBlock isOpened={isOpened}>
      {screen?.width <= 600 && (
        <MenuButton title="Menu Icon" onClick={openMenu} />
      )}
      <HeaderList isOpened={isOpened}>
        {screen?.width <= 600 && (
          <CloseButton title="Close Menu Button" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        )}
        <NavigationList />
        <SnsNavigationList />
      </HeaderList>
      {screen.width <= 600 && (
        <Outside isOpened={isOpened} onClick={closeMenu} />
      )}
    </HeaderBlock>
  );
}

export default Header;
