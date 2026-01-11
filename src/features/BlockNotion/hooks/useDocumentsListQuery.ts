import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { loadAllDocuments } from '../api';

export const useDocumentsListQuery = (queryKey: string[]) => {
  const qc = useQueryClient();

  // получение
  const { data, status } = useSuspenseQuery({
    queryKey,
    queryFn: loadAllDocuments,
  });

  // создание
  // const { mutateAsync: addNode, isPending: isAdding } = useMutation({
  //   mutationFn: postBlockNode,
  //   onSuccess: () => {
  //     qc.invalidateQueries({ queryKey });
  //   },
  // });

  return {
    data,
    status,
  };
};
