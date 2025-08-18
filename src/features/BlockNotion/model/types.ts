import { BlockDataMap } from './blocktypes';

// для полиморфной связи блокноды и других сущностей
// Типы модулей, которые могут иметь документ
type TargetType = 'base' | 'habit' | 'flashcard' | 'workout' | 'timer';

export interface Document {
  id: string; // UUID
  title: string;
  createdAt: string;
  updatedAt: string;
}

type BlockType =
  | 'text'
  | 'image'
  | 'pageLink'
  | 'callout'
  | 'list'
  | 'listItem'
  | 'quote'
  | 'code'
  | 'divider';

export type BaseBlock = {
  id: string;
  documentId: string;
  parentId: string | null;
  position: number;
  blocktype: BlockType;
  // дети храним отдельно (по parentId), но фронту можно отдавать уже собранным деревом
  createdAt: string;
  updatedAt: string;
};

// Mapped Union
export type TBlockNode = {
  [K in BlockType]: BaseBlock & { blocktype: K; content: BlockDataMap[K] };
}[BlockType];

export type BlockTreeNode = TBlockNode & { children: BlockTreeNode[] };

// Удобный сужающий type guard (не обязателен, но приятно читается)
export function isTextBlock(n: TBlockNode): n is Extract<TBlockNode, { blocktype: 'text' }> {
  return n.blocktype === 'text';
}

// Ответы API
export type DocumentTarget = {
  id: string;
  documentId: string;
  targetType: TargetType;
  targetId: string;
  role?: 'primary' | 'reference';
  createdAt: string;
};

export type DocumentWithBlocksFlat = {
  document: Document;
  blocks: TBlockNode[];
  targets?: DocumentTarget[];
};
export type DocumentWithBlocksTree = {
  document: Document;
  blocks: BlockTreeNode[];
  targets?: DocumentTarget[];
};
