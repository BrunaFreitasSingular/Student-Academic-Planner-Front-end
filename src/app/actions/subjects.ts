"use server";

//manipulação de arquivos
import fs from "fs/promises";

import path from "path";
import { Subject, SubjectType } from "../../types/subject";

const DATA_PATH = path.join(process.cwd(), "data", "subjects.json");

export async function getSubjects(): Promise<Subject[]> {
  const raw = await fs.readFile(DATA_PATH, "utf-8");

  if (!raw.trim()) {
    return [];
  }

  return JSON.parse(raw);
}

export async function addSubject(formData: FormData): Promise<void> {
  console.log("SERVER ACTION EXECUTADA");

  const subjects = await getSubjects();

  const weights = formData.getAll("assessmentsWeights").map((w) => Number(w));

  const newSubject: Subject = {
    id: Date.now(),
    name: formData.get("name") as string,
    credits: Number(formData.get("credits")),
    year: Number(formData.get("year")),
    semester: Number(formData.get("semester")),
    status: String(formData.get("status")),
    id_student: Number(formData.get("id_student")),
    totalAssessments: Number(formData.get("totalAssessments")),
    assessmentsWeights: weights,
    type: formData.get("type") as SubjectType,
  };

  subjects.push(newSubject);
  await fs.writeFile(DATA_PATH, JSON.stringify(subjects, null, 2));
}

export async function editSubject(formData: FormData): Promise<void> {
  const subjects = await getSubjects();

  const id = Number(formData.get("id"));

  if (!id) {
    throw new Error("ID inválido para edição");
  }

  const weights = formData.getAll("assessmentsWeights").map((w) => Number(w));

  let found = false;

  const updatedSubjects = subjects.map((subject) => {
    if (subject.id !== id) {
      return subject;
    }

    found = true;

    return {
      ...subject,
      name: String(formData.get("name")),
      credits: Number(formData.get("credits")),
      year: Number(formData.get("year")),
      semester: Number(formData.get("semester")),
      status: String(formData.get("status")),
      id_student: Number(formData.get("id_student")),
      totalAssessments: Number(formData.get("totalAssessments")),
      assessmentsWeights: weights,
    };
  });

  if (!found) {
    throw new Error("Subject não encontrada");
  }

  await fs.writeFile(DATA_PATH, JSON.stringify(updatedSubjects, null, 2));
}

export async function deleteSubject(formData: FormData): Promise<void> {
  const subjects = await getSubjects();

  const id = Number(formData.get("id"));

  const filteredSubjects = subjects.filter((subject) => subject.id !== id);

  await fs.writeFile(DATA_PATH, JSON.stringify(filteredSubjects, null, 2));
}

export async function getSubjectByName(name: string): Promise<Subject | null> {
  const subjects = await getSubjects();

  const subject = subjects.find(
    (s) => s.name.toLowerCase() === name.toLowerCase(),
  );

  return subject || null;
}
