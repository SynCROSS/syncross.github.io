'use client';

import { useCallback, useEffect, useState } from 'react';
import Header from '../../components/common/Header';

// skipcq: JS-D1001
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
    const setCurrentScreen = () => {
      setScreen(window.screen);
    };
    setCurrentScreen();

    window.addEventListener('resize', setCurrentScreen);

    return () => {
      window.removeEventListener('resize', setCurrentScreen);
    };
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
