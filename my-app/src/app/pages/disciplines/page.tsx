"use client"
import { useState } from "react";
import { addDiscipline } from "../../actions/disciplines";
import { Button } from "@/src/components/Button";
import { DisciplineForm } from "@/src/components/DisciplineForm"

export default function SubjectsPage() {

  const [showForm,setShowForm] = useState(false);

  const openForm = () => {setShowForm(true)}
  const closeForm = () => {setShowForm(false)}

  return (
    <div>
      <Button variant="small" onClick={openForm}>
        Adicionar Disciplina
      </Button>

      <Button href="/" variant="small">
        Voltar para Home
      </Button>
      
      {showForm && 
        <DisciplineForm
          action={addDiscipline}
          onClose={closeForm}
        />}
    
    </div>
  );
}