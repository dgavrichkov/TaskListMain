import { BlockNotionBlock } from '../../../BlockNotionBlock';
import { BlockNodeDto } from '@/shared/api/generated/data-contracts';

type TProps = {
  data: BlockNodeDto[];
};

export const BlockNodeList = ({ data }: TProps) => {
  return (
    <>
      {data.length === 0 ? (
        <li className="pb-2 mb-2">Пусто пока :(</li>
      ) : (
        data.map((item) => (
          <li className="pb-2 mb-2" key={item.id}>
            <BlockNotionBlock item={item} />
          </li>
        ))
      )}
    </>
  );
};
