"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type AuthDTO = {
  token: string;
  user: {
    id: string;
    email: string;
    student: {
      id: number;
      name: string;
      course_id: number;
      course_name: string;
      semester: number;
    } | null;
  };
};

type AuthUser = AuthDTO["user"];

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

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("auth");
      if (saved) {
        setAuth(JSON.parse(saved));
      }
    } catch {
      sessionStorage.removeItem("auth");
    } finally {
      setIsLoading(false);
    }
  }, []);

  function login(data: AuthDTO) {
    const next = { user: data.user, token: data.token };
    setAuth(next);
    sessionStorage.setItem("auth", JSON.stringify(next));
  }

  function logout() {
    setAuth(INITIAL_STATE);
    sessionStorage.removeItem("auth");
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
