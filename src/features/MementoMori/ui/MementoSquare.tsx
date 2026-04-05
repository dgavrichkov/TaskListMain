import { cn } from '@/shared/shadcn/utils';

type Props = {
  isFilled?: boolean;
};

export const MementoSquare = ({ isFilled = false }: Props) => {
  return (
    <div
      className={cn('memento-square', {
        ['memento-square--filled']: isFilled,
      })}
    ></div>
  );
};
