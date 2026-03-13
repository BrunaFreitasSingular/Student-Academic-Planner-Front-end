import Image from "next/image";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input"

export default function LoginPage() {
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

        <h2 className="text-sm">
          Access your account
        </h2>

        <Input placeholder="Email" name="email"/>
        <Input placeholder="Password" name="password"/>

          <div className="flex items-center flex-col gap-4">
            <Button href="/" variant="small">Sign in</Button>
            <Button variant="medium" href="/">Create account</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}