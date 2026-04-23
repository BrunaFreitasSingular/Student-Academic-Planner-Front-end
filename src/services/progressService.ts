import { Progress } from "../types/progress";

export async function getProgress(user_id: string): Promise<Progress> {
  const res = await fetch(`/api/progress/${user_id}`);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("ERRO REAL DO BACK:", errorText);
    throw new Error(errorText || "Erro ao buscar progresso");
  }
  return res.json();
}
