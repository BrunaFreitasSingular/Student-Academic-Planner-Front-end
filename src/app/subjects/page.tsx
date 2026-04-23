"use client";

import { Fragment } from "react";
import { ProtectedRoute } from "@/src/components/ProtectedRoute";
import { useStudentSubjects } from "@/src/hooks/subjects/useStudentSubjects";
import { SubjectFromAPI } from "@/src/types/subject";

export default function SubjectsPage() {
  const { data: subjects } = useStudentSubjects();

  const grouped = (subjects ?? []).reduce<Record<string, SubjectFromAPI[]>>(
    (acc, subject) => {
      const key = `${subject.year}/${subject.semester}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(subject);
      return acc;
    },
    {},
  );

  const periodos = Object.keys(grouped).sort((a, b) => {
    const [yearA, semA] = a.split("/").map(Number);
    const [yearB, semB] = b.split("/").map(Number);
    return yearB !== yearA ? yearB - yearA : semB - semA;
  });

  return (
    <ProtectedRoute>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-sm font-medium text-gray-900">Disciplinas</h1>
          <button className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition">
            + Cadastrar disciplina
          </button>
        </div>

        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-200 w-1/4">
                  Disciplina
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-200 text-center w-1/4">
                  Créditos
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-200 text-center w-1/4">
                  Conceito
                </th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase tracking-wider border-b border-gray-200 text-center w-1/4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {periodos.map((periodo) => (
                <Fragment key={periodo}>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-2 bg-gray-50 text-xs font-medium text-gray-400 uppercase tracking-widest border-y border-gray-100"
                    >
                      Período {periodo}
                    </td>
                  </tr>
                  {grouped[periodo].map((s, index) => (
                    <tr
                      key={`${periodo}-${index}`}
                      className="hover:bg-gray-50 transition group"
                    >
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <div className="flex items-center justify-between">
                          <span>{s.name}</span>
                          <button className="opacity-0 group-hover:opacity-100 transition text-gray-300 hover:text-gray-500 text-xs px-2 py-0.5 rounded border border-gray-200">
                            ✎
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 text-center">
                        {s.credits}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-medium text-gray-700">
                          {s.concept}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center whitespace-nowrap">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${
                            s.status === "CONCLUIDA"
                              ? "bg-green-50 text-green-600"
                              : s.status === "EM ANDAMENTO"
                                ? "bg-blue-50 text-blue-600"
                                : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {s.status === "CONCLUIDA"
                            ? "Concluída"
                            : s.status === "EM ANDAMENTO"
                              ? "Em andamento"
                              : s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>
  );
}
