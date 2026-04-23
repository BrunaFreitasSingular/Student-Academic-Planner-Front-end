import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/src/context/AuthContext";
import { getSubjects } from "@/src/services/subjectService";
import { SubjectFromAPI } from "@/src/types/subject";

export function useStudentSubjects() {
  const { user } = useAuth();
  const studentId = user?.student?.id;

  return useQuery<SubjectFromAPI[]>({
    queryKey: ["subjects", studentId],
    queryFn: () => {
      if (!studentId) throw new Error("Usuário não autenticado");
      return getSubjects(studentId);
    },
    enabled: !!studentId,
    initialData: [],
  });
}
