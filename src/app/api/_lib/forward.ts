export function forwardAuth(req: Request): HeadersInit {
  const auth = req.headers.get("authorization");
  return auth ? { Authorization: auth } : {};
}
