"use client"

import { MdClose } from "react-icons/md"
import { useState } from "react"
import { Input } from "@/src/components/Input"
import { Button } from "@/src/components/Button"

type DisciplineFormProps = {
  action: (formData: FormData) => void
  onClose: () => void
}

export function DisciplineForm({ action, onClose }: DisciplineFormProps) {

  const [totalAssessments, setTotalAssessments] = useState(0)

  return (
    <form 
        onKeyDown={(e) => {
          if (e.key === "Enter") { 
            e.preventDefault()
            const form = e.currentTarget
            const elements = Array.from(form.elements) as HTMLElement[]
            const index = elements.indexOf(e.target as HTMLElement)

            if (index > -1 && index < elements.length - 1) {
              elements[index + 1].focus()
            }
          }
    }}
    action={async (formData) => {
    await action(formData)
    onClose()
  }}
>
      

      <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-md relative border">

          <MdClose
            className="absolute top-3 right-3 text-sm p-1 rounded bg-gray-500 text-black hover:bg-gray-900 transition cursor-pointer"
            onClick={onClose}
          />

          <Input label="Nome:" name="name" type="text"/>
          <Input label="Nº de Creditos:" name="credits" type="number"/>
          <Input label="Ano:" name="year" type="number"/>
          <Input label="Semestre:" name="semester" type="number"/>
          <Input label="Status:" name="status" type="text"/>
          <Input label="Id do usuário:" name="id_user" type="number"/>

          <Input
            label="Nº de Avaliações"
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

          <Button variant="secondary" type="submit">
            Salvar Disciplina
          </Button>
        </div>
      </div>
    </form>
  )
}
