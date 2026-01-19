import { describe, it, expect } from 'vitest';
import { validateFoodEntry } from './foodEntry.rules';

describe('validateFoodEntry', () => {
  it('throws if text is empty', () => {
    expect(() => validateFoodEntry({ text: '   ', eatenAt: Date.now() })).toThrow();
  });

  it('throws if eatenAt is not a finite number', () => {
    expect(() => validateFoodEntry({ text: 'eggs', eatenAt: Number.NaN })).toThrow();
  });

  it('does not throw for valid input', () => {
    expect(() => validateFoodEntry({ text: 'eggs', eatenAt: Date.now() })).not.toThrow();
  });
});
