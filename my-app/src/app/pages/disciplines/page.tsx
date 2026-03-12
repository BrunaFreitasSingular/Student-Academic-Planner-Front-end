"use client"
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/src/components/Input";
import { addDiscipline } from "../../actions/disciplines";
import { Button } from "@/src/components/Button";

export default function SubjectsPage() {

  const [showForm,setShowForm] = useState(false);
  const [totalAssessments, setTotalAssessments] = useState(0);

  const openForm = () => {setShowForm(true)}

  return (
    <div>
      <h1>Subjects</h1>

      <Button variant="small" onClick={openForm}>
        Adicionar Disciplina
      </Button>

      {showForm && (
        <form action={addDiscipline} className="flex flex-col gap-3 w-80">

          <Input label="Name:" name="name" type="text"/>
          <Input label="Credits:" name="credits" type="number"/>
          <Input label="Year:" name="year" type="number"/>
          <Input label="Semester:" name="semester" type="number"/>
          <Input label="Status:" name="status" type="text"/>
          <Input label="Id_User:" name="id_user" type="number"/>

          <Input
            label="Total Assessments"
            name="totalAssessments"
            type="number"
            min={0}
            onChange={(e) => setTotalAssessments(Number(e.target.value))}
          />

          {Array.from({ length: totalAssessments }).map((_, index) => (
            <Input
              key={index}
              label={`Peso avaliação ${index + 1}`}
              name="assessmentsWeights"
              type="number"
              step="0.1"
              required
            />
          ))}

          <Button variant="large" type="submit">
            Salvar Disciplina
          </Button>

        </form>
      )}
    {/*
      <Link href="/">
        Voltar para Home
      </Link>
    */}
      

    </div>
  );
}