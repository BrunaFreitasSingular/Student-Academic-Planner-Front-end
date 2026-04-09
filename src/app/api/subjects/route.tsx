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
      console.error("ERRO DO BACKEND:", errorText)
      throw new Error(errorText); 
    }

    const data = await response.json()

    return Response.json(data)
  } catch (error) {
    console.error("ERRO POST:", error)

    return new Response("Erro ao criar disciplina", {
      status: 500,
    });
  }
}

// //try get com react query +parse no schema
// //? return new response : chach erro
