import Header from 'components/common/Header';
import { useViewport } from 'lib/utility/viewport';
import { useCallback, useState } from 'react';

// skipcq: JS-D1001
function HeaderContainer() {
  const [isOpened, setIsOpened] = useState(false);
  const { width } = useViewport();

  const openMenu = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <Header
      isOpened={isOpened}
      width={width}
      openMenu={openMenu}
      closeMenu={closeMenu}
    />
  );
}

export default HeaderContainer;
