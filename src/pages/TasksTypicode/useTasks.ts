import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchTasks, ITasksResponse } from '../../shared/api/typicode';

export function useTasks() {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    getNextPageParam: (lastPage: ITasksResponse) => {
      if (!lastPage.hasNextPage) return undefined;
      return lastPage.nextPage;
    },
  });
}
