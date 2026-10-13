const Licitacao = require('../src/Licitacao.js'); // Ajuste o caminho se necessário

describe('Testes da classe Licitacao', () => {
  let instanciaLicitacao;

  beforeEach(() => {
    instanciaLicitacao = new Licitacao();
    
    // Como 'licitacao' é uma variável global oculta no módulo, 
    // precisamos garantir que cada teste comece com um cenário limpo/controlado.
    // Para fins de teste, vamos cadastrar um item base.
    instanciaLicitacao.cadastroLicitacao(123, 'Fornecedor A', 5000, '2026-12-31');
  });

  test('Deve cadastrar uma nova licitação com sucesso', () => {
    const resultado = instanciaLicitacao.cadastroLicitacao(456, 'Fornecedor B', 10000, '2027-01-01');
    
    // Verifica se o item foi adicionado ao array retornado
    expect(resultado).toContainEqual({
      numeroAta: 456,
      fornecedor: 'Fornecedor B',
      valorAta: 10000,
      dataVigencia: '2027-01-01'
    });
  });

  test('Deve atualizar uma licitação existente', () => {
    // Atualiza a licitação 123 (que foi criada no beforeEach)
    const resultado = instanciaLicitacao.atualizarLicitacao(123, 'Fornecedor Atualizado', 7500, '2026-11-30');

    // Encontra o item atualizado no array retornado
    const itemAtualizado = resultado.find(item => item.numeroAta === 123);

    // Verifica se as propriedades foram alteradas corretamente
    expect(itemAtualizado.fornecedor).toBe('Fornecedor Atualizado');
    expect(itemAtualizado.valorAta).toBe(7500);
    expect(itemAtualizado.dataVigencia).toBe('2026-11-30');
  });

  test('Deve retornar undefined ao tentar atualizar uma licitação inexistente', () => {
    const resultado = instanciaLicitacao.atualizarLicitacao(999, 'Inexistente', 0, '2026-01-01');
    expect(resultado).toBeUndefined();
  });
});