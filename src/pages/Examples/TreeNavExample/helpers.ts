export function debounce<T extends (...args: any[]) => void>(fn: T, wait = 120) {
  let t: number | undefined;
  return (...args: Parameters<T>) => {
    if (t) window.clearTimeout(t);
    t = window.setTimeout(() => fn(...args), wait);
  };
}

export const _HAS_POPOVER =
  typeof document !== 'undefined' && 'showPopover' in (document.createElement('div') as any);
export const HAS_POPOVER = true;

const GAP = 8; // зазор от точки/якоря
const MARGIN = 8; // поля от краёв вьюпорта

/**
 * Возвращает координаты left/top и ориентацию (для transform-origin) относительно точки клика.
 * @param pt  Координаты клика (clientX/clientY)
 * @param size  Размер поповера (из getBoundingClientRect)
 * @param opts  margin — отступ от края вьюпорта; gap — отступ от точки клика
 */
export function computePointPopupPosition(
  pt: { x: number; y: number },
  size: { w: number; h: number },
  opts: { margin?: number; gap?: number } = {},
) {
  /** минимальные поля вокруг поповера */
  const m = opts.margin ?? 8;
  /** зазор от точки клика */
  const g = opts.gap ?? 8;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const spaceRight = vw - pt.x;
  const spaceBottom = vh - pt.y;

  // Базовый выбор стороны по вместимости
  const sideX = spaceRight >= size.w + g ? 'right' : 'left';
  const sideY = spaceBottom >= size.h + g ? 'bottom' : 'top';

  // Сырые координаты относительно точки клика
  let left = sideX === 'right' ? pt.x + g : pt.x - size.w - g;
  let top = sideY === 'bottom' ? pt.y + g : pt.y - size.h - g;

  // Клампим во вьюпорт (сохраняем поля m)
  left = Math.min(Math.max(m, left), Math.max(m, vw - size.w - m));
  top = Math.min(Math.max(m, top), Math.max(m, vh - size.h - m));

  return { left, top, sideX, sideY } as const;
}

/**
 * Прилипание к anchorEl: по умолчанию — под якорём и по левому краю; флипы: вверх и/или правый край
 */
export function computeAnchorPopupPosition(ar: DOMRect, pop: { w: number; h: number }) {
  const vw = window.innerWidth,
    vh = window.innerHeight;
  const spaceRight = vw - ar.left;
  const spaceBottom = vh - ar.bottom;

  let sideX: 'leftEdges' | 'rightEdges' = spaceRight >= pop.w + MARGIN ? 'leftEdges' : 'rightEdges';
  const sideY: 'below' | 'above' = spaceBottom >= pop.h + GAP + MARGIN ? 'below' : 'above';

  if (sideY === 'above') sideX = 'rightEdges';

  let left = sideX === 'leftEdges' ? ar.left : ar.right - pop.w;
  let top = sideY === 'below' ? ar.bottom + GAP : ar.top - pop.h - GAP;

  left = Math.min(Math.max(MARGIN, left), Math.max(MARGIN, vw - pop.w - MARGIN));
  top = Math.min(Math.max(MARGIN, top), Math.max(MARGIN, vh - pop.h - MARGIN));

  return { left: Math.round(left), top: Math.round(top) } as const;
}
