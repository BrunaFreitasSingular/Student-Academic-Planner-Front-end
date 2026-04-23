import { useMutation } from "@tanstack/react-query";
import { createSubject } from "@/src/services/subjectService";
import { Subject } from "@/src/types/subject";
import { useAuth } from "@/src/context/AuthContext";
import { createApi } from "@/lib/api";

export function useCreateSubject() {
  const { token } = useAuth();
  const api = createApi(token);

  return useMutation({
    mutationFn: (data: Omit<Subject, "id">) => createSubject(data, api),
  });
}
