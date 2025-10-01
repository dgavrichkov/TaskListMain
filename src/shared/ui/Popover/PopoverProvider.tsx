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
  isSecondary?: boolean;
};

export type TPopoverContext = {
  /** открыть поповер */
  open: (opts: TPopoverOpenOptions) => void;
  /** закрыть поповер */
  close: () => void;
};

type ComplexState = {
  renderer: TPopoverContentRenderer;
  coords: {
    x: number;
    y: number;
  };
  anchorElement: HTMLElement;
  isStickToAnchor: boolean;
  isSecondary: boolean;
};

// NEW
type PopoverEntry = {
  id: number; // уникальный ключ (инкремент)
  renderer: TPopoverContentRenderer;
  coords: { x: number; y: number };
  anchorElement: HTMLElement;
  isStickToAnchor: boolean;
};

export const PopoverContext = createContext<TPopoverContext | null>(null);

export const PopoverProvider = ({ children }: { children: ReactNode }) => {
  const popoverElRef = useRef<HTMLDivElement | null>(null);
  const popoverRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const anchorElRef = useRef<HTMLElement | null>(null);
  const overlayElRef = useRef<HTMLDivElement | null>(null);
  const [complexState, setComplexState] = useState<ComplexState | null>(null);
  const isOpen = Boolean(complexState);

  const handleOpen = useCallback((options: TPopoverOpenOptions) => {
    anchorElRef.current = options.anchorEl;

    setComplexState({
      anchorElement: options.anchorEl,
      coords: {
        x: options.clientX,
        y: options.clientY,
      },
      isStickToAnchor: !!options.shouldStickToAnchor,
      isSecondary: !!options.isSecondary,
      renderer: options.renderer,
    });
  }, []);

  const handleClose = useCallback(() => {
    anchorElRef.current = null;

    setComplexState(null);
  }, []);

  useLayoutEffect(() => {
    if (!popoverElRef.current || !complexState) {
      return;
    }

    const popoverElement = popoverElRef.current;
    const overlayElement = overlayElRef.current;

    const place = () => {
      const rect = popoverElement.getBoundingClientRect();
      const anchorElement = anchorElRef.current;
      const position =
        anchorElement && complexState.isStickToAnchor
          ? computeAnchorPopupPosition({
              anchorRect: anchorElement.getBoundingClientRect(),
              popoverWidth: rect.width,
              popoverHeight: rect.height,
            })
          : computePointPopupPosition({
              pointX: complexState.coords.x,
              pointY: complexState.coords.y,
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
  }, [handleClose, complexState]);

  const value = useMemo<TPopoverContext>(
    () => ({ open: handleOpen, close: handleClose }),
    [handleOpen, handleClose],
  );

  const popover = (
    <>
      <div className="overlay" ref={overlayElRef} />
      <div className="popover" ref={popoverElRef}>
        {complexState?.renderer?.({ onClose: handleClose })}
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
