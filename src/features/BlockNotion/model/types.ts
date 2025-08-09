// backend type - группа блокнодов
export interface Document {
  id: string; // UUID
  title: string;
  createdAt: string;
  updatedAt: string;
}

// backend type
export interface TBlockNode {
  id: string;
  targetType: BlockNodeTargetType;
  targetId: string;
  parentId: string | null;
  position: number;
  type: 'text';
  content: string;
  createdAt: string;
  updatedAt: string;
}

// ?
export interface BlockNodeTree extends TBlockNode {
  children: BlockNodeTree[];
}

// для полиморфной связи блокноды и других сущностей
export type BlockNodeTargetType = 'base' | 'habit' | 'flashcard' | 'workout' | 'timer';

// ?
export class CreateBlockNodeDto {
  targetType!: BlockNodeTargetType;
  targetId!: string;
  parentId?: string | null;
  position!: number;
  type!: 'text';
  content!: string;
}

// ?
export class UpdateBlockNodeDto {
  content?: string;
  position?: number;
  parentId?: string | null;
}

// временно?
export type TCreateBlockNode = Omit<TBlockNode, 'id' | 'createdAt' | 'updatedAt'>;
