import { CSSProperties } from 'react';
import { TTrainingCluster } from '../../model/interfaces';
import { TrainingSet } from '../TrainingSet';
import { cn } from '@/shared/shadcn/utils';

type Props = {
  data: TTrainingCluster;
  num: number;
};

export const TrainingCluster = ({ data: cluster, num }: Props) => {
  const { isMonocluster, sets } = cluster;
  return (
    <div className="cluster">
      <span className="cluster__num">{num}</span>
      <ul
        className={cn('cluster__sets', { 'cluster__sets--vertical': !isMonocluster })}
        style={{ '--num': `${sets.length}` } as CSSProperties}
      >
        {sets.map((set) => (
          <TrainingSet data={set} isMonocluster={isMonocluster} key={set.id} />
        ))}
      </ul>
    </div>
  );
};
