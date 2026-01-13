// Rules - это бизнес-правила

export function validateFoodEntry(input: { text: string; eatenAt: number }) {
  if (!input.text.trim()) {
    throw new Error('Food description must not be empty');
  }

  if (!Number.isFinite(input.eatenAt)) {
    throw new Error('Invalid eatenAt timestamp');
  }
}
