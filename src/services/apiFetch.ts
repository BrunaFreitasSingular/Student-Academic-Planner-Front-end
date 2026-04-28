"use client";

export async function apiFetch(
  input: string,
  init: RequestInit = {},
): Promise<Response> {
  let token: string | null = null;

  if (typeof window !== "undefined") {
    const raw = window.sessionStorage.getItem("auth");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        token = parsed?.token ?? null;
      } catch {
        window.sessionStorage.removeItem("auth");
      }
    }
  }

  const headers = new Headers(init.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(input, { ...init, headers });

  if (res.status === 401 && typeof window !== "undefined") {
    window.sessionStorage.removeItem("auth");
    if (window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }

  return res;
}
