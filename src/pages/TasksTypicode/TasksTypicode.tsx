import React, { FC } from 'react';
import { Button } from '../../shared/ui';
import { Portal } from '../../shared/lib/Portal';
import { Spacer } from '../../shared/ui';
import { useTasks } from './useTasks';

export const TasksTypicode: FC = () => {
  const { data, status, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useTasks();

  const handleLoad = () => {
    hasNextPage && fetchNextPage();
  };

  return (
    <div>
      <h2>Tasks from typicode</h2>
      <Spacer />
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data &&
            data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.tasks.map((task) => (
                  <li key={task.id} style={{ padding: 20, border: '1px solid black' }}>
                    <div>
                      <b>{task.id}. </b>
                      <span>{task.completed ? '✔️' : '❌'}</span>
                      {task.title}
                    </div>
                    <Spacer />
                  </li>
                ))}
              </React.Fragment>
            ))}
        </ul>
      )}
      <Portal portalElement=".header__portal">
        <Button disabled={isFetchingNextPage} onClick={handleLoad}>
          {isFetching ? <span title="Fetching...">🔄</span> : <span title="Fetched">💤</span>}
          {isFetchingNextPage ? 'Loading more...' : 'Load More Tasks'}
        </Button>
      </Portal>
    </div>
  );
};
