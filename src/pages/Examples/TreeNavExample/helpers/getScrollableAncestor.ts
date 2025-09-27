/** Получение ближайшего контейнера со скроллом */
export const getScrollableAncestor = (
  anchorElement: HTMLElement | null,
): HTMLElement | Document | null => {
  if (!anchorElement) {
    return null;
  }

  const regEx = /auto|scroll|overlay/;

  const canScroll = (node: HTMLElement): boolean => {
    const computedStyles = getComputedStyle(node);
    const scrollY = regEx.test(computedStyles.overflowY) && node.scrollHeight > node.clientHeight;
    const scrollX = regEx.test(computedStyles.overflowX) && node.scrollWidth > node.clientWidth;

    return scrollY || scrollX;
  };

  let node: HTMLElement | null = anchorElement.parentElement;

  // "поднимаемся" по DOM в поисках контейнера со скроллом
  while (node) {
    if (canScroll(node)) {
      return node;
    }

    node = node.parentElement;
  }

  // Если ничего не нашлось, скролл-контейнером будет назначен документ
  return document;
};
