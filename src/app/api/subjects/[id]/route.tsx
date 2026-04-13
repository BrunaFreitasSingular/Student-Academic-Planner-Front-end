export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subjects/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

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
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subjects/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    if (!response.ok) {
      console.error("ERRO PATCH:", text);
      throw new Error(text);
    }

    return Response.json(JSON.parse(text));
  } catch (error) {
    console.error("ERRO COMPLETO PATCH:", error);

    return new Response("Erro ao atualizar parcialmente", {
      status: 500,
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subjects/${params.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("ERRO DELETE:", text);
      throw new Error(text);
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("ERRO COMPLETO DELETE:", error);

    return new Response("Erro ao deletar disciplina", {
      status: 500,
    });
  }
}

export async function GET(
  request: Request,
 { params }: { params: { id: string }}) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subjects/${params.id}`);

    if (!response.ok) {
      throw new Error("Erro na API externa")
    }

    const data = await response.json()

    return Response.json(data)
    
  } catch (error) {
    return new Response("Erro ao buscar disciplinas", {
      status: 500,
    });
  }
}
