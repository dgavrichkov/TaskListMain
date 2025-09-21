import { TreeNode } from '@/shared/ui/Tree';

export const TREE_DATA: TreeNode[] = [
  {
    id: 'root-1',
    label: 'src',
    children: [
      { id: 'n1', label: 'main.tsx' },
      { id: 'n2', label: 'App.tsx' },
      {
        id: 'n3',
        label: 'components',
        children: [
          { id: 'n4', label: 'Button.tsx' },
          { id: 'n5', label: 'Tree.tsx' },
        ],
      },
    ],
  },
  {
    id: 'root-2',
    label: 'public',
    children: [
      { id: 'n6', label: 'index.html' },
      { id: 'n7', label: 'favicon.svg' },
    ],
  },
];
