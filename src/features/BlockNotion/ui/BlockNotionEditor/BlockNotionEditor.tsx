import { BlockNodeDto } from '@/shared/api/generated/data-contracts';
import { BlockNodeCreator } from '../BlockNotionDocument/ui/BlockNodeCreator/BlockNodeCreator';
import { BlockNotionBlock } from '../BlockNotionBlock';
import { Button } from '@/shared/ui';

type TProps = {
  onCreate: (dto: any) => void;
  onDelete: (id: string) => void;
  onUpdate: (dto: any) => void;
  data: BlockNodeDto[];
};

export const BlockNotionEditor = ({ data, onCreate, onDelete, onUpdate }: TProps) => {
  // в футере - кнопки для local first работы, когда документа еще не существует...

  return (
    <div>
      <ul>
        <>
          {data.length === 0 ? (
            <li className="pb-2 mb-2">Пусто пока :(</li>
          ) : (
            data.map((item) => (
              <li className="pb-2 mb-2" key={item.id}>
                <BlockNotionBlock item={item} onDelete={onDelete} onUpdate={onUpdate} />
              </li>
            ))
          )}
        </>
        <li>
          <BlockNodeCreator onCreateBlock={onCreate} />
        </li>
      </ul>
      <footer className="mt-4 grid gap-2 grid-cols-2 hidden">
        <Button>Confirm</Button>
        <Button variant={'outline'}>Cancel</Button>
      </footer>
    </div>
  );
};
