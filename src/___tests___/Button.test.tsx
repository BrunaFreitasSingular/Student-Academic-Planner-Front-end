import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../components/Button"
import { expect, test, vi } from "vitest"
import "@testing-library/jest-dom"

//teste de renderização
test("renderiza o label corretamente", () => {
  render(<Button variant="tertiary">Editar</Button>)
  const btn = screen.getByRole("button", { name: /editar/i })
  expect(btn).toBeInTheDocument()
});

// testes de interação do usuário
    //evento de clique
test("Chama onClich ao ser clicado", async ()=>{
  const handleButtonClick = vi.fn()
  render(<Button variant="secondary" onClick={handleButtonClick}>Editar Disciplina</Button>);

  const btn = screen.getByText("Editar Disciplina")
  fireEvent.click(btn)

  expect(handleButtonClick).toHaveBeenCalledTimes(1)
});

test("botão fica desabilitado quando prop disabled é passada", () => { 
  render(<Button disabled>Salvar Disciplina</Button>) 
  const btn = screen.getByText("Salvar Disciplina") 
  expect(btn).toBeDisabled() 
})