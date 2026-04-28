type ApiError = { statusCode?: number; error?: string; message?: string };

export async function parseError(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as ApiError;
    return data.message ?? data.error ?? `Erro ${res.status}`;
  } catch {
    return `Erro ${res.status}`;
  }
}
