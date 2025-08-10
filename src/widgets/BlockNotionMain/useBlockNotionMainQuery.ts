import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBlockNodes, postBlockNode, deleteBlockNode, editBlockNode } from './api';

export const useBlockNotionMainQuery = (queryKey: string[]) => {
  const qc = useQueryClient();
  const { data, status } = useQuery({
    queryKey,
    queryFn: fetchBlockNodes,
  });

  const { mutateAsync: addNode, isPending: isAdding } = useMutation({
    mutationFn: postBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  const { mutateAsync: deleteNode, isPending: isDeleting } = useMutation({
    mutationFn: deleteBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  const { mutateAsync: editNode, isPending: isEditing } = useMutation({
    mutationFn: editBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  return {
    data,
    status,
    addNode,
    isAdding,
    deleteNode,
    isDeleting,
    editNode,
    isEditing,
  };
};
