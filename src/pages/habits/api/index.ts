import { IEntry, IHabit } from '../model/types';

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

export const loadHabitEntries = async (habitId: string) => {
  const response = await fetch(`${BASE_URL}/habit-entries?habitId=${habitId}`);

  if (!response.ok) {
    throw new Error('Error in Habit Entries loading');
  }

  const result = await response.json();

  return result;
};

export const postHabitEntry = async (newEntry: Omit<IEntry, 'id'>) => {
  const response = await fetch(`${BASE_URL}/habit-entries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEntry),
  });
  if (!response.ok) {
    throw new Error('Error in Habit Entry creation');
  }
  const result = await response.json();

  return result;
};

export const patchHabitEntryCompletion = async (entryId: string, completed: boolean) => {
  const response = await fetch(`${BASE_URL}/habit-entries/${entryId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) {
    throw new Error('Error in Habit Entry completion update');
  }
  const result = await response.json();

  return result;
};
