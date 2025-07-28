import React, { FC } from 'react';
import { Button, Spacer } from '../../shared/ui/';
import { Portal } from '../../shared/lib/Portal';
import { usePosts } from './usePosts';
import { Card, CardContent } from '@/shared/ui/Card';
import { PostsList } from './ui/PostsList';

export const Posts: FC = () => {
  const { data, status, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = usePosts();

  const handleLoad = () => {
    hasNextPage && fetchNextPage();
  };

  return (
    <div>
      <h2>Posts from typicode</h2>
      <Spacer />
      {status === 'pending' ? (
        <div>Loading...</div>
      ) : (
        <section>
          {data &&
            data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.posts.map((post) => (
                  <Card className="mb-4" key={post.id}>
                    <CardContent>
                      <h3>
                        <b>{post.id}. </b>
                        {post.title}
                      </h3>
                      <p>{post.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </React.Fragment>
            ))}
        </section>
      )}

      <Spacer />

      <h2>Local Posts</h2>
      <Spacer />
      <PostsList />

      <Portal portalId="header-portal">
        <Button disabled={isFetchingNextPage} onClick={handleLoad}>
          {isFetching ? <span title="Fetching...">🔄</span> : <span title="Fetched">💤</span>}
          {isFetchingNextPage ? 'Loading more...' : 'Load More Posts'}
        </Button>
      </Portal>
    </div>
  );
};
