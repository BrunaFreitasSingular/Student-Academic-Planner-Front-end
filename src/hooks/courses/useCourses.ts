"use client";

import { useQuery } from "@tanstack/react-query";
import { listCourses } from "@/src/services/courseService";
import type { Course } from "@/src/types/course";

export function useCourses() {
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: listCourses,
    staleTime: 1000 * 60 * 5,
  });
}
