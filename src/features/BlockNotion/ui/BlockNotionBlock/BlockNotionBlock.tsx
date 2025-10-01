import { BlockNodeDto } from '@/shared/api/generated/data-contracts';
import { useBlockNodeItemQuery } from '../../hooks/useBlockNodeItemQuery';

type TProps = {
  item: BlockNodeDto;
};

/** компонент рендера блок-ноды
 * здесь должна быть какая-то диспетчеризация по типам блок-нод
 * Но пока предполагается, что у нас есть только текст.
 */
export const BlockNotionBlock = ({ item }: TProps) => {
  const { deleteNode, editNode, isDeleting, isEditing } = useBlockNodeItemQuery(
    ['mutateBlockNode', item.id],
    ['blockNodes', item.documentId],
  );

  const handleEditBlockNode = (id: string, data: BlockNodeDto) => {
    if (data.blocktype === 'text') {
      const newContent = window.prompt('Введите текст узла:', data.content)?.trim();

      if (!newContent) return;

      const updData = {
        ...data,
        content: newContent,
      };

      editNode({
        id,
        data: updData,
      });
    }
  };

  const handleDeleteBlockNode = (id: string) => {
    deleteNode(id);
  };

  return (
    <div>
      {item.blocktype === 'text' && item.content}
      <span className="ml-4">
        <button
          className="cursor-pointer"
          title="delete node"
          onClick={() => handleDeleteBlockNode(item.id)}
        >
          {isDeleting ? '🔃' : '➖'}
        </button>
        <button className="ml-2 cursor-pointer" onClick={() => handleEditBlockNode(item.id, item)}>
          {isEditing ? '🔃' : '🖍️'}
        </button>
      </span>
    </div>
  );
};
