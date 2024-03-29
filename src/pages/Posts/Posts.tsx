import React, { FC } from 'react';
import { Button, Spacer } from '../../shared/ui/';
import { Portal } from '../../shared/lib/Portal';
import { usePosts } from './usePosts';

export const Posts: FC = () => {
  const { data, status, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = usePosts();

  const handleLoad = () => {
    hasNextPage && fetchNextPage();
  };

  return (
    <div>
      <h2>Posts from typicode</h2>
      <Spacer />
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <section>
          {data &&
            data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.posts.map((post) => (
                  <article key={post.id} style={{ padding: 20, border: '1px solid black' }}>
                    <h3>
                      <b>{post.id}. </b>
                      {post.title}
                    </h3>
                    <Spacer />
                    <p>{post.body}</p>
                  </article>
                ))}
              </React.Fragment>
            ))}
        </section>
      )}

      <Portal portalId="header-portal">
        <Button disabled={isFetchingNextPage} onClick={handleLoad}>
          {isFetching ? <span title="Fetching...">🔄</span> : <span title="Fetched">💤</span>}
          {isFetchingNextPage ? 'Loading more...' : 'Load More Posts'}
        </Button>
      </Portal>
    </div>
  );
};
