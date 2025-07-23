import { useQuery } from '@tanstack/react-query';
import { getSessions, TRAINING_QUERY_KEY } from './api';
import { CheckIcon, CircleDashedIcon, Loader } from 'lucide-react';

import './styles.scss';
import { TrainingCluster } from './ui/TrainingCluster/TrainingCluster';
import { Button } from '@/shared/ui/Button';

export const Training = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [TRAINING_QUERY_KEY],
    queryFn: getSessions,
  });

  if (isPending || isFetching) {
    return <Loader />;
  }

  // TODO - вынести в фолбэк для эррор баундари
  if (error) {
    return <div>Some error</div>;
  }

  return (
    <div className="training">
      <ul>
        {data.length &&
          data.map((session) => (
            <div className="session" key={session.id}>
              <header className="session__header">
                <h2 className="session__title">{session.name}</h2>
                <Button>{session.isCompleted ? <CheckIcon /> : <CircleDashedIcon />}</Button>
              </header>

              <div className="session__clusters">
                {session.clusters.map((cluster, idx) => (
                  <TrainingCluster data={cluster} key={cluster.id} />
                ))}
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};
