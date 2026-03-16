import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-center gap-6 bg-gray-200 p-4">
      <Link href="/" className="font-medium hover:underline">Tela inicial</Link>
      <Link href="/pages/disciplines" className="font-medium hover:underline">Disciplinas</Link>
      <Link href="/pages/dashboard" className="font-medium hover:underline">Painel</Link>
      <Link href="/pages/login" className="font-medium hover:underline text-right">Entrar</Link>
    </nav>
  );
}