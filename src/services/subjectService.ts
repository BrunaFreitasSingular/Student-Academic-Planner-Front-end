import { CreateSubjectDTO, UpdateSubjectDTO } from "@/src/types/subject";

export async function getSubjects(id_student: number) {
  const res = await fetch(`/api/subjects?id_student=${id_student}`);

  const text = await res.text();

  if (!res.ok) {
    console.error("ERRO BACK:", text);
    throw new Error(text);
  }

  try {
    return JSON.parse(text);
  } catch {
    return [];
  }
}

export async function createSubject(data: CreateSubjectDTO) {
  const res = await fetch("/api/subjects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("ERRO BACK:", errorText);
    throw new Error(errorText);
  }

  return res.json();
}

export async function updateSubject(data: UpdateSubjectDTO) {
  if (!data.id) {
    throw new Error("ID é obrigatório no updateSubject");
  }

  const res = await fetch(`/api/subjects/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteSubject(id: number): Promise<void> {
  await fetch(`/api/subjects/${id}`, {
    method: "DELETE",
  });
}
