import { useBlockNodesByDocument } from '../../hooks/useBlockNodesByDocument';
import { BlockNodeCreator } from './ui/BlockNodeCreator/BlockNodeCreator';
import { BlockNodeList } from './ui/BlockNodeList/BlockNodeList';

type TProps = {
  documentId: string;
};

/** Отвечает за рендер Документа блокноушна. */
export const BlockNotionDocument = ({ documentId }: TProps) => {
  const queryKey = ['blockNodes', documentId];
  const { data, status } = useBlockNodesByDocument(documentId, queryKey);

  if (status === 'pending') {
    return 'loading...';
  }

  if (status === 'error') {
    return 'error ;(';
  }

  return (
    <article>
      <h4>{data?.title}</h4>
      <ul>
        <BlockNodeList data={data?.blocks || []} />
        <li>
          <BlockNodeCreator documentId={documentId} queryKey={queryKey} />
        </li>
      </ul>
    </article>
  );
};
