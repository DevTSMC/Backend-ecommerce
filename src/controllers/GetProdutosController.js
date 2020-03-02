const Produto = require('../produtos/getProdutos')
class ProdutoController {
  async get (req, res) {
    const result = new Produto(false)
    const produtos = await result.getProduto(req)
    if (result !== false) {
      return res.status(200).json({ produtos })
    }
    return res.status(500).json({ message: 'Server error' })
  }
}
module.exports = new ProdutoController()
