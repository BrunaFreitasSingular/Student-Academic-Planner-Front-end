"use client"
import { DisciplineCard } from "./DisciplineCardMainContent"
import disciplines from "@/data/disciplines.json"

import { useState } from "react";
import { Button } from "./Button";
import { DisciplineForm } from "@/src/components/DisciplineForm"
import { addDiscipline, editDiscipline } from "../app/actions/disciplines";

export function MainContent() {
    const [showAddForm,setShowAddForm] = useState(false)
    const openAddForm = () => {setShowAddForm(true)}
    const closeAddForm = () => {setShowAddForm(false)}

    const [showEditForm, setShowEditForm] = useState(false)
    const openEditForm = () => { setShowEditForm(true)}
    const closeEditForm = () => { setShowEditForm(false)}

  return (
    <div className="space-y-8 w-140 bg-gray-500 rounded-2xl p-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">Disciplinas Semestre Atual</h3>
          <Button variant="secondary" onClick={openAddForm}>
            Adicionar Disciplina
          </Button>
      </div>
      <div className="flex flex-col gap-4 overflow-auto max-h-80">
      {disciplines
        .filter(discipline => discipline.status.toLowerCase() === "em andamento")
        .map((discipline) => (
        <DisciplineCard
          key={discipline.id}
          name={discipline.name}
          credits={discipline.credits}
          year= {discipline.year}
          semester={String(discipline.semester)}
          status={discipline.status}
          variant="default"
        />
      ))}
      </div>
      <Button variant="secondary" onClick={openEditForm}>
        Editar Disciplina
      </Button>
    {showAddForm && 
        <DisciplineForm
            action={addDiscipline}
            onClose={closeAddForm}
    />}
    { showEditForm && <DisciplineForm
        action={editDiscipline}
        onClose={closeEditForm}
    />}

    </div>
  );
}
