const Produtos = require('../helpers/produtos/getProdutos_helper')

class GetProdutos {
  constructor (test) {
    this.produtos = new Produtos(test)
  }

  async getProduto () {
    const result = await this.produtos.getProduto()
    return result
  }
}
module.exports = GetProdutos
