import { TTrainingSet } from '../../model/interfaces';
import { TrainingSet } from '../TrainingSet';

type Props = {
  sets: TTrainingSet[];
};

export const TrainingSession = ({ sets }: Props) => {
  return (
    <div className="training-session">
      {sets.length && sets.map((set) => <TrainingSet data={set} key={set.id} />)}
    </div>
  );
};
