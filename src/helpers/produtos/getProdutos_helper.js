const { Produto } = require('../../models')

class DbManage {
  constructor (test) {
    if (test === true) {
      this.test = test
    }
  }

  async getProduto (categoria) {
    if (this.test === true) {
      return {
        statusCode: 200,
        id: 1,
        nome: 'Cafeteira',
        preco: 10.20,
        imagen: 'localhost/teste.png',
        marca: 'tramontina',
        modelo: '2014',
        promocao: false,
        descricao: 'muito boa essa cafeteira'
      }
    } else {
      try {
        const produtos = await Produto.findAll({ raw: true })
        if (!produtos) {
          return false
        }
        return produtos
      } catch (error) {
        console.log(error)
      }
    }
  }
}
module.exports = DbManage
