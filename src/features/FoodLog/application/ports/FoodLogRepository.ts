import { FoodEntry } from '../../domain/foodEntry.entity';

// Repository - это некий контракт, абстракция. Оно определяет интерфейс, которому могут сооветствовать различные имплементации

export interface FoodLogRepository {
  create(input: { text: string; eatenAt: number }): Promise<FoodEntry>;

  getAll(): Promise<FoodEntry[]>;
}
