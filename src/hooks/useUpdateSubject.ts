import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSubject } from "@/src/services/subjectService"
import { UpdateSubjectDTO, Subject } from "@/src/types/subject"

export function useUpdateSubject() {
  const queryClient = useQueryClient()

  return useMutation<Subject, Error, UpdateSubjectDTO>({
    mutationFn: (data) => updateSubject(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subjects"] })
    },

    onError: (error) => {
      console.error("Erro ao atualizar disciplina:", error)
    },
  })
}
