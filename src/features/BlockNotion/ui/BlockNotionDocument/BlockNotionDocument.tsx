import { CreateBlockNodeDto } from '@/shared/api/generated/data-contracts';
import { Button } from '@/shared/ui';
import { BlockNotionBlock } from '../BlockNotionBlock';
import { useBlockNodeListQuery } from '../../hooks/useBlockNodeListQuery';

type TProps = {
  documentId: string;
};

/** Отвечает за рендер Документа блокноушна. */
export const BlockNotionDocument = ({ documentId }: TProps) => {
  const queryKey = ['blockNodes', documentId];
  const { data, status, addNode, isAdding } = useBlockNodeListQuery(queryKey);
  const handleCreateBlockNode = () => {
    const content = window.prompt('Введите текст узла:', '')?.trim();

    if (content == null || content === '') return;

    // TODO - получение контента из компонента, ответственного за тип блока
    const nodeData: CreateBlockNodeDto = {
      parentId: '',
      position: 0,
      documentId,
      blocktype: 'text',
      content,
    };

    addNode(nodeData);
  };

  if (status === 'pending') {
    return 'loading...';
  }

  if (status === 'error') {
    return 'error ;(';
  }

  return (
    <article>
      <div>Это пак блокнодов</div>
      <ul>
        {!data || data.length === 0 ? (
          <div>Пусто пока :(</div>
        ) : (
          data.map((item) => (
            <li className="pb-2 mb-2" key={item.id}>
              <BlockNotionBlock item={item} />
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
    </article>
  );
};
