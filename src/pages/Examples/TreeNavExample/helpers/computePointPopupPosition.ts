import { Side } from '../enums/Side';

type TParams = {
  /** координата x стартовой точки */
  pointX: number;
  /** координата y стартовой точки */
  pointY: number;
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

/** Вычисление координат попапа */
export const computePointPopupPosition = ({
  pointX,
  pointY,
  popoverWidth: width,
  popoverHeight: height,
  margin = 0,
  gap = 0,
}: TParams): TResult => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const spaceRight = viewportWidth - pointX;
  const spaceBottom = viewportHeight - pointY;

  // выбор стороны по вместимости
  const sideX = spaceRight >= width + gap ? Side.Right : Side.Left;
  const sideY = spaceBottom >= height + gap ? Side.Bottom : Side.Top;

  // координаты относительно точки клика
  let left = sideX === Side.Right ? pointX + gap : pointX - width - gap;
  let top = sideY === Side.Bottom ? pointY + gap : pointY - height - gap;

  // Клампим во вьюпорт
  left = Math.min(Math.max(margin, left), Math.max(margin, viewportWidth - width - margin));
  top = Math.min(Math.max(margin, top), Math.max(margin, viewportHeight - height - margin));

  return { left: Math.round(left), top: Math.round(top) };
};
