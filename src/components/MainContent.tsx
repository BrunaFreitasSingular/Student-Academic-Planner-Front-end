"use client"

import { Button } from "./Button"
import { useModal } from "@/src/context/ModalContext"
import useListSubjects from "../hooks/subjects/useListSubject"
import { ListSubject } from "./ListSubject"
import { SubjectCard } from "./SubjectCardMainContent"


export function MainContent() {
  const { openModal } = useModal()
  
  const { data: subjects, isLoading, isError } = useListSubjects()

  if (isLoading) return <div>Carregando disciplinas...</div>
  if (isError) return <div>Erro ao carregar disciplinas.</div>

  return (
    <div className="space-y-3 w-160 bg-gray-500 rounded-2xl p-3">
      
      <div className="flex justify-between">
        <h3 className="font-semibold">Disciplinas Semestre Atual</h3>

        <Button
          variant="secondary"
          onClick={() => openModal("createSubject")}
        >
          Adicionar Disciplina
        </Button>
      </div>

      <div className="flex flex-col gap-4 overflow-auto max-h-30">
        <ListSubject subjects={subjects} status="em andamento" SubjectCard={SubjectCard} />
      </div>
    </div>
  )
}
