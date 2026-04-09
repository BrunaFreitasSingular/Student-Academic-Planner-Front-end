"use client";

import { SubjectCard } from "./SubjectCardAsideContent";
import { FaSearch } from "react-icons/fa";
import { LinkComponet } from "./Link";
import { getSubjects } from "../services/subjectService";
import { useEffect, useState } from "react";
import { SubjectFromAPI } from "../types/subject";
import { ListSubject } from "./ListSubject";

export function AsideContent() {
  const [subjects, setSubjects] = useState<SubjectFromAPI[]>([])

  useEffect(()=>{
    async function loadSubjects() {
      try{
        const data = await getSubjects()
        setSubjects(data)
      } catch(error){
        console.error("Erro ao buscar disciplinas:", error)
      }
    }
    loadSubjects()
  }, [])

  return (
    <div className="space-y-4 w-100 bg-gray-500 rounded-2xl p-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">Histórico de Disciplinas</h3>

        <LinkComponet href="/subjects" variant="primary">
          <FaSearch className="hover:text-gray-400 cursor-pointer" />
        </LinkComponet>
      </div>
      <div className="flex flex-col gap-2 text-xs overflow-auto max-h-80">
        <ListSubject subjects={subjects} status="concluida" SubjectCard={SubjectCard}/>
        {/* {subjects
          .filter(
            (subject) =>
              subject.props.status.toLowerCase() === "concluida"
          )
          .map((subject) => (
            <SubjectCard
              key={subject.props.id}
              name={subject.props.name}
              credits={subject.props.credits}
              year={subject.props.year}
              semester={String(subject.props.semester)}
              status={subject.props.status}
              variant="approved"
            />
          ))} */}
      </div>
    </div>
  );
}
