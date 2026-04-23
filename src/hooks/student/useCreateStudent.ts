"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";

export function useCreateStudent() {
  const { user, login, token } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(name: string, course_id: number, semester: number) {
    if (!user) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,
          name,
          course_id,
          semester,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message ?? "Erro ao criar perfil");
        return;
      }

      // atualiza o AuthContext com o student criado
      login({
        token: token!,
        user: {
          ...user,
          student: {
            id: data.id,
            name: data.name,
            course_id: data.course_id,
            course_name: "",
            semester: data.semester,
          },
        },
      });

      router.push("/dashboard");
    } catch {
      setError("Erro de conexão");
    } finally {
      setLoading(false);
    }
  }

  return { submit, error, loading };
}
