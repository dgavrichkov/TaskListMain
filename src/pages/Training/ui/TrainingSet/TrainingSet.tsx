import { Checkbox } from '@/shared/ui/Checkbox';
import { TTrainingSet } from '../../model/interfaces';

type Props = {
  data: TTrainingSet;
};

export const TrainingSet = ({ data }: Props) => {
  return (
    <div className="set" title={data.exerciseId}>
      <div>{data.count}</div>
      <Checkbox className="size-6 cursor-pointer" />
    </div>
  );
};
