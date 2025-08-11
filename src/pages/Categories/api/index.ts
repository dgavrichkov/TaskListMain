import { Category, CreateCategory, UpdateCategory } from '../types';

const BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;
const ENDPOINT = `${BASE_URL}/category`;

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${ENDPOINT}`);

  return await response.json();
};

export const addCategoryRequest = async (data: CreateCategory): Promise<Category> => {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};

export const deleteCategoryRequest = async (id: string): Promise<Category> => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};

export const editCategoryRequest = async ({
  id,
  data,
}: {
  id: string;
  data: UpdateCategory;
}): Promise<Category> => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};
