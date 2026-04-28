"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/src/context/AuthContext";
import { createStudent } from "@/src/services/studentService";

export function useCreateStudent() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(name: string, course_id: number, semester: number) {
    if (!user) {
      setError("Usuário não autenticado");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const student = await createStudent({
        user_id: user.id,
        name,
        course_id,
        semester,
      });
      queryClient.setQueryData(["student", user.id], student);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar perfil");
    } finally {
      setLoading(false);
    }
  }

  return { submit, error, loading };
}
