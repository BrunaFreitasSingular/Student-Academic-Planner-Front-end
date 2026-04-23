"use client";

import { MdClose } from "react-icons/md";
import { Input } from "@/src/components/Input";
import { useUpdateSubject } from "@/src/hooks/subjects/useUpdateSubject";
import { SubjectFromAPI, UpdateSubjectDTO } from "@/src/types/subject";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "./Button";

type Props = {
  subject: SubjectFromAPI;
  onClose: () => void;
};

export function EditSubjectForm({ subject, onClose }: Props) {
  const mutation = useUpdateSubject();
  const [disabled, setDisabled] = useState(false);
  const { user } = useAuth();

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md relative border border-gray-200 overflow-auto max-h-[85vh]">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-medium text-gray-900">
            Editar disciplina
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

            if (!user?.student?.id) {
              alert("Usuário não autenticado");
              return;
            }

            setDisabled(true);

            const formData = new FormData(e.currentTarget);
            const grades = Array.from(
              { length: subject.totalAssessments },
              (_, i) => Number(formData.get(`grade_${i}`)),
            );

            const data: UpdateSubjectDTO = {
              id: subject.id!,
              name: String(formData.get("name")),
              credits: Number(formData.get("credits")),
              year: Number(formData.get("year")),
              semester: Number(formData.get("semester")),
              status: String(formData.get("status")),
              id_student: user.student.id,
              totalAssessments: subject.totalAssessments,
              assessmentsWeights: subject.assessments.map((a) => a.weight),
              type: subject.type,
              grades,
            };

            mutation.mutate(data, {
              onSuccess: () => {
                onClose();
              },
              onError: () => {
                setDisabled(false);
              },
            });
          }}
        >
          <input type="hidden" name="id" value={String(subject.id)} />

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <Input label="Nome" name="name" defaultValue={subject.name} />
            </div>
            <Input
              label="Créditos"
              name="credits"
              type="number"
              defaultValue={subject.credits}
            />
            <Input
              label="Ano"
              name="year"
              type="number"
              defaultValue={subject.year}
            />
            <Input
              label="Semestre"
              name="semester"
              type="number"
              defaultValue={subject.semester}
            />
            {/* ← Input de id_student removido */}
            <div className="col-span-2">
              <Input
                label="Status"
                name="status"
                defaultValue={subject.status}
              />
            </div>
          </div>

          {subject.totalAssessments > 0 && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 mt-1">
                Notas
              </p>
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: subject.totalAssessments }).map(
                  (_, index) => (
                    <Input
                      key={index}
                      label={`Nota ${index + 1}`}
                      name={`grade_${index}`}
                      type="number"
                      step="0.1"
                      defaultValue={subject.assessments?.[index]?.grade ?? ""}
                    />
                  ),
                )}
              </div>
            </div>
          )}

          <div className="pt-2">
            <Button type="submit" variant="form" disabled={disabled}>
              {disabled ? "Salvando..." : "Salvar alterações"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
