import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/src/context/AuthContext";
import { getSubjects } from "@/src/services/subjectService";
import { SubjectFromAPI } from "@/src/types/subject";
import { createApi } from "@/lib/api";

export function useStudentSubjects() {
  const { token, user } = useAuth();
  const api = createApi(token);
  const id_student = user?.student?.id;

  return useQuery<SubjectFromAPI[]>({
    queryKey: ["subjects", id_student],
    queryFn: () => getSubjects(id_student!, api),
    enabled: !!id_student,
  });
}
