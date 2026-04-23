export function createApi(token: string | null) {
  const headers = (extra?: HeadersInit) => ({
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extra,
  });

  return {
    get: (url: string) => fetch(url, { headers: headers() }),

    post: (url: string, body: unknown) =>
      fetch(url, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(body),
      }),

    put: (url: string, body: unknown) =>
      fetch(url, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(body),
      }),

    delete: (url: string) =>
      fetch(url, { method: "DELETE", headers: headers() }),
  };
}
