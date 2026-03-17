import { LinkComponet } from "../components/Link"

export function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-1 bg-gray-200 p-4">
      <LinkComponet href="/" variant="secondary">Tela inicial</LinkComponet>
      <LinkComponet href="/disciplines" variant="secondary">Disciplinas</LinkComponet>
      <LinkComponet href="/dashboard" variant="secondary">Painel</LinkComponet>
      <LinkComponet href="/login" variant="secondary">Entrar</LinkComponet>
    </nav>
  );
}
