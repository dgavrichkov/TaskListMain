import { usersStore } from '@/shared/lib/mobx-rq-integrator/usersStore';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

export const Greeting: FC = observer(() => {
  return (
    <section>
      <h2>Welcome to the task manager and notes keeper</h2>
      <div>
        {usersStore.filteredUsers.map((u: any) => (
          <div className="mb-2" key={u.id}>
            <span className="font-bold">{u.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
});
