import React from 'react';
import { cn } from '@/shared/shadcn/utils';
import style from './Tree.module.css';
import { TreeNode } from './types';

type TreeItemProps = {
  node: TreeNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  onSelect?: (node: TreeNode) => void;
  onContextMenu?: (event: React.MouseEvent, node: TreeNode) => void;
};

export const TreeItem = ({
  node,
  depth,
  expanded,
  onToggle,
  onSelect,
  onContextMenu,
}: TreeItemProps) => {
  const isFolder = !!(node.children && node.children.length > 0);
  const isExpanded = isFolder && expanded.has(node.id);

  // Handlers are stable (no extra deps) → fewer child re-renders
  const handleClick = React.useCallback(() => {
    if (isFolder) onToggle(node.id);
    else onSelect?.(node);
  }, [isFolder, node, onSelect, onToggle]);

  const handleContext = React.useCallback(
    (e: React.MouseEvent) => {
      if (onContextMenu) onContextMenu(e, node);
    },
    [onContextMenu, node],
  );

  return (
    <div
      aria-expanded={isFolder ? isExpanded : undefined}
      aria-level={depth}
      className={style.rtItem}
      data-nodeid={node.id}
      role="treeitem"
      style={{
        paddingInlineStart: `calc(${depth - 1} * var(--rt-indent))`,
      }}
      onContextMenu={handleContext}
    >
      <button className={style.rtRow} title={node.label} type="button" onClick={handleClick}>
        {isFolder ? (
          <span aria-hidden className={cn(style.rtCaret, { [style.rtCaretOpen]: isExpanded })} />
        ) : (
          <span aria-hidden className={style.rtDot} />
        )}
        <span className={style.rtLabel}>{node.label}</span>
      </button>

      {isFolder && isExpanded && (
        <div className={style.rtGroup} role="group">
          {node.children!.map((child) => (
            <TreeItem
              depth={depth + 1}
              expanded={expanded}
              key={child.id}
              node={child}
              onContextMenu={onContextMenu}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};
