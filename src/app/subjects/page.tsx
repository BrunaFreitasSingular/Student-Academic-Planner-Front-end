"use client"

import { Button } from "@/src/components/Button";
import useSubjects from "@/src/hooks/subjects/useSubjects";
import { SubjectFromAPI } from "@/src/types/subject";

//criar tabela em arquivo separado
const TabelaPeriodo = ({ subjects }: { subjects: SubjectFromAPI[]}) => {
  return (
    <div className="overflow-auto max-h-130 rounded-lg border border-gray-300 shadow-sm">
      <div className="bg-gray-300 p-3 font-bold text-gray-700">
        Período: 2026/1
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200 text-sm uppercase text-gray-600">
          <tr>
            <th className="p-3 border-b border-r border-gray-300">Disciplina</th>
            <th className="p-3 border-b border-r border-gray-300 text-center">Créditos</th>
            <th className="p-3 border-b border-r border-gray-300 text-center">Conceito</th>
            <th className="p-3 border-b border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {subjects?.map((s, index) => (
            <tr key={index} className="border-b border-gray-300 last:border-0 hover:bg-gray-50">
              <td className="p-3 border-r border-gray-300 flex justify-between items-center">
                {s.name}
                <button className="text-gray-400 hover:text-blue-500">
                  <span className="text-xs">✎</span>
                </button>
              </td>
              <td className="p-3 border-r border-gray-300 text-center">{s.credits}</td>
              <td>conceitos</td>
              <td className="p-3 italic text-gray-600">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function SubjectsPage() {
  const { subjects } = useSubjects();

  return (
    <div>
      <main className="px-4">
        <div className= "flex p-4 justify-end rounded-lg">
          <Button variant="primary">
            Cadastrar Disciplina
          </Button>
        </div>
        <TabelaPeriodo subjects={subjects || []} />
      </main>
    </div>
  );
}