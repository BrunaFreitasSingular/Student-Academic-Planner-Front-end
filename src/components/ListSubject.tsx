"use client";

import { useModal } from "@/src/context/ModalContext";
import { SubjectFromAPI, SubjectCardProps } from "@/src/types/subject";

type SubjectCardComponent = React.ComponentType<SubjectCardProps>;

type Props = {
  subjects: SubjectFromAPI[] | undefined;
  status?: string;
  SubjectCard: SubjectCardComponent;
};

export function ListSubject({ subjects, status, SubjectCard }: Props) {
  const { openModal } = useModal();

  const filteredSubjects = subjects?.filter((subject) => {
    if (!status) return true;
    return subject.status.toLowerCase() === status.toLowerCase();
  });

  return (
    <>
      {filteredSubjects?.map((subject) => (
        <SubjectCard
          key={subject.id}
          id={subject.id}
          name={subject.name}
          credits={subject.credits}
          year={subject.year}
          semester={String(subject.semester)}
          status={subject.status}
          type={subject.type}
          concept={subject.concept}
          average={subject.average}
          onEdit={() => openModal("editSubject", subject)}
        />
      ))}
    </>
  );
}
