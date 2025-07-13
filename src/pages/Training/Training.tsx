import { useQuery } from '@tanstack/react-query';
import { getSessions, TRAINING_QUERY_KEY } from './api';
import { Loader } from 'lucide-react';
import { TrainingSession } from './ui/TrainingSession';
import { TrainingSet } from './ui/TrainingSet';

import './styles.scss';

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
              <h2 className="title">{session.name}</h2>
              <ul className="session__clusters">
                {session.clusters.map((cluster, idx) => (
                  <li className="cluster" key={cluster.id}>
                    <div>#{idx}</div>
                    <ul className="cluster__sets">
                      {cluster.sets.map((set) => (
                        <TrainingSet data={set} key={set.id} />
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </ul>
    </div>
  );
};
