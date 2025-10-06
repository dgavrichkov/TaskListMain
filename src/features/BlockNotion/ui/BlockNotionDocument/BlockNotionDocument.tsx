import { useBlockNodeListQuery } from '../../hooks/useBlockNodeListQuery';
import { BlockNodeCreator } from './ui/BlockNodeCreator/BlockNodeCreator';
import { BlockNodeList } from './ui/BlockNodeList/BlockNodeList';

type TProps = {
  documentId: string;
};

/** Отвечает за рендер Документа блокноушна. */
export const BlockNotionDocument = ({ documentId }: TProps) => {
  const queryKey = ['blockNodes', documentId];
  const { data, status } = useBlockNodeListQuery(queryKey);

  if (status === 'pending') {
    return 'loading...';
  }

  if (status === 'error') {
    return 'error ;(';
  }

  return (
    <article>
      <ul>
        <BlockNodeList data={data || []} />
        <li>
          <BlockNodeCreator documentId={documentId} />
        </li>
      </ul>
    </article>
  );
};
