"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type AuthUser = {
  id: string;
  email: string;
};

export type AuthDTO = {
  token: string;
  user: AuthUser;
};

type AuthState = {
  user: AuthUser | null;
  token: string | null;
};

type AuthContextType = AuthState & {
  isLoading: boolean;
  login: (data: AuthDTO) => void;
  logout: () => void;
};

const INITIAL_STATE: AuthState = { user: null, token: null };
const STORAGE_KEY = "auth";

const AuthContext = createContext<AuthContextType | null>(null);

function persist(state: AuthState) {
  if (typeof window === "undefined") return;
  if (!state.token) {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return;
  }
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as AuthState;
        setAuth({
          user: parsed.user ?? null,
          token: parsed.token ?? null,
        });
      }
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  function login(data: AuthDTO) {
    const next: AuthState = { user: data.user, token: data.token };
    setAuth(next);
    persist(next);
  }

  function logout() {
    setAuth(INITIAL_STATE);
    persist(INITIAL_STATE);
  }

  return (
    <AuthContext.Provider value={{ ...auth, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve estar dentro de AuthProvider");
  return ctx;
}
