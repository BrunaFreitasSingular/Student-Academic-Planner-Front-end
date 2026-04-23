"use client";

import { useModal } from "@/src/context/ModalContext";
import { useStudentSubjects } from "../hooks/subjects/useStudentSubjects";
import { ListSubject } from "./ListSubject";
import { SubjectCardDetailed } from "./SubjectCardDetailed";

export function MainContent() {
  const { openModal } = useModal();
  const { data: subjects, isLoading, isError } = useStudentSubjects();

  if (isLoading)
    return <div className="text-sm text-gray-400 p-4">Carregando...</div>;
  if (isError)
    return <div className="text-sm text-red-400 p-4">Erro ao carregar</div>;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-900">
          Semestre atual
        </span>
        <button
          onClick={() => openModal("createSubject")}
          className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition"
        >
          + Adicionar disciplina
        </button>
      </div>

      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
        2026 / 1
      </p>

      <div className="flex flex-col divide-y divide-gray-100">
        <ListSubject
          subjects={subjects}
          status="em andamento"
          SubjectCard={SubjectCardDetailed}
        />
      </div>
    </div>
  );
}
