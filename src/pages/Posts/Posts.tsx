import { useState } from 'react';
import { Portal } from '../../entities/Portal';
import { fetchPosts, IPost } from '../../shared/api/typicode';
import { Spacer } from '../../shared/ui';

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleLoad = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Posts from typicode</h2>
      <Spacer />
      <section>
        {posts.length > 0 ? posts.map((post) => (
          <article key={post.id} style={{ padding: 20, border: '1px solid black' }}>
            <h3><b>{post.id}. </b>{post.title}</h3>
            <Spacer />
            <p>{post.body}</p>
          </article>
        )) : null}
      </section>
      <Portal portalId="header-portal">
        <button onClick={handleLoad}>Load Posts</button>
      </Portal>
    </div>
  )
};
