import { Card, CardContent, CardHeader } from '@/shared/ui/Card';
import { TBlockNode, TCreateBlockNode } from '@/features/BlockNotion/model/types';
import { useBlockNotionMainQuery } from './useBlockNotionMainQuery';
import { Button } from '@/shared/ui/Button';

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
    const nodeData: TCreateBlockNode = {
      content,
      parentId: null,
      position: 0,
      targetId,
      targetType,
      type: 'text',
    };

    addNode(nodeData);
  };

  const handleEditBlockNode = (id: string, data: TBlockNode) => {
    const newContent = window.prompt('Введите текст узла:', data.content)?.trim();

    const updData = {
      ...data,
      content: newContent,
    };

    editNode({
      id,
      data: updData,
    });
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
                {item.content}
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
