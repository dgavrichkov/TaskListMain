export type Category = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCategory = Omit<Category, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateCategory = Partial<Omit<Category, 'id' | 'createdAt' | 'updatedAt'>>;
