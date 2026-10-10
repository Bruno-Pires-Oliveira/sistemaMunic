let licitacao = [];

class Licitacao {
  constructor(numeroAta, fornecedor, valorAta, dataVigencia, generosAli = []) {
    this.numeroAta = numeroAta;
    this.fornecedor = fornecedor;
    this.valorAta = valorAta;
    this.dataVigencia = dataVigencia;
    this.generosAli = generosAli;
  }
  cadastroLicitacao( numeroAta, fornecedor, valorAta, dataVigencia ) {
    licitacao.push({ numeroAta, fornecedor, valorAta, dataVigencia});
    return licitacao;
  }
  buscarLicitacaoPorNum(numeroAta) {
    return ` ${licitacao.find((numAta) => numAta.numeroAta === numeroAta)}`;
  }
  atualizarLicitacao(){

  }
}

module.exports = Licitacao;
