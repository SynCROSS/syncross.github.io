import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import NavigationList from 'components/common/NavigationList';
import SnsNavigationList from 'components/common/SnsNavigationList';

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
      {width < 640 && (
        <button
          className={classNames(
            'w-5 h-5 fixed top-4 left-3 z-40 bg-transparent leading-4',
            "before:content-['☰'] before:text-gray-400 before:text-4xl/4",
          )}
          title="Menu Icon"
          onClick={openMenu}
        />
      )}
      <header
        className={classNames(
          'flex items-center motion-safe:transition-all z-50 fixed top-0 left-0 justify-between flex-col',
          'max-[640px]:w-0 max-[640px]:h-full max-[640px]:p-0 max-[640px]:invisible max-[640px]:bg-neutral-950 max-[640px]:[&.open]:w-28 max-[640px]:[&.open]:visible',
          'sm:w-full sm:py-2 sm:px-4 sm:flex-row sm:bg-transparent',
          'md:py-4 md:px-8',
          {
            open: isOpened,
          },
        )}
      >
        {width < 640 && isOpened && (
          <button
            className={'bg-transparent text-gray-300 mt-4'}
            title="Close Menu Button"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
        <NavigationList />
        <SnsNavigationList />
      </header>
      {width < 640 && isOpened && (
        <div
          role="button"
          tabIndex={-1}
          className={classNames(
            'motion-safe:transition-all w-0 fixed inset-0 z-40 bg-black/70',
            '[&.open]:w-full',
            { open: isOpened },
          )}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Header;
