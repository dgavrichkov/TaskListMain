import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { BlockNodeDto } from '@/shared/api/generated/data-contracts';
import { Button } from '@/shared/ui';
import { useBlockNodeItemQuery } from '../../hooks/useBlockNodeItemQuery';
import { BlockNodeForm } from '../BlockNotionDocument/ui/BlockNodeForm/BlockNodeForm';

type TProps = {
  item: BlockNodeDto;
};

/** компонент рендера блок-ноды
 * здесь должна быть какая-то диспетчеризация по типам блок-нод
 * Но пока предполагается, что у нас есть только текст.
 */
export const BlockNotionBlock = ({ item }: TProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteNode, editNode } = useBlockNodeItemQuery(
    ['mutateBlockNode', item.id],
    ['blockNodes', item.documentId],
  );

  const handleEditBlockNode = () => {
    if (item.blocktype === 'text') {
      setIsEditing(true);
    }
  };

  const handleDeleteBlockNode = () => {
    deleteNode(item.id);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleConfirmEdit = (payload: string) => {
    const newContent = payload;
    const updData = {
      ...item,
      content: newContent,
    };

    editNode({
      id: item.id,
      data: updData,
    });

    setIsEditing(false);
  };

  return (
    <>
      {!isEditing && (
        <div className="flex gap-4">
          <div>{item.blocktype === 'text' && item.content}</div>
          <div className="flex gap-2 ml-auto">
            <Button
              className="ml-2 cursor-pointer"
              size={'icon'}
              variant={'outline'}
              onClick={handleEditBlockNode}
            >
              <Pencil />
            </Button>
            <Button
              className="cursor-pointer"
              size={'icon'}
              title="delete node"
              variant={'destructive'}
              onClick={handleDeleteBlockNode}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      )}
      {isEditing && (
        <BlockNodeForm
          data={item.content}
          documentId={item.documentId}
          onCancel={handleCancelEdit}
          onConfirm={handleConfirmEdit}
        />
      )}
    </>
  );
};
