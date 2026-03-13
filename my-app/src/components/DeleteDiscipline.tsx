"use client"

import { Button } from "@/src/components/Button"
import { deleteDiscipline } from "@/src/app/actions/disciplines"
import { Discipline } from "@/src/types/discipline"

type Props = {
  discipline: Discipline
  onClose: () => void
}

export function DeleteDiscipline({ discipline, onClose }: Props) {

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">

        <h2 className="text-lg font-semibold mb-4">
          Excluir disciplina
        </h2>

        <p className="mb-6">
          Tem certeza que deseja excluir <b>{discipline.name}</b>?
        </p>

        <div className="flex gap-3 justify-end">

          <Button onClick={onClose}>
            Cancelar
          </Button>

          <form action={deleteDiscipline}>
            <input type="hidden" name="id" value={String(discipline.id)} />

            <Button type="submit">
              Excluir
            </Button>
          </form>

        </div>

      </div>

    </div>
  )
}