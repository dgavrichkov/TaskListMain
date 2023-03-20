import React from 'react';
import { Button } from '../../components/Button';
import { Portal } from '../../entities/Portal';
import { Spacer } from '../../shared/ui';
import { useTasks } from './useTasks';

export const Tasks = () => {
  const { data, status, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useTasks();

  const handleLoad = () => {
    hasNextPage && fetchNextPage();
  }

  return (
    <div>
      <h2>Tasks from typicode</h2>
      <Spacer />
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data && data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.tasks.map(task => (
                <li key={task.id} style={{ padding: 20, border: '1px solid black' }}>
                  <div><b>{task.id}. </b><span>{task.completed ? '✔️' : '❌'}</span>{task.title}</div>
                  <Spacer />
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      )}
      <Portal portalElement=".header__portal">
        <Button onClick={handleLoad} disabled={isFetchingNextPage}>
          {isFetching ? <span title='Fetching...'>🔄</span> : <span title='Fetched'>💤</span>}
          {isFetchingNextPage ? 'Loading more...' : 'Load More Tasks'}
        </Button>
      </Portal>
    </div>
  )
};
