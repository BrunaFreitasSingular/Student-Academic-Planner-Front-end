"use client"

import { useModal } from "@/src/context/ModalContext"
import { SubjectFromAPI } from "@/src/types/subject"
import { SubjectProps } from "./SubjectCardMainContent"
type SubjectCardComponent = React.ComponentType<SubjectProps>

type Props = {
  subjects: SubjectFromAPI[] | undefined
  status?: string 
  SubjectCard: SubjectCardComponent
}

export function ListSubject({ subjects, status, SubjectCard }: Props) {
  const { openModal } = useModal()

  const filteredSubjects = subjects?.filter((subject) => {
    if (!status) return true
    return subject.props.status.toLowerCase() === status.toLowerCase()
  })

  return (
    <>
      {filteredSubjects?.map((subject) => (
        <SubjectCard
          key={subject.props.id}
          id={subject.props.id}
          name={subject.props.name}
          credits={subject.props.credits}
          year={subject.props.year}
          semester={String(subject.props.semester)}
          status={subject.props.status}
          variant="default"
          onEdit={() => openModal("editSubject", subject.props)}
        />
      )
      )}
    </>
  )
}