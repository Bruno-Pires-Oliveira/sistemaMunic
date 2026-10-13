let licitacao = [];

class Licitacao {
  constructor(numeroAta, fornecedor, valorAta, dataVigencia) {
    this.numeroAta = numeroAta;
    this.fornecedor = fornecedor;
    this.valorAta = valorAta;
    this.dataVigencia = dataVigencia;
  }
  cadastroLicitacao( numeroAta, fornecedor, valorAta, dataVigencia ) {
    licitacao.push({ numeroAta, fornecedor, valorAta, dataVigencia});
    return licitacao;
  }
  buscarLicitacaoPorNum(numeroAta) {
    return ` ${licitacao.find((numAta) => numAta.numeroAta === numeroAta)}`;
  }
  atualizarLicitacao(numeroAta,fornecedor, valorAta, dataVigencia){
    let atuali = licitacao.find((numAta) => numAta.numeroAta === numeroAta)
    if(atuali){
      atuali.fornecedor = fornecedor
      atuali.valorAta = valorAta
      atuali.dataVigencia = dataVigencia

      return licitacao
    }
  }
}

module.exports = Licitacao;
