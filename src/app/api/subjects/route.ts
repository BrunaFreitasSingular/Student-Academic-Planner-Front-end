export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id_student = searchParams.get("id_student");
    const authHeader = request.headers.get("Authorization"); // ← pega o token

    if (!id_student) {
      return new Response(
        JSON.stringify({ message: "id_student é obrigatório" }),
        { status: 400 }
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/subjects?id_student=${id_student}`,
      {
        headers: {
          ...(authHeader ? { Authorization: authHeader } : {}), // ← repassa pro Fastify
        },
      }
    );

    const text = await response.text();
    if (!response.ok) throw new Error(text);

    try {
      return Response.json(JSON.parse(text));
    } catch {
      return new Response(text);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return new Response(JSON.stringify({ message }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get("Authorization"); // ← pega o token

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/subjects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authHeader ? { Authorization: authHeader } : {}), // ← repassa pro Fastify
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();
    if (!response.ok) throw new Error(text);

    try {
      return Response.json(JSON.parse(text));
    } catch {
      return new Response(text);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return new Response(JSON.stringify({ message }), { status: 500 });
  }
}
