import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBlockNodes, postBlockNode } from '../api';

export const useBlockNodeListQuery = (queryKey: string[]) => {
  const qc = useQueryClient();

  // получение
  const { data, status } = useQuery({
    queryKey,
    queryFn: fetchBlockNodes,
  });

  // создание
  const { mutateAsync: addNode, isPending: isAdding } = useMutation({
    mutationFn: postBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  return {
    data,
    status,
    addNode,
    isAdding,
  };
};
