"use client"
import { DisciplineCard } from "./DisciplineCardAsideContent"
import disciplines from "@/data/disciplines.json"
import { FaSearch } from 'react-icons/fa';
import { LinkComponet } from "./Link"

export function AsideContext(){
    return(
        <div className="space-y-4 w-100 bg-gray-500 rounded-2xl p-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">Historico de Disciplinas</h3>
          <LinkComponet href="/disciplines" variant="primary">
           <FaSearch className="hover:text-gray-400 cursor-pointer"/>
          </LinkComponet>
      </div>
      <div className="flex flex-col gap-2 text-xs overflow-auto max-h-80">
        {disciplines
        .filter(discipline => discipline.status.toLowerCase() === "concluída")
        .map((discipline) => (
        <DisciplineCard
          key={discipline.id}
          name={discipline.name}
          credits={discipline.credits}
          year= {discipline.year}
          semester={String(discipline.semester)}
          status={discipline.status}
          variant="approved"
        />
      ))}
      </div>
    </div>
    );
}
