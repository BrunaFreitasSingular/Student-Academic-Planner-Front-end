import { forwardAuth } from "../_lib/forward";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("user_id");

  if (!userId) {
    return Response.json(
      { statusCode: 400, error: "Bad Request", message: "user_id é obrigatório" },
      { status: 400 },
    );
  }

  const upstream = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/progress?user_id=${encodeURIComponent(userId)}`,
    { headers: forwardAuth(request) },
  );

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}
