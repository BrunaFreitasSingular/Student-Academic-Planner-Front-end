import { Assessment } from "./assessment";

export enum SubjectType {
  REQUIRED = "REQUIRED",
  ELECTIVE = "ELECTIVE",
  COMPLEMENTARY = "COMPLEMENTARY",
}

export type Subject = {
  id: number;
  name: string;
  credits: number;
  year: number;
  semester: number;
  status: string;
  id_student: number;
  totalAssessments: number;
  assessmentsWeights: number[];
  type: SubjectType;
};

export type CreateSubjectDTO = {
  name: string;
  credits: number;
  year: number;
  semester: number;
  status: string;
  id_student: number;
  totalAssessments: number;
  assessmentsWeights: number[];
  type: SubjectType;
};

export type UpdateSubjectDTO = {
  id: number;
  name: string;
  credits: number;
  year: number;
  semester: number;
  status: string;
  id_student: number;
  totalAssessments: number;
  assessmentsWeights: number[];
  type: SubjectType;
  grades: number[];
};

export type SubjectFromAPI = {
  id: number;
  name: string;
  credits: number;
  year: number;
  semester: number;
  status: string;
  id_student: number;
  totalAssessments: number;
  assessmentsWeights: number[];
  type: SubjectType;
  assessments: Assessment[];
  average: number;
  concept: string;
};

export type SubjectCardProps = {
  id?: number;
  name: string;
  credits: number;
  year: number;
  semester: string;
  status: string;
  type: SubjectType;
  concept?: string;
  average?: number;
  onEdit?: () => void;
};
