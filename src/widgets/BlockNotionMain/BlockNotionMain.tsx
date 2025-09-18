import { Card, CardContent, CardHeader } from '@/shared/ui/Card';
import { useBlockNotionMainQuery } from './useBlockNotionMainQuery';
import { Button } from '@/shared/ui/Button';
import { BlockNodeDto, CreateBlockNodeDto } from '@/shared/api/generated/data-contracts';

const targetType = 'base';
const targetId = 'i-do-not-know-yet';
const queryKey = ['blockNodes', targetType, targetId];

export const BlockNotionMain = () => {
  const { addNode, deleteNode, editNode, isAdding, isDeleting, isEditing, data, status } =
    useBlockNotionMainQuery(queryKey);

  const handleCreateBlockNode = () => {
    const content = window.prompt('Введите текст узла:', '')?.trim();

    if (content == null || content === '') return;

    // TODO - получение контента из компонента, ответственного за тип блока
    const nodeData: CreateBlockNodeDto = {
      parentId: '',
      position: 0,
      documentId: '1',
      blocktype: 'text',
      content,
    };

    addNode(nodeData);
  };

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

  if (status === 'pending') {
    return 'loading...';
  }

  if (status === 'error') {
    return 'error ;(';
  }

  return (
    <Card>
      <CardHeader className="font-bold">
        <h2>БлокНоды с основного эндпоинта</h2>
      </CardHeader>
      <CardContent>
        <ul>
          {!data || data.length === 0 ? (
            <div>Пусто пока :(</div>
          ) : (
            data.map((item) => (
              <li className="pb-2 mb-2" key={item.id}>
                {item.blocktype === 'text' && item.content}
                <span className="ml-4">
                  <button
                    className="cursor-pointer"
                    title="delete node"
                    onClick={() => handleDeleteBlockNode(item.id)}
                  >
                    {isDeleting ? '🔃' : '➖'}
                  </button>
                  <button
                    className="ml-2 cursor-pointer"
                    onClick={() => handleEditBlockNode(item.id, item)}
                  >
                    {isEditing ? '🔃' : '🖍️'}
                  </button>
                </span>
              </li>
            ))
          )}
        </ul>
        <Button
          className="mt-5 cursor-pointer"
          title="create new block"
          variant={'outline'}
          onClick={handleCreateBlockNode}
        >
          {isAdding ? '🔃' : '➕'}
        </Button>
      </CardContent>
    </Card>
  );
};
