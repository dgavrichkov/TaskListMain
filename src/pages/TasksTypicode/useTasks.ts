import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchTasks, ITasksResponse } from '../../shared/api/typicode';

export function useTasks() {
  return useInfiniteQuery(['tasks'], fetchTasks, {
    getNextPageParam: (lastPage: ITasksResponse) => {
      if (!lastPage.hasNextPage) return undefined;
      return lastPage.nextPage;
    },
  });
}
