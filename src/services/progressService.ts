import { apiFetch } from "./apiFetch";
import { parseError } from "./parseError";
import { Progress } from "../types/progress";

export async function getProgress(user_id: string): Promise<Progress> {
  const res = await apiFetch(
    `/api/progress?user_id=${encodeURIComponent(user_id)}`,
  );
  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}
