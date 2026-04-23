import { LinkComponet } from "../components/Link";

export function Navbar() {
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
      <LinkComponet href="/login" variant="secondary">
        Entrar
      </LinkComponet>
    </nav>
  );
}
