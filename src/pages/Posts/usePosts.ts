import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts, IPostsResponse } from '../../shared/api/typicode';

export function usePosts() {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage: IPostsResponse) => {
      if (!lastPage.hasNextPage) return undefined;
      return lastPage.nextPage;
    },
  });
}
