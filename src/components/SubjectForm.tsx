"use client"

import { MdClose } from "react-icons/md"
import { useState } from "react"
import { Input } from "@/src/components/Input"
import { Button } from "@/src/components/Button"
import { useCreateSubject } from "@/src/hooks/subjects/useCreateSubject"
import { SubjectType } from "../types/subject"

type Props = {
  onClose: () => void
}

export function SubjectForm({ onClose }: Props) {

  const [totalAssessments, setTotalAssessments] = useState(0)

  const mutation = useCreateSubject()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const data = {
          name: String(formData.get("name")),
          credits: Number(formData.get("credits")),
          year: Number(formData.get("year")),
          semester: Number(formData.get("semester")),
          status: String(formData.get("status")),
          id_user: Number(formData.get("id_user")),
          totalAssessments: Number(formData.get("totalAssessments")),
          assessmentsWeights: formData.getAll("assessmentsWeights").map(Number),
          type: formData.get("type") as SubjectType
        }

        const weights = formData.getAll("assessmentsWeights").map(Number)
        const totalWeight = weights.reduce((sum, w) => sum + w, 0)

        if (Math.abs(totalWeight - 10) > 0.01) {
          alert("A soma dos pesos deve ser 10.")
          return
        }

        mutation.mutate(data, {
          onSuccess: () => {
            onClose()
          }
        })
      }}
    >

      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-md relative border overflow-auto max-h-[80vh]">

          <MdClose
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          />

          <Input label="Nome" name="name" />
          <Input label="Créditos" name="credits" type="number" />
          <Input label="Ano" name="year" type="number" />
          <Input label="Semestre" name="semester" type="number" />
          
          <label className="block text-sm font-medium">Status</label>
          <select name="status" className="w-full border rounded p-2">
            <option value="EM ANDAMENTO">Em andamento</option>
            <option value="PLANEJADA">Planejada</option>
            <option value="CONCLUIDA">Concluída</option>
          </select>

          <Input label="Id do usuário" name="id_user" type="number" />
          

          <Input
            label="Nº de Avaliações"
            name="totalAssessments"
            type="number"
            onChange={(e) => setTotalAssessments(Number(e.target.value))}
          />

          {Array.from({ length: totalAssessments }).map((_, index) => (
            <Input
              key={index}
              label={`Peso avaliação ${index + 1}`}
              name="assessmentsWeights"
              type="number"
              step="0.1"
            />
          ))}

          <label className="block text-sm font-medium">Tipo</label>
          <select name="type" className="w-full border rounded p-2">
            <option value={SubjectType.REQUIRED}>Obrigatória</option>
            <option value={SubjectType.ELECTIVE}>Eletiva</option>
            <option value={SubjectType.COMPLEMENTARY}>Complementar</option>
          </select>

          <Button type="submit" disabled={mutation.isPending}>
           {mutation.isPending ? "Salvando..." : "Salvar"}
          </Button>

        </div>
      </div>
    </form>
  )
}