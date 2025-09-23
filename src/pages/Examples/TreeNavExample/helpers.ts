export function clampToViewport(x: number, y: number, w: number, h: number, margin = 8) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let nx = x;
  let ny = y;
  if (nx + w + margin > vw) nx = Math.max(margin, vw - w - margin);
  if (ny + h + margin > vh) ny = Math.max(margin, vh - h - margin);
  return { x: nx, y: ny };
}

export function debounce<T extends (...args: any[]) => void>(fn: T, wait = 120) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t) window.clearTimeout(t);
    t = window.setTimeout(() => fn(...args), wait);
  };
}

export const HAS_POPOVER =
  typeof document !== 'undefined' && 'showPopover' in (document.createElement('div') as any);

export function getScrollableAncestors(el: HTMLElement | null): (HTMLElement | Document)[] {
  const result: (HTMLElement | Document)[] = [];
  if (!el) return result;

  const canScroll = (node: HTMLElement) => {
    const cs = getComputedStyle(node);
    const y = cs.overflowY;
    const x = cs.overflowX;
    const scrollY = /auto|scroll|overlay/.test(y) && node.scrollHeight > node.clientHeight;
    const scrollX = /auto|scroll|overlay/.test(x) && node.scrollWidth > node.clientWidth;
    return scrollY || scrollX;
  };

  let node: HTMLElement | null = el.parentElement;
  while (node) {
    if (canScroll(node)) result.push(node);
    node = node.parentElement;
  }

  // ВАЖНО: корневой скролл слушаем на document
  if (!result.includes(document)) result.push(document);

  return result;
}
