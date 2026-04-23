"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";

export function useLogin() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(email: string, password: string) {
    console.log("1. submit chamado");
    console.log("email:", email);
    console.log("password:", password);
    console.log("URL:", process.env.NEXT_PUBLIC_API_URL);
    setLoading(true);
    setError(null);

    try {
      console.log("2. antes do fetch");
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log("3. depois do fetch, status:", res.status);
      const data = await res.json();
      console.log("4. data:", data);
      if (!res.ok) {
        setError(data.message ?? "Erro ao fazer login");
        return;
      }

      login(data);
      router.push("/dashboard");
    } catch (err) {
      console.log("5. erro no catch:", err);
      setError("Erro de conexão");
    } finally {
      setLoading(false);
    }
  }

  return { submit, error, loading };
}
