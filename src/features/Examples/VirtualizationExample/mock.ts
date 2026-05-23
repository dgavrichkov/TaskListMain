export type User = {
  id: string;
  name: string;
  email: string;
};

export const mockLongUsersList: User[] = Array.from({ length: 100_000 }, (_, index) => ({
  id: String(index),
  name: `User ${index}`,
  email: `user${index}@example.com`,
}));
