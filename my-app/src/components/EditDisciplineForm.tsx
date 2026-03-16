"use client"

import { MdClose } from "react-icons/md"
import { Input } from "@/src/components/Input"
import { Button } from "@/src/components/Button"
import { editDiscipline } from "@/src/app/actions/disciplines"
import { Discipline } from "../types/discipline"

type Props = {
  discipline: Discipline
  onClose: () => void
}

export function EditDisciplineForm({ discipline, onClose }: Props) {

  return (
    <form action={editDiscipline}>

      <div className="fixed inset-0 flex justify-center items-center z-50">

        <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full max-w-md relative border">

          <MdClose
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          />

          <input type="hidden" name="id" value={String(discipline.id)} />

          <Input
            label="Nome"
            name="name"
            defaultValue={discipline.name}
          />

          <Input
            label="Créditos"
            name="credits"
            type="number"
            defaultValue={discipline.credits}
          />

          <Input
            label="Ano"
            name="year"
            type="number"
            defaultValue={discipline.year}
          />

          <Input
            label="Semestre"
            name="semester"
            type="number"
            defaultValue={discipline.semester}
          />

          <Button type="submit">
            Salvar alterações
          </Button>

        </div>

      </div>

    </form>
  )
}