import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createSubject } from "@/src/services/subjectService"
import { Subject } from "@/src/types/subject"

export function useCreateSubject() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Omit<Subject, "id">) => createSubject(data),

    onSuccess: () => {

      queryClient.invalidateQueries({ queryKey: ["subjects"] })
    },

    onError: (error) => {
      console.error("Erro ao criar disciplina:", error)
    }
  })
}