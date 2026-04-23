export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id_student = searchParams.get("id_student");

    console.log(" id_student recebido:", id_student);
    if (!id_student) {
      return new Response(
        JSON.stringify({ message: "id_student é obrigatório" }),
        {
          status: 400,
        },
      );
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/subjects?id_student=${id_student}`,
    );

    const text = await response.text();

    if (!response.ok) {
      console.error("ERRO GET:", text);
      throw new Error(text);
    }

    try {
      return Response.json(JSON.parse(text));
    } catch {
      return new Response(text);
    }
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";
    return new Response(JSON.stringify({ message }), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/subjects`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const text = await response.text();

    if (!response.ok) {
      console.error("ERRO POST:", text);
      throw new Error(text);
    }

    try {
      return Response.json(JSON.parse(text));
    } catch {
      return new Response(text);
    }
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";

    return new Response(JSON.stringify({ message }), {
      status: 500,
    });
  }
}
