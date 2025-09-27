import { Side } from '../enums/Side';

type TParams = {
  /** Якорный элемент */
  anchorRect: DOMRect;
  /** ширина элемента поповера */
  popoverWidth: number;
  /** высота элемента поповера */
  popoverHeight: number;
  /** минимальные поля вокруг поповера */
  margin?: number;
  /** зазор от точки клика */
  gap?: number;
};

type TResult = {
  /** расстояние слева */
  left: number;
  /** расстояние справа */
  top: number;
};

/**
 * Вычисление позиции относительно якорного элемента, учет смещений при нехватке места
 */
export const computeAnchorPopupPosition = ({
  anchorRect,
  popoverHeight: popupHeight,
  popoverWidth: popupWidth,
  gap = 0,
  margin = 0,
}: TParams): TResult => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const spaceRight = viewportWidth - anchorRect.left;
  const spaceLeft = anchorRect.right;
  const spaceBottom = viewportHeight - anchorRect.bottom;

  let sideX = spaceRight >= popupWidth + margin ? Side.Left : Side.Right;
  const sideY = spaceBottom >= popupHeight + gap + margin ? Side.Bottom : Side.Top;

  // если поповер смещен наверх - то он должен быть справа по дизайну (если хватит места)
  if (sideY === Side.Top && spaceLeft >= popupWidth + margin + gap) {
    sideX = Side.Right;
  }

  let left = sideX === Side.Left ? anchorRect.left : anchorRect.right - popupWidth;
  let top = sideY === Side.Bottom ? anchorRect.bottom + gap : anchorRect.top - popupHeight - gap;

  // на случай нехватки места - минимальной координатой будет margin, максимальной - вычисленное значение (аналог clamp в css)
  left = Math.min(Math.max(margin, left), Math.max(margin, viewportWidth - popupWidth - margin));
  top = Math.min(Math.max(margin, top), Math.max(margin, viewportHeight - popupHeight - margin));

  return { left: Math.round(left), top: Math.round(top) };
};
