export const hasScrollbar = (): boolean =>
  document.documentElement.scrollHeight > window.innerHeight;
export const getScrollbarSize = (): number =>
  window.innerWidth -
  (document.documentElement.clientWidth || document.body.clientWidth);
