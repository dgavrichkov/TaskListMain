import { TBlockNode, TCreateBlockNode } from '@/features/BlockNotion/model/types';

const BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;
const ENDPOINT = `${BASE_URL}/block-node`;

export const fetchBlockNodes = async (): Promise<TBlockNode[]> => {
  const response = await fetch(`${ENDPOINT}`);

  return await response.json();
};

export const postBlockNode = async (data: TCreateBlockNode): Promise<TBlockNode> => {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};

export const deleteBlockNode = async (id: string): Promise<TBlockNode> => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};

export const editBlockNode = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<TBlockNode>;
}): Promise<TBlockNode> => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};
