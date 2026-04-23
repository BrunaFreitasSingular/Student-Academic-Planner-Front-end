"use client";

import { useAuth } from "@/src/context/AuthContext";
import { ProfileCard } from "./profileCard";
import { LinkComponet } from "./Link";
import Link from "next/link";

export function HomeContent() {
  const { user, token } = useAuth();

  if (token && user?.student) {
    return (
      <div className="space-y-4">
        <div className="p-6 space-y-4">
          <ProfileCard
            name={user.student.name}
            course={user.student.course_name}
            semester={`${user.student.semester}º`}
            image="/images/profile.jpg"
          />
        </div>
        <div className="flex justify-center gap-5">
          <LinkComponet href="/subjects">Ver disciplinas</LinkComponet>
          <LinkComponet href="/dashboard">Abrir Dashboard</LinkComponet>
        </div>
      </div>
    );
  }

  // usuário não logado — landing page
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 border border-gray-200 rounded-full px-4 py-1">
          Planner Acadêmico
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
          Organize sua vida acadêmica em um só lugar
        </h1>
        <p className="text-gray-500 max-w-md text-base">
          Acompanhe disciplinas, notas, progresso e semestres. Tudo sincronizado
          e acessível de qualquer lugar.
        </p>
        <div className="flex gap-3 mt-2">
          <Link
            href="/login"
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
          >
            Entrar na conta
          </Link>
          <Link
            href="/login"
            className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Criar conta
          </Link>
        </div>
      </section>
    </div>
  );
}
