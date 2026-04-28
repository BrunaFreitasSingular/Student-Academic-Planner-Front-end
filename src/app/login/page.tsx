"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";

import { useLogin } from "@/src/hooks/login/useLogin";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { submit, error, loading } = useLogin();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex bg-white rounded-lg shadow-lg w-800 h-200">
        <div className="w-1/2 relative">
          <Image
            src="/images/login-image.jpg"
            alt="Login"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center gap-4">
          <h2 className="text-sm">Access your account</h2>

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit(email, password)}
          />

          {error && <p className="error">{error}</p>}

          <div className="flex items-center flex-col gap-4">
            <Button
              variant="tertiary"
              onClick={() => submit(email, password)}
              disabled={loading}
            >
              {loading ? "Logging in.." : "Sign in"}
            </Button>
            <Link
              href="/register"
              className="text-sm px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium inline-flex items-center justify-center"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
