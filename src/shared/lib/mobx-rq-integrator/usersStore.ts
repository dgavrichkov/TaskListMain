import { makeAutoObservable } from 'mobx';
import { MobxQuery } from './mobx-rq-integrator';
import { BASE_URL, queryClient } from '@/shared/api/client';

interface IUser {
  id: string;
  name: string;
}

class UsersStore {
  usersQuery = new MobxQuery(
    () => ({
      queryKey: ['users'],
      queryFn: async () => {
        console.log('query FN called');
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok) {
          throw new Error('Error loading users');
        }
        return response.json() as Promise<IUser[]>;
      },
    }),
    queryClient,
  );

  constructor() {
    makeAutoObservable(this);
  }

  get filteredUsers() {
    const res = this.usersQuery.result();

    return res.data ?? [];
  }
}

export const usersStore = new UsersStore();
