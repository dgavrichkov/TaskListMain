import React from 'react';
import { TreeItem } from './TreeItem';

import style from './Tree.module.css';
import { TreeNode } from './types';

export type TreeProps = {
  nodes: TreeNode[];
  /** Called when user clicks a node */
  onSelect?: (node: TreeNode) => void;
  /** Called on right-click (context menu) — we'll wire the menu here later */
  onContextMenu?: (event: React.MouseEvent, node: TreeNode) => void;
  /** Uncontrolled initial expanded ids */
  initialExpandedIds?: string[];
};

export const Tree = ({ nodes, onSelect, onContextMenu, initialExpandedIds }: TreeProps) => {
  const [expanded, setExpanded] = React.useState<Set<string>>(
    () => new Set(initialExpandedIds ?? []),
  );

  const toggle = React.useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div aria-label="Tree" className={style.rtRoot} role="tree">
      {nodes.map((n) => (
        <TreeItem
          depth={1}
          expanded={expanded}
          key={n.id}
          node={n}
          onContextMenu={onContextMenu}
          onSelect={onSelect}
          onToggle={toggle}
        />
      ))}
    </div>
  );
};
