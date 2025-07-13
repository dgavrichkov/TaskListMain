import { TTrainingSet } from '../../model/interfaces';

type Props = {
  data: TTrainingSet;
};

export const TrainingSet = ({ data }: Props) => {
  return (
    <div className="set">
      <div>count: {data.count}</div>
    </div>
  );
};
