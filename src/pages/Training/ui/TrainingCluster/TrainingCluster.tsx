import { CSSProperties } from 'react';
import { TTrainingCluster } from '../../model/interfaces';
import { TrainingSet } from '../TrainingSet';

type Props = {
  data: TTrainingCluster;
};

export const TrainingCluster = ({ data: cluster }: Props) => {
  const { isMonocluster, sets } = cluster;
  return (
    <div className="cluster">
      <ul className="cluster__sets" style={{ '--num': `${sets.length}` } as CSSProperties}>
        {sets.map((set) => (
          <TrainingSet data={set} key={set.id} />
        ))}
      </ul>
    </div>
  );
};
