import { BASE_URL } from '@/shared/api/client';
import { TTrainingSession } from '../model/interfaces';

export const TRAINING_QUERY_KEY = 'trainingSessions';

// query functions for useQuery
export const getSessions = async (): Promise<TTrainingSession[]> => {
  const response = await fetch(`${BASE_URL}/training-sessions`);

  return await response.json();
};

// mutations

// это вопрос - как ставить флаги о выполнении на отдельные сеты?
