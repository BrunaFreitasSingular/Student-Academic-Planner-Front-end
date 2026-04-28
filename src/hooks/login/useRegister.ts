"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginRequest, registerRequest } from "@/src/services/authService";
import { useAuth } from "@/src/context/AuthContext";

export function useRegister() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(email: string, password: string) {
    setLoading(true);
    setError(null);

    try {
      await registerRequest(email, password);
      const auth = await loginRequest(email, password);
      login(auth);
      router.push("/complete-profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao cadastrar");
    } finally {
      setLoading(false);
    }
  }

  return { submit, error, loading };
}
