 let paiol = []
 class GeneroAlimenticio{
    constructor(nomeItem,uf,qtd,valorUn){
        this.nomeItem = nomeItem
        this.uf = uf 
        this.qtd = qtd
        this.valorUn = valorUn
    }
    cadastrarGenero(nomeItem,uf,qtd,valorUn){
        let generoCad = {nomeItem,uf,qtd,valorUn}
        paiol.push(generoCad)
        return `Item ${generoCad.nomeItem} cadastrado!`
    }
    pesquisarGenero(nomeItem){
        if(!paiol.find((nome) => nome.nomeItem === nomeItem)){
            return "Item não encontrada/Não cadastrado ainda!"
        }
      return paiol.find((nome) => nome.nomeItem === nomeItem)
    }
   
}

module.exports = GeneroAlimenticio

