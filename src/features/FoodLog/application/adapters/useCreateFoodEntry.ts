import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFoodEntry } from '../use-cases/createFoodEntry.usecase';
import { foodLogApiRepository } from '../../infra/foodLog.repository.api';
import { foodLogKeys } from '../../infra/foodLog.queryKeys';

// Adapter к React — TanStack Query hooks
// Адаптеры используются прямо в UI компонентах
// для реализации используются имплементации репозитория и юзкейсы

export function useCreateFoodEntry() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (input: { text: string; eatenAt: number }) =>
      createFoodEntry(input, {
        repo: foodLogApiRepository,
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: foodLogKeys.all });
    },
  });
}
