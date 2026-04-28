import { apiFetch } from "./apiFetch";
import { parseError } from "./parseError";
import type { Course } from "@/src/types/course";

export async function listCourses(): Promise<Course[]> {
  const res = await apiFetch("/api/courses");
  if (!res.ok) throw new Error(await parseError(res));
  return res.json();
}
