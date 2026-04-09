"use client"

import { MdClose } from "react-icons/md"
import { Input } from "@/src/components/Input"
import { Button } from "@/src/components/Button"
import { useUpdateSubject } from "@/src/hooks/useUpdateSubject"
import { Subject, UpdateSubjectDTO } from "@/src/types/subject"
import { useState } from "react"

type Props = {
  subject: Subject
  onClose: () => void
}

export function EditSubjectForm({ subject, onClose }: Props) {

  const mutation = useUpdateSubject()
  const [disabled, setDisabled] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setDisabled(true)

        const formData = new FormData(e.currentTarget)

        const data: UpdateSubjectDTO = {
          id: subject.id!,
          name: String(formData.get("name")),
          credits: Number(formData.get("credits")),
          year: Number(formData.get("year")),
          semester: Number(formData.get("semester")),
          status: String(formData.get("status")),
          id_user: Number(formData.get("id_user")),
          totalAssessments: Number(formData.get("totalAssessments")),
          assessmentsWeights: formData.getAll("assessmentsWeights").map(Number)
        }

        mutation.mutate(data, {
          onSuccess: () => { onClose()},
          onError: () => { setDisabled(false)}
        })
      }}
    >

      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-md relative border">

          <MdClose
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          />

          <input type="hidden" name="id" value={String(subject.id)} />

          <Input
            label="Nome"
            name="name"
            defaultValue={subject.name}
          />

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

          <Input
            label="Status"
            name="status"
            defaultValue={subject.status}
          />

          <Input
            label="Id do usuário"
            name="id_user"
            type="number"
            defaultValue={subject.id_user}
          />
          {Array.from({ length: subject.totalAssessments }).map((_, index) => (
            <Input
              key={index}
              label={`Nota ${index + 1}:`}
              name="grade"
              type="number"
              step="0.1"
            />
          ))}

          <Button type="submit" disabled={disabled}>
            {disabled ? "Salvando..." : "Salvar alterações"}
          </Button>

        </div>
      </div>
    </form>
  )
}