"use client";

import { useStudentSubjects } from "../hooks/subjects/useStudentSubjects";
import { ListSubject } from "./ListSubject";
import { SubjectCardCompact } from "./SubjectCardCompact";
import Link from "next/link";

export function AsideContent() {
  const { data: subjects = [] } = useStudentSubjects();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-900">Histórico</span>
        <Link href="/subjects">
          <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition flex items-center justify-center">
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="6.5" cy="6.5" r="5" />
              <path d="M10.5 10.5L14 14" />
            </svg>
          </button>
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-gray-100 overflow-auto max-h-80">
        <ListSubject
          subjects={subjects}
          status="concluida"
          SubjectCard={SubjectCardCompact}
        />
      </div>
    </div>
  );
}
