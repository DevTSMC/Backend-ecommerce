const request = require('supertest')
const truncate = require('../../src/utils/truncate')
const app = require('../../src/app')
const { Produto } = require('../../src/models')

const makeSUT = async () => {
  class CreateProduto {
    async create () {
      try {
        const produdo = await Produto.create({ nome: 'Cafeteira', preco: 10.20, imagem: 'localhost.com/testeimg.png', marca: 'tramontina', modelo: '2014', promocao: false, descricao: 'muito boa' })
        return produdo
      } catch (error) {
        console.error(error)
      }
    }
  }
  const prod = await new CreateProduto()
  await prod.create()
}

describe('getProdutos', () => {
  beforeEach(async () => {
    await truncate()
  })
  test('deve retornar 200 se tiver produtos', async () => {
    await makeSUT()
    const response = await request(app)
      .get('/getProdutos')
      .send({})
    expect(response.status).toBe(200)
  })
})
