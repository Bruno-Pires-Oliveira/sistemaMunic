const GeneroAlimenticio = require("../src/GeneroAlimenticio.js")

describe('Testes da classe GeneroAlimenticio', () => {
  let instanciaGenero;

  beforeEach(() => {
    instanciaGenero = new GeneroAlimenticio();
    
    // Como 'paiol' está no escopo global do módulo original, para garantir 
    // que o array comece vazio a cada teste, vamos cadastrar um item controlado 
    // e isolar os cenários de teste abaixo.
    instanciaGenero.cadastrarGenero('Arroz', 'PR', 10, 5.50);
  });

  test('Deve cadastrar um novo gênero alimentício com sucesso', () => {
    const mensagem = instanciaGenero.cadastrarGenero('Feijão', 'SP', 20, 8.00);
    
    // Verifica se a mensagem de retorno está correta
    expect(mensagem).toBe('Item Feijão cadastrado!');
  });

  test('Deve buscar um gênero alimentício existente pelo nome', () => {
    const resultado = instanciaGenero.pesquisarGenero('Arroz');

    // Verifica se o objeto retornado contém os dados corretos
    expect(resultado).toEqual({
      nomeItem: 'Arroz',
      uf: 'PR',
      qtd: 10,
      valorUn: 5.50
    });
  });

  test('Deve retornar mensagem de erro ao pesquisar um item não cadastrado', () => {
    const resultado = instanciaGenero.pesquisarGenero('Macarrão');
    
    // Verifica se retorna a string de erro esperada
    expect(resultado).toBe('Item não encontrada/Não cadastrado ainda!');
  });
  });