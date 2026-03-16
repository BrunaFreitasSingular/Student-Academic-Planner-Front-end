"use server";

//manipulação de arquivos
import fs from "fs/promises";
//manipular caminhos de arquivos- criar/modificar e verificar diretorios
import path from "path";
import { Discipline } from "../../types/discipline";

//Cria um caminho absoluto para o arquivo disciplines.json dentro da pasta data na raiz do projeto
const DATA_PATH = path.join(process.cwd(), "data", "disciplines.json");

//lê as disciplinas do arquivo .json
export async function getDisciplines(): Promise<Discipline[]> {
  const raw = await fs.readFile(DATA_PATH, "utf-8");

  if (!raw.trim()) {
    return [];
  }

  return JSON.parse(raw);
}

export async function addDiscipline(formData: FormData): Promise<void> {
  console.log("SERVER ACTION EXECUTADA")
  const disciplines = await getDisciplines();

  const weights = formData
      .getAll("assessmentsWeights")
      .map((w) => Number(w));

  const newDiscipline: Discipline = {
    id: Date.now(),
    name: formData.get("name") as string,
    credits: Number(formData.get("credits")),
    year: Number(formData.get("year")),
    semester: Number(formData.get("semester")),
    status: String(formData.get("status")),
    id_user: Number(formData.get("id_user")),
    totalAssessments: Number(formData.get("totalAssessments")),
    assessmentsWeights: weights
  };

  disciplines.push(newDiscipline);
  await fs.writeFile(DATA_PATH, JSON.stringify(disciplines, null, 2));
}

export async function editDiscipline(formData: FormData): Promise<void> {

  const disciplines = await getDisciplines();

  const id = Number(formData.get("id"));

  const weights = formData
    .getAll("assessmentsWeights")
    .map((w) => Number(w));

  const updatedDisciplines = disciplines.map((discipline) => {

    if (discipline.id !== id) {
      return discipline;
    }

    return {
      ...discipline,
      name: String(formData.get("name")),
      credits: Number(formData.get("credits")),
      year: Number(formData.get("year")),
      semester: Number(formData.get("semester")),
      status: String(formData.get("status")),
      id_user: Number(formData.get("id_user")),
      totalAssessments: Number(formData.get("totalAssessments")),
      assessmentsWeights: weights
    };
  });

  await fs.writeFile(DATA_PATH, JSON.stringify(updatedDisciplines, null, 2));
}

export async function deleteDiscipline(formData: FormData): Promise<void> {

  const disciplines = await getDisciplines();

  const id = Number(formData.get("id"));

  const filteredDisciplines = disciplines.filter(
    (discipline) => discipline.id !== id
  );

  await fs.writeFile(DATA_PATH, JSON.stringify(filteredDisciplines, null, 2));
}
