import { useQuery } from '@tanstack/react-query';
import { getFoodEntries } from '../use-cases/getFoodEntries.usecase';
import { foodLogApiRepository } from '../../infra/foodLog.repository.api';
import { foodLogKeys } from '../../infra/foodLog.queryKeys';

export function useFoodEntries() {
  return useQuery({
    queryKey: foodLogKeys.all,
    queryFn: () =>
      getFoodEntries({
        repo: foodLogApiRepository,
      }),
  });
}
