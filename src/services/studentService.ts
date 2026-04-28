import { apiFetch } from "./apiFetch";
import { parseError } from "./parseError";
import type { Student } from "@/src/types/student";

export async function getStudentByUserId(
  userId: string,
): Promise<Student | null> {
  const res = await apiFetch(
    `/api/students?user_id=${encodeURIComponent(userId)}`,
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}

export type CreateStudentDTO = {
  user_id: string;
  name: string;
  course_id: number;
  semester: number;
};

export async function createStudent(payload: CreateStudentDTO): Promise<Student> {
  const res = await apiFetch("/api/students", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}
