"use client";

import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/src/context/AuthContext";

export function useLogout() {
  const { logout } = useAuth();
  const queryClient = useQueryClient();
  const router = useRouter();

  return function performLogout() {
    logout();
    queryClient.clear();
    router.push("/login");
  };
}
