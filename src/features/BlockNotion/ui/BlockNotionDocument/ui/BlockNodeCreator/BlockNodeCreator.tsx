import React from 'react';
import { CirclePlus } from 'lucide-react';
import { CreateBlockNodeDto } from '@/shared/api/generated/data-contracts';
import { Button } from '@/shared/ui';
import { useAddBlockNodeMutation } from '@/features/BlockNotion/hooks/useAddBlockNodeMutation';
import { BlockNodeForm } from '../BlockNodeForm/BlockNodeForm';

type TProps = {
  documentId: string;
  queryKey: string[];
};

export const BlockNodeCreator = ({ documentId, queryKey }: TProps) => {
  const [isCreating, setIsCreating] = React.useState(false);
  const { addNode } = useAddBlockNodeMutation(queryKey);

  const handleCreateBlockNode = () => {
    setIsCreating(true);
  };

  const handleConfirm = (payload: string) => {
    // TODO - получение контента из компонента, ответственного за тип блока
    const nodeData: CreateBlockNodeDto = {
      parentId: '',
      position: 0,
      documentId,
      blocktype: 'text',
      content: payload,
    };

    addNode(nodeData);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setIsCreating(false);
  };

  return (
    <>
      {isCreating && (
        <BlockNodeForm documentId={documentId} onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
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
