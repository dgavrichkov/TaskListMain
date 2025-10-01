import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBlockNode, editBlockNode } from '../api';

export const useBlockNodeItemQuery = (queryKey: string[], parentKey: string[]) => {
  const qc = useQueryClient();
  // удаление
  const { mutateAsync: deleteNode, isPending: isDeleting } = useMutation({
    mutationFn: deleteBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: parentKey });
    },
  });

  // редактирование
  const { mutateAsync: editNode, isPending: isEditing } = useMutation({
    mutationFn: editBlockNode,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: parentKey });
    },
  });

  return {
    deleteNode,
    isDeleting,
    editNode,
    isEditing,
  };
};
