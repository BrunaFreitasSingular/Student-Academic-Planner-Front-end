"use client"

import { Button } from "@/src/components/Button"
import { useDeleteSubject } from "@/src/hooks/useDeleteSubject"
import { Subject } from "@/src/types/subject"
import { useState } from "react"

type Props = {
  subject: Subject
  onClose: () => void
}

export function DeleteSubject({ subject, onClose }: Props) {

  const mutation = useDeleteSubject()
  const [loading, setLoading] = useState(false)

  function handleDelete() {
    setLoading(true)

    mutation.mutate(Number(subject.id), {
      onSuccess: () => {
        onClose()
      },
      onError: () => {
        setLoading(false)
      }
    })
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">

        <h2 className="text-lg font-semibold mb-4">
          Excluir disciplina
        </h2>

        <p className="mb-6">
          Tem certeza que deseja excluir <b>{subject.name}</b>?
        </p>

        <div className="flex gap-3 justify-end">

          <Button onClick={onClose}>
            Cancelar
          </Button>

          <Button
            variant="secondary"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Excluindo..." : "Excluir"}
          </Button>

        </div>

      </div>

    </div>
  )
}