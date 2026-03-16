export type Discipline = {
  id: number | null
  name: string
  credits: number
  year: number
  semester: number
  status: string
  id_user: number
  totalAssessments: number
  assessmentsWeights: number[]
};
