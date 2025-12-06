import { useQuery } from '@tanstack/react-query';
import { getBlocksByDocument } from '../api';
import { DocumentWithBlocksResponseDto } from '@/shared/api/generated/data-contracts';

export const useBlockNodesByDocument = (id: string, queryKey: string[]) => {
  const { data, status } = useQuery<DocumentWithBlocksResponseDto>({
    queryKey,
    queryFn: () => {
      if (!id) {
        throw new Error('Document id is required');
      }

      return getBlocksByDocument(id);
    },
  });

  return {
    data,
    status,
  };
};
