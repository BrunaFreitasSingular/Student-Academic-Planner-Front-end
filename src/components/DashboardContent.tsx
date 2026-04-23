"use client";

import { ProgressCard } from "./ProgressCard";
import { useAuth } from "@/src/context/AuthContext";

export function DashboardContent() {
  const { user } = useAuth();

  if (!user?.id) return <p>Carregando...</p>;

  return (
    <div>
      <ProgressCard user_id={user.id} />
    </div>
  );
}
