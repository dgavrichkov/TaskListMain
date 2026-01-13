import { BASE_URL } from '@/shared/api/client';

const API_URL = BASE_URL;

export async function createFoodEntryApi(input: { text: string; eatenAt: number }) {
  const res = await fetch(`${API_URL}/foodEntries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...input,
      createdAt: Date.now(),
    }),
  });

  return res.json();
}

export async function getFoodEntriesApi() {
  const res = await fetch(`${API_URL}/foodEntries?_sort=eatenAt&_order=desc`);
  return res.json();
}
