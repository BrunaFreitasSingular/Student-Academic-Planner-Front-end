import { CreateSubjectDTO, UpdateSubjectDTO } from "@/src/types/subject";
import { createApi } from "@/lib/api";

type Api = ReturnType<typeof createApi>;

export async function getSubjects(id_student: number, api: Api) {
  const res = await api.get(`/api/subjects?id_student=${id_student}`);
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

export async function createSubject(data: CreateSubjectDTO, api: Api) {
  const res = await api.post("/api/subjects", data);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("ERRO BACK:", errorText);
    throw new Error(errorText);
  }

  return res.json();
}

export async function updateSubject(data: UpdateSubjectDTO, api: Api) {
  if (!data.id) throw new Error("ID é obrigatório no updateSubject");

  const res = await api.put(`/api/subjects/${data.id}`, data);
  return res.json();
}

export async function deleteSubject(id: number, api: Api): Promise<void> {
  await api.delete(`/api/subjects/${id}`);
}
