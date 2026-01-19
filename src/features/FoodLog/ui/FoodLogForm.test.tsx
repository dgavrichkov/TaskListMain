import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FoodLogForm } from './FoodLogForm';

const mutateSpy = vi.fn();

// мок адаптера
vi.mock('../application/adapters/useCreateFoodEntry', () => ({
  useCreateFoodEntry: () => ({
    mutate: mutateSpy,
    isPending: false,
  }),
}));

describe('FoodLogForm', () => {
  it('submits text and eatenAt timestamp', async () => {
    const user = userEvent.setup();
    render(<FoodLogForm />);

    await user.type(screen.getByPlaceholderText('Что ты ел?'), 'eggs');
    // datetime-local можно оставить дефолтным, но лучше задать фиксированно:
    await user.clear(screen.getByTitle('eatenAt'));
    await user.type(screen.getByTitle('eatenAt'), '2026-01-18T12:30');

    await user.click(screen.getByText('Сохранить'));

    expect(mutateSpy).toHaveBeenCalledTimes(1);

    const arg = mutateSpy.mock.calls[0][0];

    expect(arg.text).toBe('eggs');
    expect(typeof arg.eatenAt).toBe('number');
    expect(arg.eatenAt).toBe(new Date('2026-01-18T12:30').getTime());
  });
});
