/* eslint-disable react/prop-types */
import { TREE_DATA } from './constants';
import { Tree } from '../../../shared/ui/Tree';
import { TPopoverContentComponent, TPopoverContentRenderer } from '@/shared/ui/Popover';
import { ReactNode } from 'react';
import { ensureRenderer } from './menu.utils';
import { usePopover } from '@/shared/ui/Popover/hooks/usePopover';
import { CtxMenuBody } from './CtxMenuBody';

const DefaultMenu: TPopoverContentComponent<{ children?: ReactNode }> = ({ api }) => (
  <CtxMenuBody>
    <div role="none">
      <button className="cm-item" onClick={api.onClose}>
        Закрыть
      </button>
    </div>
  </CtxMenuBody>
);

const FolderMenu: TPopoverContentComponent<{ name: string }> = ({ api, name }) => {
  const popoverController = usePopover();

  return (
    <CtxMenuBody>
      <div className="grid gap-1 justify-items-start" role="none">
        <div style={{ opacity: 0.8 }}>Папка: {name}</div>
        <button className="cm-item" onClick={api.onClose}>
          Открыть
        </button>
        <button className="cm-item" onClick={api.onClose}>
          Новый файл…
        </button>
        <button onClick={(e) => {}}>Подменю →</button>
      </div>
    </CtxMenuBody>
  );
};

const FileMenu: TPopoverContentComponent<{ name: string }> = ({ api, name }) => (
  <CtxMenuBody>
    <div className="grid gap-1 justify-items-start" role="none">
      <div style={{ opacity: 0.8 }}>Файл: {name}</div>
      <button className="cm-item" onClick={api.onClose}>
        Открыть
      </button>
      <button className="cm-item" onClick={api.onClose}>
        Скачать
      </button>
    </div>
  </CtxMenuBody>
);

/**
 * Маппинг: nodeId → MenuRenderer
 * Значения — либо готовый renderer, либо кортеж [Компонент, props], который нормализуем в renderer.
 */
const RAW_MAP = new Map<string, TPopoverContentRenderer | [TPopoverContentComponent<any>, any]>([
  ['root-1', [FolderMenu, { name: 'src' }]],
  ['root-2', [FolderMenu, { name: 'public' }]],
  ['n2', [FileMenu, { name: 'App.tsx' }]],
  ['n6', [FileMenu, { name: 'index.html' }]],
  [
    'custom',
    (api) => (
      <div style={{ padding: 8 }}>
        Custom ctx menu{' '}
        <button className="cm-item" onClick={api.onClose}>
          OK
        </button>
      </div>
    ),
  ],
]);

/** Гарантированно возвращаем MenuRenderer */
export const MAP_NODE_TO_RENDER: ReadonlyMap<string, TPopoverContentRenderer> = new Map(
  Array.from(RAW_MAP, ([k, v]) => [k, ensureRenderer(v)] as const),
);

/** Фоллбэк-рендерер (на случай отсутствия id в мапе) */
export const FALLBACK_RENDERER: TPopoverContentRenderer = (api) => <DefaultMenu api={api} />;

export default function DemoTree() {
  // Из провайдера контекстного меню мы получаем объект управления поповером
  const popoverControl = usePopover();

  console.log('TREE RENDER');

  return (
    <div>
      <Tree
        initialExpandedIds={['root-1']}
        nodes={TREE_DATA}
        onContextMenu={(e, node) => {
          e.preventDefault();
          e.stopPropagation();

          console.log('context on', node);

          popoverControl.open({
            clientX: e.clientX,
            clientY: e.clientY,
            anchorEl: e.target as HTMLElement,
            renderer: MAP_NODE_TO_RENDER.get(node.id) ?? FALLBACK_RENDERER,
          });
        }}
        onSelect={(node) => console.log('select', node)}
      />
    </div>
  );
}
