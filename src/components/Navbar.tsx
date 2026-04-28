"use client";

import { LinkComponet } from "../components/Link";
import { useAuth } from "../context/AuthContext";
import { useLogout } from "../hooks/login/useLogout";

export function Navbar() {
  const { token, isLoading } = useAuth();
  const logout = useLogout();
  const isAuthed = !!token;

  return (
    <nav className="flex items-center justify-center gap-1 bg-white border-b border-gray-200 px-6 py-3">
      <LinkComponet href="/" variant="secondary">
        Tela inicial
      </LinkComponet>
      <LinkComponet href="/subjects" variant="secondary">
        Disciplinas
      </LinkComponet>
      <LinkComponet href="/dashboard" variant="secondary">
        Painel
      </LinkComponet>
      {!isLoading &&
        (isAuthed ? (
          <button
            type="button"
            onClick={logout}
            className="text-sm text-gray-500 hover:text-gray-900 transition px-3 py-1.5 rounded-lg hover:bg-gray-50 inline-flex items-center"
          >
            Sair
          </button>
        ) : (
          <LinkComponet href="/login" variant="secondary">
            Entrar
          </LinkComponet>
        ))}
    </nav>
  );
}
