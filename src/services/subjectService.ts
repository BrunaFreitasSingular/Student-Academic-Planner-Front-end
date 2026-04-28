import { apiFetch } from "./apiFetch";
import { parseError } from "./parseError";
import {
  CreateSubjectDTO,
  Subject,
  SubjectFromAPI,
  UpdateSubjectDTO,
} from "@/src/types/subject";

export async function getSubjects(
  id_student: number,
): Promise<SubjectFromAPI[]> {
  const res = await apiFetch(`/api/subjects?id_student=${id_student}`);
  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}

export async function createSubject(data: CreateSubjectDTO): Promise<Subject> {
  const res = await apiFetch("/api/subjects", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}

export async function updateSubject(data: UpdateSubjectDTO): Promise<Subject> {
  if (!data.id) throw new Error("ID é obrigatório no updateSubject");

  const res = await apiFetch(`/api/subjects/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}

export async function deleteSubject(id: number): Promise<void> {
  const res = await apiFetch(`/api/subjects/${id}`, { method: "DELETE" });
  if (!res.ok && res.status !== 204) {
    throw new Error(await parseError(res));
  }
}
