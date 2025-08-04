import { Checkbox } from '@/shared/ui/Checkbox';
import { TTrainingSet } from '../../model/interfaces';
import { Badge } from '@/shared/ui/Badge';
import { cn } from '@/shared/shadcn/utils';

type Props = {
  data: TTrainingSet;
  isMonocluster?: boolean;
};

export const TrainingSet = ({ data, isMonocluster = false }: Props) => {
  return (
    <div className={cn('set', { 'set--horizontal': !isMonocluster })} title={data.exerciseId}>
      {!isMonocluster && <Badge>{data.exerciseId}</Badge>}
      <div>{data.count}</div>
      <Checkbox className="size-6 cursor-pointer" />
    </div>
  );
};
