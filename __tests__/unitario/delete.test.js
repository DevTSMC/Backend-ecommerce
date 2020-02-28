const User = require('../../src/usuarios/delete')
const makeSUT = () => {
  const sut = new User('1', true)
  return {
    sut
  }
}

describe('Delete User', () => {
  test('deve retornar 401 se userId nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {}
    }
    const httpResponse = await sut.delete(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 401 se userId for igual ou menor que 0', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        id: '0'
      }
    }
    const httpResponse = await sut.delete(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 401 se usuario for encontrado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        id: '100'
      }
    }
    const httpResponse = await sut.delete(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 200 se usuario for deletado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        id: '1'
      }
    }
    const httpResponse = await sut.delete(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })
})
