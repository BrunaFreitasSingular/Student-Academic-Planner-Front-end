import type { AuthDTO } from "@/src/context/AuthContext";
import { parseError } from "./parseError";

export type RegisterResponse = { id: string; email: string };

export async function loginRequest(
  email: string,
  password: string,
): Promise<AuthDTO> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}

export async function registerRequest(
  email: string,
  password: string,
): Promise<RegisterResponse> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}
