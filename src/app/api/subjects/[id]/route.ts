export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const text = await response.text();

    if (!response.ok) {
      console.error("ERRO PUT:", text);
      throw new Error(text);
    }

    return Response.json(JSON.parse(text));
  } catch (error) {
    console.error("ERRO COMPLETO PUT:", error);

    return new Response("Erro ao atualizar disciplina", {
      status: 500,
    });
  }
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const body = await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  const text = await response.text();

  if (!response.ok) {
    console.error("ERRO PATCH:", text);
    throw new Error(text);
  }

  return Response.json(JSON.parse(text));
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    const text = await response.text();
    console.error("ERRO DELETE:", text);
    throw new Error(text);
  }

  return new Response(null, { status: 204 });
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
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
}
