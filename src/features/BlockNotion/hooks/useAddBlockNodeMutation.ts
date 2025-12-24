import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postBlockNode } from '../api';

export const useAddBlockNodeMutation = (queryKey: string[]) => {
  const qc = useQueryClient();

  // создание
  const { mutateAsync: createBlockNode, isPending: isAdding } = useMutation({
    mutationFn: postBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  return {
    createBlockNode,
    isAdding,
  };
};
