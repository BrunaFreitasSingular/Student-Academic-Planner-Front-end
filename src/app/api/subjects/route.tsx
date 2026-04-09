export async function GET(request: Request) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subjects`);

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
 
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subjects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(errorText, { status: response.status });
    }

    const data = await response.json()

    return Response.json(data)
  } catch (error: unknown) {
  const message = error instanceof Error ? error.message : "Erro desconhecido";
  return new Response(
    JSON.stringify({ message }),
    { status: 500 }
  );
  }
}
