import React from 'react';
import type { MenuAPI, MenuRenderer, MenuComponent } from './types';

/** Превращает компонент меню в render-колбэк для провайдера */
export function asRenderer<P extends NonNullable<unknown>>(
  Comp: MenuComponent<P>,
  fixedProps: P,
): MenuRenderer {
  return (api: MenuAPI) => <Comp {...fixedProps} api={api} />;
}

/** Нормализатор: принимает либо уже renderer, либо компонент с props → renderer */
export function ensureRenderer<P extends NonNullable<unknown>>(
  entry: MenuRenderer | [MenuComponent<P>, P],
): MenuRenderer {
  return Array.isArray(entry) ? asRenderer(entry[0], entry[1]) : entry;
}
