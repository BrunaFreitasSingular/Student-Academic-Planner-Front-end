"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import { useRegister } from "@/src/hooks/login/useRegister";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);
  const { submit, error, loading } = useRegister();

  const apiError = error;
  const showError = localError ?? apiError;

  function handleSubmit() {
    setLocalError(null);
    if (!email || !password) {
      setLocalError("Preencha email e senha");
      return;
    }
    if (password.length < 6) {
      setLocalError("A senha precisa ter ao menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      setLocalError("As senhas não conferem");
      return;
    }
    submit(email, password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex bg-white rounded-lg shadow-lg w-800 h-200">
        <div className="w-1/2 relative">
          <Image
            src="/images/login-image.jpg"
            alt="Cadastro"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center gap-4">
          <h2 className="text-sm">Create your account</h2>

          <Input
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />

          {showError && <p className="error text-sm text-red-500">{showError}</p>}

          <div className="flex items-center flex-col gap-4">
            <Button
              variant="tertiary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create account"}
            </Button>
            <Link
              href="/login"
              className="text-xs text-gray-500 hover:text-gray-800 transition"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
