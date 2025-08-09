import { BlockNotionMain } from '@/widgets/BlockNotionMain';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

export const Greeting: FC = observer(() => {
  return (
    <section>
      <h2 className="mb-4 font-bold text-lg">Welcome to the task manager and notes keeper</h2>

      <BlockNotionMain />
    </section>
  );
});
