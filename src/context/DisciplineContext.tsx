"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { DisciplineForm } from "@/src/components/DisciplineForm"
import { EditDisciplineForm } from "@/src/components/EditDisciplineForm"
import { DeleteDiscipline } from "@/src/components/DeleteDiscipline"
import { addDiscipline } from "@/src/app/actions/disciplines"
import { Discipline } from "@/src/types/discipline"

type ModalType =
  | "createDiscipline"
  | "editDiscipline"
  | "deleteDiscipline"
  | null

type ModalContextType = {
  openModal: (modal: ModalType, data?: Discipline) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function DisciplineProvider({ children }: { children: ReactNode }) {

  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [modalData, setModalData] = useState<Discipline | null>(null)

  function openModal(modal: ModalType, data?: Discipline) {
    setActiveModal(modal)
    setModalData(data ?? null)
  }

  function closeModal() {
    setActiveModal(null)
    setModalData(null)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>

      {children}

      {activeModal === "createDiscipline" && (
        <DisciplineForm action={addDiscipline} onClose={closeModal} />
      )}

      {activeModal === "editDiscipline" && modalData && (
        <EditDisciplineForm discipline={modalData} onClose={closeModal} />
      )}

      {activeModal === "deleteDiscipline" && modalData && (
        <DeleteDiscipline discipline={modalData} onClose={closeModal} />
      )}

    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error("useModal must be used inside DisciplineProvider")
  }

  return context
}
