"use client";

import { useState } from "react";
import { useCreateStudent } from "@/src/hooks/student/useCreateStudent";
import { useCourses } from "@/src/hooks/courses/useCourses";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

export default function CompleteProfilePage() {
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [semester, setSemester] = useState("");
  const { submit, error, loading } = useCreateStudent();
  const {
    data: courses,
    isLoading: coursesLoading,
    isError: coursesError,
  } = useCourses();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Complete seu perfil
        </h1>
        <p className="text-sm text-gray-500">
          Precisamos de algumas informações antes de continuar.
        </p>

        <Input
          label="Nome completo"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="courseId">Curso</label>
          <select
            id="courseId"
            name="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            disabled={coursesLoading || coursesError}
            className="border p-2 rounded bg-white"
          >
            <option value="" disabled>
              {coursesLoading
                ? "Carregando cursos..."
                : coursesError
                  ? "Erro ao carregar cursos"
                  : "Selecione um curso"}
            </option>
            {courses?.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Semestre atual"
          type="number"
          placeholder="Ex: 4"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          variant="primary"
          onClick={() => submit(name, Number(courseId), Number(semester))}
          disabled={loading || !name || !courseId || !semester}
        >
          {loading ? "Salvando..." : "Continuar"}
        </Button>
      </div>
    </div>
  );
}
