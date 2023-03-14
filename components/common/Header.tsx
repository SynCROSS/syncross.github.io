import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationList from 'components/common/NavigationList';
import SnsNavigationList from 'components/common/SnsNavigationList';

import { bindStyle } from 'lib/utility/style';
import styles from 'styles/common/Header.module.css';

type HeaderProps = {
  isOpened: boolean;
  width: number;
  openMenu: VoidFunction;
  closeMenu: VoidFunction;
};

const cx = bindStyle(styles);

// skipcq: JS-D1001
function Header({ isOpened, width, openMenu, closeMenu }: HeaderProps) {
  return (
    <>
      {width < 768 && (
        <button
          className={cx('menu-button')}
          title="Menu Icon"
          onClick={openMenu}
        />
      )}
      <header
        className={cx('flex', 'ai-center', 'header', {
          open: isOpened,
        })}
      >
        {width < 768 && isOpened && (
          <button
            className={cx('close-button')}
            title="Close Menu Button"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        <NavigationList />
        <SnsNavigationList />
      </header>
      {width < 768 && isOpened && (
        <div
          role="button"
          tabIndex={-1}
          className={cx('backdrop', { open: isOpened })}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Header;
