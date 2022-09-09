import { useCallback, useEffect, useState } from 'react';
import Header from '../../components/common/Header';

function HeaderContainer(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const [screen, setScreen] = useState({ width: 0, height: 0 });

  const openMenu = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpened(false);
  }, []);

  useEffect(() => {
    setScreen(window.screen);

    window.addEventListener('resize', () => {
      setScreen(window.screen);
    });
  }, []);

  return (
    <Header
      isOpened={isOpened}
      screen={screen}
      openMenu={openMenu}
      closeMenu={closeMenu}
    />
  );
}

export default HeaderContainer;
