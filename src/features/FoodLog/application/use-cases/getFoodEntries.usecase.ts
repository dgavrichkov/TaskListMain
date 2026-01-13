import { FoodLogRepository } from '../ports/FoodLogRepository';

export async function getFoodEntries(deps: { repo: FoodLogRepository }) {
  return deps.repo.getAll();
}
