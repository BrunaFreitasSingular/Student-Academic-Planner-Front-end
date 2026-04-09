"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { SubjectForm } from "@/src/components/SubjectForm";
import { EditSubjectForm } from "@/src/components/EditSubjectForm";
import { DeleteSubject } from "@/src/components/DeleteSubject";
import { addSubject } from "@/src/app/actions/subjects";
import { Subject } from "@/src/types/subject";

type ModalType =
  | "createSubject"
  | "editSubject"
  | "deleteSubject"
  | null;

type ModalContextType = {
  openModal: (modal: ModalType, data?: Subject) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function SubjectProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<Subject | null>(null);

  function openModal(modal: ModalType, data?: Subject) {
    setActiveModal(modal);
    setModalData(data ?? null);
  }

  function closeModal() {
    setActiveModal(null);
    setModalData(null);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {activeModal === "createSubject" && (
        <SubjectForm onClose={closeModal} />
      )}

      {activeModal === "editSubject" && modalData && (
        <EditSubjectForm subject={modalData} onClose={closeModal} />
      )}

      {activeModal === "deleteSubject" && modalData && (
        <DeleteSubject subject={modalData} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside SubjectProvider");
  }

  return context;
}