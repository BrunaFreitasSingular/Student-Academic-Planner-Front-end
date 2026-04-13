"use client";

import { MainContent } from "@/src/components/MainContent";
import { AsideContent } from "@/src/components/AsideContent";
import { ProfileCard } from "@/src/components/profileCard";
import  useListSubjects  from "@/src/hooks/subjects/useListSubject";
import { DashboardContent } from "@/src/components/DashboardContent";


export default function Dashboard() {
  const {
    isLoading,
    isError,
  } = useListSubjects();

  
  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar</p>;

  return (
    <div className="p-6 space-y-4">
      <ProfileCard
        name="Bruna Freitas"
        course="Engenharia da Computação"
        semester="4º"
        image="/images/profile.jpg"
      />

      <main className="flex justify-between px-50">
        <div className="flex flex-col">
          <MainContent/>
          <DashboardContent/>
        </div>
        <div>
          <AsideContent/>
        </div>
      </main>
    </div>
  );
}
