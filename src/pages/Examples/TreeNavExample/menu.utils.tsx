import React from 'react';
import type {
  TPopoverAPI,
  TPopoverContentRenderer,
  TPopoverContentComponent,
} from '@/shared/ui/Popover/types';

/** Превращает компонент меню в render-колбэк для провайдера */
export function asRenderer<P extends NonNullable<unknown>>(
  Comp: TPopoverContentComponent<P>,
  fixedProps: P,
): TPopoverContentRenderer {
  return (api: TPopoverAPI) => <Comp {...fixedProps} api={api} />;
}

/** Нормализатор: принимает либо уже renderer, либо компонент с props → renderer */
export function ensureRenderer<P extends NonNullable<unknown>>(
  entry: TPopoverContentRenderer | [TPopoverContentComponent<P>, P],
): TPopoverContentRenderer {
  return Array.isArray(entry) ? asRenderer(entry[0], entry[1]) : entry;
}
