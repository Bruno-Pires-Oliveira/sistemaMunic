const Licitacao = require("../src/Licitacao.js");

describe("Classe Licitacao", () => {
  let licitacao;
  beforeEach(() => {
    licitacao = new Licitacao(20, "Correiros CSA", 124506, "09/2026");
  });

  describe("Estrutura da classe", () => {
    test("Deve criar a instância Licitacao", () => {
      expect(licitacao).toBeInstanceOf(Licitacao);
    });
    test("Deve possuir a propriedade numeroAta", () => {
      expect(licitacao).toHaveProperty("numeroAta");
    });
    test("Deve possuir a propriedade fornecedor", () => {
      expect(licitacao).toHaveProperty("fornecedor");
    });
    test("Deve possuir a propriedade valorAta", () => {
      expect(licitacao).toHaveProperty("valorAta");
    });
    test("Deve possuir a propriedade dataVigencia", () => {
      expect(licitacao).toHaveProperty("dataVigencia");
    });
    test("Deve possuir os métodos: cadastroLicitacao, buscarLicitacaoPorNum e atualizarLicitacao", () => {
      expect(typeof licitacao.cadastroLicitacao).toBe("function");
      expect(typeof licitacao.buscarLicitacaoPorNum).toBe("function");
      expect(typeof licitacao.atualizarLicitacao).toBe("function");
    });
  });
  describe("Estado inicial", () =>{
    
  })
});
