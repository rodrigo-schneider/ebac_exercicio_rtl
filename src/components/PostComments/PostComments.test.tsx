import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";

const mock = [
  {
    id: 1,
    comment: "Mensagem teste 1",
  },
  {
    id: 2,
    comment: "Mensagem teste 2",
  },
];

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<Post />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("deve renderizar o primeiro comentario", async () => {
    render(<Post />);
    const botao = screen.getByTestId("btn-comentario");
    const Textarea = screen.getByTestId("textArea");
    fireEvent.change(Textarea, { target: { value: mock[0].comment } });
    fireEvent.click(botao);
    expect(screen.getByText("Mensagem teste 1")).toBeInTheDocument();
  });

  test("deve renderizar segundo comentario", async () => {
    render(<Post />);
    const botao = screen.getByTestId("btn-comentario");
    const Textarea = screen.getByTestId("textArea");
    fireEvent.change(Textarea, { target: { value: mock[1].comment } });
    fireEvent.click(botao);
    expect(screen.getByText("Mensagem teste 2")).toBeInTheDocument();
  });
});
