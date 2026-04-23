import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubject } from "@/src/services/subjectService";

export function useDeleteSubject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteSubject(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] });
    },

    onError: (error) => {
      console.error("Erro ao excluir disciplina:", error);
    },
  });
}
