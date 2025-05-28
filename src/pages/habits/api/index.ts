import { IHabit } from '../model/types';

const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const loadHabits = async (signal?: AbortSignal): Promise<IHabit[]> => {
  const response = await fetch(`${BASE_URL}/habits`, { signal });

  if (!response.ok) {
    throw new Error('Error in Habits loading');
  }

  const result = await response.json();

  return result;
};

export const postNewHabit = async (habit: Omit<IHabit, 'id'>): Promise<IHabit> => {
  const response = await fetch(`${BASE_URL}/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(habit),
  });

  if (!response.ok) {
    throw new Error('Error in Habit creation');
  }

  const result = await response.json();

  return result;
};

export const deleteHabit = async (habitId: string) => {
  const response = await fetch(`${BASE_URL}/habits/${habitId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error in Habit deletion');
  }

  return response.json();
};
