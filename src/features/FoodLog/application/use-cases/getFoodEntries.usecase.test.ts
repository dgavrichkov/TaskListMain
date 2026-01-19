import { describe, it, expect, vi } from 'vitest';
import { getFoodEntries } from './getFoodEntries.usecase';
import type { FoodLogRepository } from '../ports/FoodLogRepository';

describe('getFoodEntries use-case', () => {
  it('returns entries from repo', async () => {
    const repo: FoodLogRepository = {
      create: vi.fn(),
      getAll: vi.fn(async () => [{ id: '1', text: 'eggs', eatenAt: 1, createdAt: 2 }]),
    };

    const result = await getFoodEntries({ repo });
    expect(result).toHaveLength(1);
    expect(repo.getAll).toHaveBeenCalled();
  });
});
