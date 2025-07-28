import { TPost } from '../model/interfaces';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/Card';
import { BASE_URL } from '@/shared/api/client';
import { useFetch } from '@/shared/hooks/useFetch';

/** Interview Topic - fetch data on React components */
export const PostsList = () => {
  const { fetchState } = useFetch<TPost[]>({ url: `${BASE_URL}/posts` });

  switch (fetchState.status) {
    case 'error':
      return <div>Ошибка: {fetchState.error}</div>;
    case 'idle':
      return <div>Ожидание начала загрузки...</div>;
    case 'loading':
      return <div>Загрузка...</div>;
    case 'success':
      return (
        <div className="grid gap-4">
          {fetchState.data.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <h3>{post.title}</h3>
              </CardHeader>
              <CardContent>{post.body}</CardContent>
              <CardFooter>
                <i>{post.author}</i>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
  }
};
