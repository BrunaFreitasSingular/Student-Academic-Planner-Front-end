import { Progress } from "../types/progress";

export async function getProgress(user_id: string, token: string | null): Promise<Progress> {
  const res = await fetch(`/api/progress/${user_id}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("ERRO REAL DO BACK:", errorText);
    throw new Error(errorText || "Erro ao buscar progresso");
  }
  return res.json();
}