import React from 'react';
import { CirclePlus } from 'lucide-react';
import { CreateBlockNodeDto } from '@/shared/api/generated/data-contracts';
import { Button } from '@/shared/ui';
import { BlockNodeTextForm } from '../BlockNodeText/BlockNodeTextForm';

type TBlockNodeEditorBody = Omit<CreateBlockNodeDto, 'documentId'>;

type TProps = {
  onCreateBlock: (dto: TBlockNodeEditorBody) => void;
};

/** Кнопка создания нового блокнода */
export const BlockNodeCreator = ({ onCreateBlock }: TProps) => {
  // TODO спустить ниже
  const [isCreating, setIsCreating] = React.useState(false);

  const handleCreateBlockNode = () => {
    setIsCreating(true);
  };

  const handleConfirm = (payload: string) => {
    // TODO - получение контента из компонента, ответственного за тип блока
    const nodeData: TBlockNodeEditorBody = {
      parentId: '',
      position: 0,
      blocktype: 'text',
      content: payload,
    };

    // создатель блокнода передает инфу о блокноде наверх, а там уже решают, куда ее пихать, не наше дело.
    onCreateBlock(nodeData);

    setIsCreating(false);
  };

  const handleCancel = () => {
    setIsCreating(false);
  };

  // TODO возможность сменить тип создаваемого блока; здесь должна появиться какая-то диспетчеризация компонентов

  return (
    <>
      {isCreating && <BlockNodeTextForm onCancel={handleCancel} onConfirm={handleConfirm} />}
      {!isCreating && (
        <Button
          className="cursor-pointer"
          size="icon"
          title="create new block"
          variant={'outline'}
          onClick={handleCreateBlockNode}
        >
          <CirclePlus />
        </Button>
      )}
    </>
  );
};
