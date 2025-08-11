import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchCategories,
  addCategoryRequest,
  deleteCategoryRequest,
  editCategoryRequest,
} from './api';

export const useCategoriesQuery = (queryKey: string[]) => {
  const qc = useQueryClient();
  const { data, status } = useQuery({
    queryKey,
    queryFn: fetchCategories,
  });

  const { mutateAsync: addCategory, isPending: isAdding } = useMutation({
    mutationFn: addCategoryRequest,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  const { mutateAsync: deleteCategory, isPending: isDeleting } = useMutation({
    mutationFn: deleteCategoryRequest,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  const { mutateAsync: editCategory, isPending: isEditing } = useMutation({
    mutationFn: editCategoryRequest,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey });
    },
  });

  return {
    data,
    status,
    addCategory,
    isAdding,
    deleteCategory,
    isDeleting,
    editCategory,
    isEditing,
  };
};
