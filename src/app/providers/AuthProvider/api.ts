import { TDummyUser } from './models';

const DUMMY_BASE = 'https://dummyjson.com';

export const dummyFetchUser = async (id: number): Promise<TDummyUser> => {
  const res = await fetch(`${DUMMY_BASE}/users/${id}`);
  const user = await res.json();

  return user;
};

type TLoginOutput = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

export const dummyLogin = async (login: string, password: string): Promise<TLoginOutput> => {
  const res = await fetch(`${DUMMY_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: login,
      password,
    }),
  });
  const loggedData = await res.json();
  return loggedData;
};
