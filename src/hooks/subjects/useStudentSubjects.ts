import { useQuery } from "@tanstack/react-query";
import { useStudent } from "@/src/hooks/student/useStudent";
import { getSubjects } from "@/src/services/subjectService";
import { SubjectFromAPI } from "@/src/types/subject";

export function useStudentSubjects() {
  const { data: student } = useStudent();
  const studentId = student?.id;

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
