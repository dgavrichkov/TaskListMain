import { Card, CardContent, CardHeader } from '@/shared/ui/Card';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteBlockNode, editBlockNode, fetchBlockNodes, postBlockNode } from './api';
import { TBlockNode, TCreateBlockNode } from '@/features/BlockNotion/model/types';

const targetType = 'base';
const targetId = 'i-do-not-know-yet';

export const BlockNotionMain = () => {
  const qc = useQueryClient();
  const queryKey = ['blockNodes', targetType, targetId];
  const { data, status } = useQuery({
    queryKey,
    queryFn: fetchBlockNodes,
  });

  const { mutateAsync: addNode, isPending: isAdding } = useMutation({
    mutationFn: postBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  const { mutateAsync: deleteNode, isPending: isDeleting } = useMutation({
    mutationFn: deleteBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  const { mutateAsync: editNode, isPending: isEditing } = useMutation({
    mutationFn: editBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

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
          {data.length === 0 ? (
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
        <button
          className="mt-5 cursor-pointer border-solid border-4 border-light-blue-500"
          title="create new block"
          onClick={handleCreateBlockNode}
        >
          {isAdding ? '🔃' : '➕'}
        </button>
      </CardContent>
    </Card>
  );
};
