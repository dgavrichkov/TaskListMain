/* eslint-disable react/prop-types */
import { TREE_DATA } from './constants';
import { useContextMenu } from './ContextMenuProvider';
import { Tree } from '../../../shared/ui/Tree';
import { MenuComponent, MenuRenderer } from './types';
import { ReactNode } from 'react';
import { ensureRenderer } from './menu.utils';

const DefaultMenu: MenuComponent<{ children?: ReactNode }> = ({ api }) => (
  <div role="none">
    <button className="cm-item" onClick={api.onClose}>
      Закрыть
    </button>
  </div>
);

const FolderMenu: MenuComponent<{ name: string }> = ({ api, name }) => (
  <div className="grid gap-1 justify-items-start" role="none">
    <div style={{ opacity: 0.8 }}>Папка: {name}</div>
    <button className="cm-item" onClick={api.onClose}>
      Открыть
    </button>
    <button className="cm-item" onClick={api.onClose}>
      Новый файл…
    </button>
  </div>
);

const FileMenu: MenuComponent<{ name: string }> = ({ api, name }) => (
  <div className="grid gap-1 justify-items-start" role="none">
    <div style={{ opacity: 0.8 }}>Файл: {name}</div>
    <button className="cm-item" onClick={api.onClose}>
      Открыть
    </button>
    <button className="cm-item" onClick={api.onClose}>
      Скачать
    </button>
  </div>
);

/**
 * Маппинг: nodeId → MenuRenderer
 * Значения — либо готовый renderer, либо кортеж [Компонент, props], который нормализуем в renderer.
 */
const RAW_MAP = new Map<string, MenuRenderer | [MenuComponent<any>, any]>([
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
export const MAP_NODE_TO_RENDER: ReadonlyMap<string, MenuRenderer> = new Map(
  Array.from(RAW_MAP, ([k, v]) => [k, ensureRenderer(v)] as const),
);

/** Фоллбэк-рендерер (на случай отсутствия id в мапе) */
export const FALLBACK_RENDERER: MenuRenderer = (api) => <DefaultMenu api={api} />;

export default function DemoTree() {
  // Из провайдера контекстного меню мы получаем объект управления поповером
  const menu = useContextMenu();

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

          menu.open({
            clientX: e.clientX,
            clientY: e.clientY,
            render: MAP_NODE_TO_RENDER.get(node.id) ?? FALLBACK_RENDERER,
          });
        }}
        onSelect={(node) => console.log('select', node)}
      />
    </div>
  );
}
