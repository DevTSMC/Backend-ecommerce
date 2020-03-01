const Produto = require('../../src/produtos/getProdutos')

const makeSUT = () => {
  const sut = new Produto(true)
  return {
    sut
  }
}

describe('getProdutos', () => {
  const { sut } = makeSUT()
  test('deve retornar 200 e um json com os produtos', async () => {
    const httpRequest = {
      body: {
      }
    }
    const httpResponse = await sut.getProduto(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.id).toBe(1)
    expect(httpResponse.nome).toEqual('Cafeteira')
  })
})
