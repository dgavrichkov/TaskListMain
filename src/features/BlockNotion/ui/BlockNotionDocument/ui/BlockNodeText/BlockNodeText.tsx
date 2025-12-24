import { Button } from '@/shared/ui';
import { useRef } from 'react';
import { BlockNodeTextForm } from './BlockNodeTextForm';
import { BlockNodeDto } from '@/shared/api/generated/data-contracts';
import { Pencil, Trash2 } from 'lucide-react';

type TProps = {
  // TODO - пока побудут здесь; но столь общие действия надо вынести в контекстное меню блока
  onEdit: () => void;
  onDelete: () => void;
  onCancelEdit: () => void;
  onConfirmEdit: (payload: string) => void;
  isEditing: boolean;
  item: BlockNodeDto;
};

/** Компонент текстового блокнода */
export const BlockNodeText = ({
  item,
  onDelete,
  onEdit,
  onCancelEdit,
  onConfirmEdit,
  isEditing,
}: TProps) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      {!isEditing && (
        <div className="flex gap-2">
          <div className="flex items-center" ref={textRef} onClick={onEdit}>
            {item.blocktype === 'text' && item.content}
          </div>
          <div className="flex gap-2 ml-auto">
            <Button
              className="ml-2 cursor-pointer"
              size={'icon'}
              variant={'outline'}
              onClick={onEdit}
            >
              <Pencil />
            </Button>
            <Button
              className="cursor-pointer"
              size={'icon'}
              title="delete node"
              variant={'destructive'}
              onClick={onDelete}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      )}
      {isEditing && (
        <BlockNodeTextForm
          textcontent={item.content}
          onCancel={onCancelEdit}
          onConfirm={onConfirmEdit}
        />
      )}
    </div>
  );
};
