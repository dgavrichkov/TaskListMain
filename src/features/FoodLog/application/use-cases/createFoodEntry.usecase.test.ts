import { describe, it, expect, vi } from 'vitest';
import { createFoodEntry } from './createFoodEntry.usecase';
import type { FoodLogRepository } from '../ports/FoodLogRepository';

describe('createFoodEntry use-case', () => {
  it('validates input and calls repo.create', async () => {
    const repo: FoodLogRepository = {
      create: vi.fn(async (input) => ({
        id: '1',
        text: input.text,
        eatenAt: input.eatenAt,
        createdAt: 111,
      })),
      getAll: vi.fn(),
    };

    const input = { text: 'rice', eatenAt: 123 };
    const result = await createFoodEntry(input, { repo });

    expect(repo.create).toHaveBeenCalledWith(input);
    expect(result.text).toBe('rice');
  });

  it('throws on invalid input', async () => {
    const repo: FoodLogRepository = {
      create: vi.fn(),
      getAll: vi.fn(),
    };

    await expect(createFoodEntry({ text: '   ', eatenAt: 123 }, { repo })).rejects.toThrow();
  });
});
