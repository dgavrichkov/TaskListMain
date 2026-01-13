import { validateFoodEntry } from '../../domain/foodEntry.rules';
import { FoodLogRepository } from '../ports/FoodLogRepository';

// юзкейс - чистая функция некоего сценария
// она ничего не знает про реакт, про способ загрузки;

export async function createFoodEntry(
  input: {
    text: string;
    eatenAt: number;
  },
  deps: { repo: FoodLogRepository },
) {
  validateFoodEntry(input);
  return deps.repo.create(input);
}
