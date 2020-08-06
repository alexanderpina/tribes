import { useEffect, useState } from 'react';
import { getScrollbarSize, hasScrollbar } from 'utils/bodyUtils';

export const useWindowInnerSize = (): {
  height: number;
  width: number;
} => {
  const [width, setWidth] = useState<number>(
    document.documentElement.clientWidth,
  );
  const [height, setHeight] = useState<number>(
    document.documentElement.clientHeight,
  );

  const onResize = () => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
  };

  useEffect(() => {
    setWidth(window.innerWidth - (hasScrollbar() ? getScrollbarSize() : 0));

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { height, width };
};

export const useScrollToTop = (condition: boolean) => {
  useEffect(() => {
    if (condition) {
      window.scrollTo(0, 0);
    }
  }, [condition]);
};
