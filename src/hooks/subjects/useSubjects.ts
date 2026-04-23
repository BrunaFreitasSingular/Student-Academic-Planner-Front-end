"use client";

import { useEffect, useState } from "react";
import { getSubjects } from "../../services/subjectService";
import { SubjectFromAPI } from "../../types/subject";
import { useAuth } from "../../context/AuthContext";

export default function useSubjects() {
  const { user } = useAuth();
  sessionStorage;
  const [subjects, setSubjects] = useState<SubjectFromAPI[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.student?.id) return;

    async function loadSubjects() {
      try {
        setIsLoading(true);
        const data = await getSubjects(user!.student!.id);
        setSubjects(data);
      } catch (error) {
        console.error("Erro ao buscar disciplinas:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSubjects();
  }, [user]);

  return { subjects: subjects || [] };
}
