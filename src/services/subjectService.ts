import { CreateSubjectDTO, UpdateSubjectDTO, SubjectFromAPI } from "@/src/types/subject"

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSubjects(): Promise<SubjectFromAPI[]> {
  const res = await fetch("/api/subjects")

  if (!res.ok) {
    throw new Error("Erro ao buscar disciplinas")
  }
  return res.json()
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
    const errorText = await res.text()
    console.error("ERRO REAL DO BACK:", errorText)
    throw new Error(errorText)
  }

  return res.json();
}

export async function updateSubject(data: UpdateSubjectDTO) {
  const res = await fetch(`${API_URL}/subjects/${data.id}`, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return res.json()
}

export async function deleteSubject(id: number): Promise<void> {
  await fetch(`${API_URL}/subjects/${id}`, {
    method: "DELETE",
  })
}

