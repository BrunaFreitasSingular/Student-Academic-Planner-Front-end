export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    if (!res.ok) {
      return new Response(text, { status: res.status });
    }

    return Response.json(JSON.parse(text));
  } catch (err) {
    return new Response("Erro ao criar student", { status: 500 });
  }
}
