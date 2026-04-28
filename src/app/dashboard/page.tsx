"use client";

import { MainContent } from "@/src/components/MainContent";
import { AsideContent } from "@/src/components/AsideContent";
import { DashboardContent } from "@/src/components/DashboardContent";
import { ProtectedRoute } from "@/src/components/ProtectedRoute";
import useListSubjects from "@/src/hooks/subjects/useListSubject";
import { useStudent } from "@/src/hooks/student/useStudent";
import { ProfileCard } from "@/src/components/profileCard";

export default function Dashboard() {
  const { data: student } = useStudent();
  const { isLoading, isError } = useListSubjects();

  if (isLoading)
    return <p className="p-6 text-sm text-gray-400">Carregando...</p>;
  if (isError)
    return <p className="p-6 text-sm text-red-400">Erro ao carregar</p>;

  return (
    <ProtectedRoute>
      <div className="p-6 space-y-4">
        <ProfileCard
          name={student?.name ?? "Usuário"}
          course={student?.course_name ?? "—"}
          semester={student?.semester ? `${student.semester}º` : "—"}
          image="/images/profile.jpg"
        />

        {/* conteúdo principal */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-4">
          <div className="flex flex-col gap-4">
            <MainContent />
            <DashboardContent />
          </div>
          <AsideContent />
        </div>
      </div>
    </ProtectedRoute>
  );
}
