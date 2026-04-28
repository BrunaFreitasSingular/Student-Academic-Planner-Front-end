import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "@/src/services/subjectService";
import { SubjectFromAPI } from "@/src/types/subject";
import { useStudent } from "@/src/hooks/student/useStudent";

export default function useListSubjects() {
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
