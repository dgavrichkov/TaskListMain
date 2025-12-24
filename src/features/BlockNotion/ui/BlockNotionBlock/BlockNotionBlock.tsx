import { useState } from 'react';
import { BlockNodeDto } from '@/shared/api/generated/data-contracts';
import { BlockNodeText } from '../BlockNotionDocument/ui/BlockNodeText/BlockNodeText';

type TProps = {
  item: BlockNodeDto;
  onUpdate: (upd: { id: string; data: any }) => void;
  onDelete: (id: string) => void;
};

/** компонент рендера блок-ноды
 * здесь должна быть какая-то диспетчеризация по типам блок-нод
 * Но пока предполагается, что у нас есть только текст.
 */
export const BlockNotionBlock = ({ item, onUpdate, onDelete }: TProps) => {
  const [isEditing, setIsEditing] = useState(false);

  // надо убрать прямое обращение к апи

  const handleStartEditBlockNode = () => {
    if (item.blocktype === 'text') {
      console.log('Edit!');
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDeleteBlockNode = () => {
    onDelete(item.id);
  };

  const handleConfirmEdit = (payload: string) => {
    const newContent = payload;
    const updData = {
      ...item,
      content: newContent,
    };

    onUpdate({
      id: item.id,
      data: updData,
    });

    setIsEditing(false);
  };

  return (
    <>
      {item.blocktype === 'text' && (
        <BlockNodeText
          isEditing={isEditing}
          item={item}
          onCancelEdit={handleCancelEdit}
          onConfirmEdit={handleConfirmEdit}
          onDelete={handleDeleteBlockNode}
          onEdit={handleStartEditBlockNode}
        />
      )}
    </>
  );
};
