import { FoodLogRepository } from '../application/ports/FoodLogRepository';
import { createFoodEntryApi, getFoodEntriesApi } from './foodLog.api';

// реализация абстракции

export const foodLogApiRepository: FoodLogRepository = {
  create: createFoodEntryApi,
  getAll: getFoodEntriesApi,
};
