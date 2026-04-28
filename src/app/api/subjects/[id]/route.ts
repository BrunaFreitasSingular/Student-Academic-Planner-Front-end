import { forwardAuth } from "../../_lib/forward";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const upstream = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
    { headers: forwardAuth(request) },
  );

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const body = await request.text();

  const upstream = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...forwardAuth(request) },
      body,
    },
  );

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const body = await request.text();

  const upstream = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...forwardAuth(request) },
      body,
    },
  );

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const upstream = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/subjects/${id}`,
    {
      method: "DELETE",
      headers: forwardAuth(request),
    },
  );

  if (upstream.status === 204 || upstream.status === 200) {
    return new Response(null, { status: 204 });
  }

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}
