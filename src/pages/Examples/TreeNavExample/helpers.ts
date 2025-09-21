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
