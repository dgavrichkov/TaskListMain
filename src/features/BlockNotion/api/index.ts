import {
  BlockNodeDto,
  CreateBlockNodeDto,
  DocumentResponseDto,
  DocumentWithBlocksResponseDto,
  UpdateBlockNodeDto,
} from '@/shared/api/generated/data-contracts';

const BASE_URL = import.meta.env.VITE_APP_BACKEND_URL;
const ENDPOINT = `${BASE_URL}/block-node`;

/** создание блок-ноды */
export const postBlockNode = async (data: CreateBlockNodeDto): Promise<BlockNodeDto> => {
  const response = await fetch(`${ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};

export const deleteBlockNode = async (id: string): Promise<BlockNodeDto> => {
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
  data: Partial<UpdateBlockNodeDto>;
}): Promise<BlockNodeDto> => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};

export const loadAllDocuments = async (): Promise<DocumentResponseDto[]> => {
  const response = await fetch(`${BASE_URL}/document/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};

export const getBlocksByDocument = async (id: string): Promise<DocumentWithBlocksResponseDto> => {
  const response = await fetch(`${BASE_URL}/document/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) throw new Error(await response.text());

  return await response.json();
};
