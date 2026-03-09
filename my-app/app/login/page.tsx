import Image from "next/image";
import { ButtonLogin } from "@/components/Button.login";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="flex bg-white rounded-lg shadow-lg w-800 h-200">

        <div className="w-1/2 relative">
          <Image
            src="/login-image.jpg"
            alt="Login"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center gap-4">

          <h2 className="text-sm">
            Access your account
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="border rounded p-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded p-2"
          />

          <ButtonLogin href="/">Sign in</ButtonLogin>
          
          -- criar botao personalizado?
          <button className="text-sm text-gray-500 hover:underline">Create account</button>

        </div>
      </div>
    </div>
  );
}