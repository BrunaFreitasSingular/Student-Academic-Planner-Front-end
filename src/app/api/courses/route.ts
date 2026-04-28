import { forwardAuth } from "../_lib/forward";

export async function GET(request: Request) {
  const upstream = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
    headers: forwardAuth(request),
  });

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}
