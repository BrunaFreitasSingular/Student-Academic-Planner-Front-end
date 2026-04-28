"use client";

import { useQuery } from "@tanstack/react-query";
import { getStudentByUserId } from "@/src/services/studentService";
import { useAuth } from "@/src/context/AuthContext";
import type { Student } from "@/src/types/student";

export function useStudent() {
  const { user } = useAuth();

  return useQuery<Student | null>({
    queryKey: ["student", user?.id],
    queryFn: () => {
      if (!user?.id) return Promise.resolve(null);
      return getStudentByUserId(user.id);
    },
    enabled: !!user?.id,
    staleTime: 1000 * 60 * 5,
  });
}
