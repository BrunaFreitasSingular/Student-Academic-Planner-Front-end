"use client";

import { MainContent } from "@/src/components/MainContent";
import { AsideContent } from "@/src/components/AsideContent";
import { ProfileCard } from "@/src/components/profileCard";
import  useListSubjects  from "@/src/hooks/useListSubject";


export default function Dashboard() {
  const {
    data: subjects,
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
        <div>
          <MainContent/>
        </div>
        <div>
          <AsideContent/>
        </div>
      </main>
    </div>
  );
}