import { Assessment } from "./assessment";

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
}

export type SubjectFromAPI = {
  assessments: Assessment[];
  props: {
    id: number
    name: string
    credits: number
    year: number
    semester: number
    status: string
    id_user: number
    totalAssessments: number
    assessmentsWeights: number[]
  };
};