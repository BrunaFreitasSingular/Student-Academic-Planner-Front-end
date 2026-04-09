import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "@/src/services/subjectService";
import { SubjectFromAPI } from "@/src/types/subject";

export default function useListSubjects() {
  return useQuery<SubjectFromAPI[]>({
    queryKey: ["subjects"],
    queryFn: getSubjects,
    // Opcional: Garante que 'data' comece como um array vazio em vez de undefined
    initialData: [], 
  });
}