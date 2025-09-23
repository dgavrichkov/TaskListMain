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
import {
  computeAnchorPopupPosition,
  computePointPopupPosition,
  debounce,
  HAS_POPOVER,
} from './helpers';

type OpenOpts = {
  clientX: number;
  clientY: number;
  render: MenuRenderer;
  anchorEl?: HTMLElement | null;
};

type Ctx = {
  open: (opts: OpenOpts) => void;
  close: () => void;
};

const CtxMenuContext = createContext<Ctx | null>(null);

export const ContextMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [fallbackPoint, setFallbackPoint] = useState<{ x: number; y: number } | null>(null);
  const [renderer, setRenderer] = useState<MenuRenderer | null>(null);

  console.log('CTX PROVIDER RendeR!');

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
    setFallbackPoint({ x: opts.clientX, y: opts.clientY });
    setRenderer(() => opts.render ?? null);
    setOpen(true);
  }, []);

  // позиционирование и подписки
  useLayoutEffect(() => {
    if (!isOpen || !menuRef.current || !fallbackPoint) return;
    const el = menuRef.current;

    // показать popover сразу (если доступно), чтобы размеры были корректны
    if (HAS_POPOVER && (el as any).showPopover) {
      try {
        (el as any).showPopover();
      } catch {
        console.error("Ain't have a popover");
      }
    }

    // обновленный плейс, который меняет ось положения поповера при нехватке места у края
    const place = () => {
      const rect = el.getBoundingClientRect();
      const ankorEl = anchorRef.current;
      const pos = ankorEl
        ? computeAnchorPopupPosition(ankorEl.getBoundingClientRect(), {
            w: rect.width,
            h: rect.height,
          })
        : computePointPopupPosition(
            { x: fallbackPoint.x, y: fallbackPoint.y },
            { w: rect.width, h: rect.height },
          );
      el.style.left = `${pos.left}px`;
      el.style.top = `${pos.top}px`;
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

    const onScroll = () => {
      handleClose();
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointerDown, true);

    // отменяем подписки
    return () => {
      cancelAnimationFrame(id);

      window.removeEventListener('scroll', onScroll);
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
      data-cm
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
