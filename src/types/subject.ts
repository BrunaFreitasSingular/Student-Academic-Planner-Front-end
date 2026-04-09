import { Assessment } from "./assessment";

export enum SubjectType {
  REQUIRED = "REQUIRED",
  ELECTIVE = "ELECTIVE",
  COMPLEMENTARY = "COMPLEMENTARY"
}

export type Subject = {
  id: number 
  name: string
  credits: number
  year: number
  semester: number
  status: string
  id_user: number
  totalAssessments: number
  assessmentsWeights: number[]
  type: SubjectType
};

export type CreateSubjectDTO = {
  name: string
  credits: number
  year: number
  semester: number
  status: string
  id_user: number
  totalAssessments: number
  assessmentsWeights: number[]
  type: SubjectType
}

export type UpdateSubjectDTO = {
  id: number
  name: string
  credits: number
  year: number
  semester: number
  status: string
  id_user: number
  totalAssessments: number
  assessmentsWeights: number[]
  type: SubjectType
}

export type SubjectFromAPI = {
  id: number
  name: string
  credits: number
  year: number
  semester: number
  status: string
  id_user: number
  totalAssessments: number
  assessmentsWeights: number[]
  type: SubjectType
  assessments: Assessment[]
  average: number
  concept: string
};