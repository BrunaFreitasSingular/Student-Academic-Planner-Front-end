import { useEffect, useState } from "react";
import { getProgress } from "../../services/progressService";
import { Progress } from "../../types/progress";

export function useListProgress(user_id: string) {
  const [data, setData] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!user_id) {
          setLoading(false);
          return;
        }

        setLoading(true);

        const response = await getProgress(user_id);
        setData(response);
      } catch (error: unknown) {
        console.error("ERRO REAL:", error);
        const message =
          error instanceof Error ? error.message : "Erro desconhecido";
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [user_id]);
  return { data, loading, error };
}
