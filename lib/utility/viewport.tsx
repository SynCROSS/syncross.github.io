import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

const viewportContext = createContext({
  width: 1920,
  height: 1080,
});

/**
 * Get Viewport Info
 * @returns {width: number, height: number} Viewport's innerWidth and innerHeight
 */
export const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

/**
 * Context Provider For Viewport
 * @param {children}
 * @returns Viewport Provider
 */
export function ViewportProvider({ children }: PropsWithChildren) {
  const [screen, setScreen] = useState({
    width: 1920,
    height: 1080,
  });
  useEffect(() => {
    /**
     * Save width and height of the screen
     */
    const handleWindowResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={screen}>
      {children}
    </viewportContext.Provider>
  );
}
