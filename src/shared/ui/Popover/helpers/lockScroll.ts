type TResult = () => void;

/** Блокирование вертикального скролла в переданном элементе */
export const lockScroll = (scrollableElement: HTMLElement | Document): TResult => {
  if (scrollableElement instanceof HTMLElement) {
    const prevOverflow = scrollableElement.style.overflow;
    const prevOverflowY = scrollableElement.style.overflowY;

    scrollableElement.style.overflow = 'hidden';
    scrollableElement.style.overflowY = 'hidden';

    return () => {
      scrollableElement.style.overflow = prevOverflow;
      scrollableElement.style.overflowY = prevOverflowY;
    };
  }

  const root = document.documentElement;
  const body = document.body;
  const prevHtmlOverflow = root.style.overflow;
  const prevHtmlOverflowY = root.style.overflowY;
  const prevBodyOverflow = body.style.overflow;
  const prevBodyOverflowY = body.style.overflowY;
  const prevBodyPaddingRight = body.style.paddingRight;
  const scrollbarW = window.innerWidth - root.clientWidth;

  // компенсация ширины скроллбара
  if (scrollbarW > 0) {
    const computedR = parseFloat(getComputedStyle(body).paddingRight) || 0;

    body.style.paddingRight = `${computedR + scrollbarW}px`;
  }

  root.style.overflow = 'hidden';
  body.style.overflow = 'hidden';

  return () => {
    root.style.overflow = prevHtmlOverflow;
    root.style.overflowY = prevHtmlOverflowY;
    body.style.overflow = prevBodyOverflow;
    body.style.overflowY = prevBodyOverflowY;
    body.style.paddingRight = prevBodyPaddingRight;
  };
};
