import React, {
  createContext,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { debounce } from '@/shared/helpers/debounce';

import { TPopoverContentRenderer } from './types';
import { computeAnchorPopupPosition } from './helpers/computeAnchorPopupPosition';
import { computePointPopupPosition } from './helpers/computePointPopupPosition';

import './PopoverProvider.scss';

export type TPopoverOpenOptions = {
  /** исходная координата по горизонтали */
  clientX: number;
  /** исходная координата по вертикали */
  clientY: number;
  /** функция, принимающая апи поповера и возвращающая компонент для рендера содержимого поповера */
  renderer: TPopoverContentRenderer;
  /** элемент для привязки координат поповера */
  anchorEl: HTMLElement;
  /** должен ли поповер прилипать к краю якорного элемента */
  shouldStickToAnchor?: boolean;
};

export type TPopoverContext = {
  /** открыть поповер */
  open: (opts: TPopoverOpenOptions) => void;
  /** закрыть поповер */
  close: () => void;
};

export const PopoverContext = createContext<TPopoverContext | null>(null);

export const PopoverProvider = ({ children }: { children: ReactNode }) => {
  const popoverElRef = useRef<HTMLDivElement | null>(null);
  const anchorElRef = useRef<HTMLElement | null>(null);
  const overlayElRef = useRef<HTMLDivElement | null>(null);
  const [initialPoint, setInitialPoint] = useState<{ x: number; y: number } | null>(null);
  const [isStickToAnchor, setIsStickToAnchor] = useState<boolean>(false);
  const [renderer, setRenderer] = useState<TPopoverContentRenderer | null>(null);
  const isOpen = Boolean(renderer);

  const handleOpen = useCallback((options: TPopoverOpenOptions) => {
    anchorElRef.current = options.anchorEl;
    setInitialPoint({ x: options.clientX, y: options.clientY });
    setRenderer(() => options.renderer);
    setIsStickToAnchor(Boolean(options.shouldStickToAnchor));
  }, []);

  const handleClose = useCallback(() => {
    setInitialPoint(null);
    setRenderer(null);
    anchorElRef.current = null;
  }, []);

  useLayoutEffect(() => {
    if (!popoverElRef.current || !initialPoint) {
      return;
    }

    const popoverElement = popoverElRef.current;
    const overlayElement = overlayElRef.current;

    const place = () => {
      const rect = popoverElement.getBoundingClientRect();
      const anchorElement = anchorElRef.current;
      const position =
        anchorElement && isStickToAnchor
          ? computeAnchorPopupPosition({
              anchorRect: anchorElement.getBoundingClientRect(),
              popoverWidth: rect.width,
              popoverHeight: rect.height,
            })
          : computePointPopupPosition({
              pointX: initialPoint.x,
              pointY: initialPoint.y,
              popoverWidth: rect.width,
              popoverHeight: rect.height,
            });

      popoverElement.style.left = `${position.left}px`;
      popoverElement.style.top = `${position.top}px`;
    };

    // первичная расстановка
    const id = requestAnimationFrame(place);

    // корректировка положения после ресайза
    const relayout = debounce(() => {
      requestAnimationFrame(place);
    }, 150);

    const abortController = new AbortController();
    const { signal } = abortController;

    // закрытие поповера по Esc
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    // закрытие поповера по клику на оверлей
    const handlePointerDown = (e: PointerEvent) => {
      if (!popoverElRef.current) {
        return;
      }

      if (!popoverElRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    window.addEventListener('resize', relayout, { passive: true, signal });
    window.addEventListener('keydown', handleKey, { signal });
    // закрыть поповер при клике по оверлею
    overlayElement?.addEventListener('pointerdown', handlePointerDown, {
      passive: true,
      capture: true,
      signal,
    });
    // блокируем прокрутку, когда открыт поповер
    overlayElement?.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      { passive: false, signal },
    );

    return () => {
      cancelAnimationFrame(id);
      abortController.abort();
    };
  }, [handleClose, initialPoint, isStickToAnchor]);

  const value = useMemo<TPopoverContext>(
    () => ({ open: handleOpen, close: handleClose }),
    [handleOpen, handleClose],
  );

  const popover = (
    <>
      <div className="overlay" ref={overlayElRef} />
      <div className="popover" ref={popoverElRef}>
        {renderer?.({ onClose: handleClose })}
      </div>
    </>
  );

  return (
    <PopoverContext.Provider value={value}>
      {children}
      {isOpen && createPortal(popover, document.body)}
    </PopoverContext.Provider>
  );
};
