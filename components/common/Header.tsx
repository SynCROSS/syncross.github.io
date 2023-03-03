import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationList, SnsNavigationList } from './NavigationList';

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
      {width <= 480 && (
        <button className="menu-button" title="Menu Icon" onClick={openMenu} />
      )}
      <header className="flex ai-center header-block">
        {width <= 480 && isOpened && (
          <button
            className="close-button"
            title="Close Menu Button"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        <NavigationList />
        <SnsNavigationList />
      </header>
      {width <= 480 && isOpened && (
        <div className="backdrop" onClick={closeMenu} />
      )}
      <style jsx>
        {`
          .header-block {
            width: 100%;
            padding: 15px 20px;

            z-index: 2;

            position: fixed;
            top: 0;
            left: 0;

            justify-content: space-between;
            background: transparent;
          }
          @media (prefers-reduced-motion: no-preference) {
            .header-block,
            .backdrop {
              transition: all 0.4s ease-in-out;
            }
          }
          /* iPhone Portrait */
          @media screen and (max-device-width: 480px) and (orientation: portrait) {
            .header-block {
              width: ${isOpened ? '100px' : 0};
              height: 100vh;

              padding: ${isOpened ? '15px 20px' : 0};

              visibility: ${isOpened ? 'visible' : 'hidden'};

              overflow-x: hidden;

              flex-direction: column;

              background-color: #121212;
            }
            .menu-button {
              width: 2rem;
              height: 2rem;

              position: fixed;
              top: 1rem;
              left: 1.2rem;

              z-index: 2;

              background: transparent;

              font-size: 2rem;
              color: #aaa;
            }
            .menu-button::before {
              content: '☰';
            }
            .close-button {
              background: transparent;
              color: #e0e0e0;
              margin-top: 2rem;
            }
            .backdrop {
              width: ${isOpened ? '100%' : 0};

              position: fixed;
              inset: 0;

              z-index: 1;

              background-color: rgba(0, 0, 0, 0.7);
            }
          }
        `}
      </style>
    </>
  );
}

export default Header;
