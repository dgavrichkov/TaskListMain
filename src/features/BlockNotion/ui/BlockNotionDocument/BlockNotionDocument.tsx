import { useBlockNodesByDocument } from '../../hooks/useBlockNodesByDocument';
import { CreateBlockNodeDto } from '@/shared/api/generated/data-contracts';
import { useAddBlockNodeMutation } from '../../hooks/useAddBlockNodeMutation';
import { BlockNotionEditor } from '../BlockNotionEditor';
import { useBlockNodeItemQuery } from '../../hooks/useBlockNodeItemQuery';

type TProps = {
  documentId: string;
};

/** Отвечает за рендер Документа блокноушна. */
export const BlockNotionDocument = ({ documentId }: TProps) => {
  const queryKey = ['blockNodes', documentId];
  const { createBlockNode } = useAddBlockNodeMutation(queryKey);

  // сюда можно подключить стор, куда редактор будет коммитить свои блокноды

  // нехорошо, наверное. хотя как еще?
  const { data, status } = useBlockNodesByDocument(documentId, queryKey);
  const { deleteNode, editNode } = useBlockNodeItemQuery(['mutateBlockNode'], ['blockNodes']);

  if (status === 'pending') {
    return 'loading...';
  }

  if (status === 'error') {
    return 'error ;(';
  }

  // вот Документ решает, что делать при создании блок-нода. Можно в стор, можно в апи.
  const handleCreateBlockNode = (dto: Omit<CreateBlockNodeDto, 'documentId'>) => {
    const createData = {
      ...dto,
      documentId,
    };

    createBlockNode(createData);
  };

  // TODO предусмотреить ситуацию, когда documentId не будет. Коллекция блок-нодов должна создаваться без инфы о документе. В редакторе она вообще не нужна, нужно порезать типы под редактор.
  const handleUpdateBlockNode = (upd: { id: string; data: any }) => {
    editNode(upd);
  };
  const handleDeleteBlockNode = (id: string) => {
    deleteNode(id);
  };

  return (
    <article>
      <h4>{data?.title}</h4>
      <BlockNotionEditor
        data={data?.blocks || []}
        onCreate={handleCreateBlockNode}
        onDelete={handleDeleteBlockNode}
        onUpdate={handleUpdateBlockNode}
      />
    </article>
  );
};
