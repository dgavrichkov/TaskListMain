import { BlockDataMap } from './blocktypes';

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
  targetType: BlockNodeTargetType;
  targetId: string;
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

// для полиморфной связи блокноды и других сущностей
export type BlockNodeTargetType = 'base' | 'habit' | 'flashcard' | 'workout' | 'timer';

// временно?
// Тип для создания конкретного блока
export type TCreateBlockNode<K extends BlockType = BlockType> = Omit<
  BaseBlock,
  'id' | 'createdAt' | 'updatedAt'
> & {
  blocktype: K;
  content: BlockDataMap[K];
};

// Удобный сужающий type guard (не обязателен, но приятно читается)
export function isTextBlock(n: TBlockNode): n is Extract<TBlockNode, { blocktype: 'text' }> {
  return n.blocktype === 'text';
}
