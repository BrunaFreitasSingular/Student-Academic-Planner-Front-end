"use client";

import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Input } from "@/src/components/Input";
import { useCreateSubject } from "@/src/hooks/subjects/useCreateSubject";
import { SubjectType } from "../types/subject";
import { useStudent } from "@/src/hooks/student/useStudent";

type Props = { onClose: () => void };

export function SubjectForm({ onClose }: Props) {
  const [totalAssessments, setTotalAssessments] = useState(0);
  const mutation = useCreateSubject();
  const { data: student } = useStudent();

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md relative border border-gray-200 overflow-auto max-h-[85vh]">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-medium text-gray-900">
            Cadastrar disciplina
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <MdClose size={18} />
          </button>
        </div>

        <form
          className="px-5 py-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();

            if (!student?.id) {
              alert("Usuário não autenticado");
              return;
            }

            const formData = new FormData(e.currentTarget);
            const weights = formData.getAll("assessmentsWeights").map(Number);
            const totalWeight = weights.reduce((sum, w) => sum + w, 0);

            if (Math.abs(totalWeight - 10) > 0.01) {
              alert("A soma dos pesos deve ser 10.");
              return;
            }

            const data = {
              name: String(formData.get("name")),
              credits: Number(formData.get("credits")),
              year: Number(formData.get("year")),
              semester: Number(formData.get("semester")),
              status: String(formData.get("status")),
              id_student: student.id,
              totalAssessments: Number(formData.get("totalAssessments")),
              assessmentsWeights: weights,
              type: formData.get("type") as SubjectType,
            };

            mutation.mutate(data, { onSuccess: () => onClose() });
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <Input label="Nome" name="name" />
            </div>
            <Input label="Créditos" name="credits" type="number" />
            <Input label="Ano" name="year" type="number" />
            <Input label="Semestre" name="semester" type="number" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Status</label>
              <select
                name="status"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
              >
                <option value="EM ANDAMENTO">Em andamento</option>
                <option value="PLANEJADA">Planejada</option>
                <option value="CONCLUIDA">Concluída</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Tipo</label>
              <select
                name="type"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
              >
                <option value={SubjectType.REQUIRED}>Obrigatória</option>
                <option value={SubjectType.ELECTIVE}>Eletiva</option>
                <option value={SubjectType.COMPLEMENTARY}>Complementar</option>
              </select>
            </div>
          </div>

          <Input
            label="Nº de avaliações"
            name="totalAssessments"
            type="number"
            onChange={(e) => setTotalAssessments(Number(e.target.value))}
          />

          {totalAssessments > 0 && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Peso das avaliações{" "}
                <span className="normal-case font-normal">
                  (soma deve ser 10)
                </span>
              </p>
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: totalAssessments }).map((_, index) => (
                  <Input
                    key={index}
                    label={`Peso ${index + 1}`}
                    name="assessmentsWeights"
                    type="number"
                    step="0.1"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full py-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
            >
              {mutation.isPending ? "Salvando..." : "Cadastrar disciplina"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
