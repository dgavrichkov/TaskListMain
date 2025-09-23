import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import style from './ContextMenu.module.css';
import { MenuRenderer } from './types';
import { CtxMenuBody } from './CtxMenuBody';
import { clampToViewport, debounce, getScrollableAncestors, HAS_POPOVER } from './helpers';

type OpenOpts = {
  clientX: number;
  clientY: number;
  render: MenuRenderer;
  //TODO - переделать хорошо бы
  anchorEl?: HTMLElement | null; // если есть — меню “прилипает” к узлу
  isOnClickPoint?: boolean; // если есть — меню прилипает к точке клика ??
};

type Ctx = {
  open: (opts: OpenOpts) => void;
  close: () => void;
};

const CtxMenuContext = createContext<Ctx | null>(null);

// один контекст - один поповер.

export const ContextMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const clickPointModeRef = useRef<boolean>(false);
  const [isOpen, setOpen] = useState(false);
  const [fallbackPoint, setFallbackPoint] = useState<{ x: number; y: number } | null>(null);
  const [renderer, setRenderer] = useState<MenuRenderer | null>(null);
  const scrollUnsubsRef = useRef<Array<() => void>>([]);

  const handleClose = useCallback(() => {
    setOpen(false);
    anchorRef.current = null;
    setFallbackPoint(null);
    setRenderer(null);
    if (HAS_POPOVER && menuRef.current && (menuRef.current as any).hidePopover) {
      try {
        (menuRef.current as any).hidePopover();
      } catch {
        console.log('eror ');
      }
    }
  }, []);

  const handleOpen = useCallback((opts: OpenOpts) => {
    anchorRef.current = opts.anchorEl ?? null;
    clickPointModeRef.current = !!opts.isOnClickPoint;
    setFallbackPoint({ x: opts.clientX, y: opts.clientY });
    setRenderer(() => opts.render ?? null);
    setOpen(true);
  }, []);

  // позиционирование и подписки
  useLayoutEffect(() => {
    if (!isOpen || !menuRef.current || !fallbackPoint) return;
    const el = menuRef.current;

    scrollUnsubsRef.current.forEach((fn) => fn());
    scrollUnsubsRef.current = [];

    console.log('anchorref', anchorRef.current);

    const ancestors = getScrollableAncestors(anchorRef.current);

    console.log('ancestors', ancestors);

    ancestors.forEach((container) => {
      const onScroll = () => handleClose();
      container.addEventListener('scroll', onScroll, { capture: true, passive: true });
      scrollUnsubsRef.current.push(() => container.removeEventListener('scroll', onScroll));
    });

    // показать popover сразу (если доступно), чтобы размеры были корректны
    if (HAS_POPOVER && (el as any).showPopover) {
      try {
        (el as any).showPopover();
      } catch {
        console.error("Ain't have a popover");
      }
    }

    // функция, выполняющая задание элементу координат через инлайн-стиль
    const place = () => {
      const rect = el.getBoundingClientRect();

      let x = fallbackPoint.x;
      let y = fallbackPoint.y;

      // Если НЕ режим «по точке клика» и есть anchor — прилипнем к узлу,
      // иначе остаёмся в координатах клика.
      const anchor = anchorRef.current;

      if (!clickPointModeRef.current && anchor) {
        const ar = anchor.getBoundingClientRect();
        x = ar.right + 8; // небольшое смещение от узла
        y = ar.top;
      }

      // Клампим, чтобы меню полностью вошло в вьюпорт
      const { x: nx, y: ny } = clampToViewport(x, y, rect.width, rect.height, 8);
      // Записываем полученные координаты в css элемента
      el.style.left = `${nx - 20}px`;
      el.style.top = `${ny}px`;
    };

    // первичная расстановка
    const id = requestAnimationFrame(place);

    // корректировка положения после ресайза окна браузера
    const relayout = debounce(() => {
      requestAnimationFrame(place);
    }, 150);

    window.addEventListener('resize', relayout, { passive: true });

    // закрытие по Esc и клику вне окна меню
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) handleClose();
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointerDown, true);

    // отменяем подписки
    return () => {
      cancelAnimationFrame(id);
      scrollUnsubsRef.current.forEach((fn) => fn());
      scrollUnsubsRef.current = [];
      window.removeEventListener('resize', relayout);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointerDown, true);
    };
  }, [isOpen, fallbackPoint, handleClose]);

  const value = useMemo<Ctx>(
    () => ({ open: handleOpen, close: handleClose }),
    [handleOpen, handleClose],
  );

  const menu = (
    <div
      ref={menuRef}
      {...(HAS_POPOVER ? { popover: 'manual' as any } : {})}
      className={style.menuWindow}
      role="menu"
      tabIndex={-1}
      onContextMenu={(e) => e.preventDefault()}
    >
      {renderer && <CtxMenuBody>{renderer({ onClose: handleClose })}</CtxMenuBody>}
    </div>
  );

  return (
    <CtxMenuContext.Provider value={value}>
      <div>
        {children}
        {HAS_POPOVER ? menu : createPortal(menu, document.body)}
      </div>
    </CtxMenuContext.Provider>
  );
};

export function useContextMenu() {
  const ctx = useContext(CtxMenuContext);

  if (!ctx) throw new Error('useContextMenu must be used within <ContextMenuProvider>');

  return ctx;
}
