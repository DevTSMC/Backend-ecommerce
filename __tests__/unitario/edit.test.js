const User = require('../../src/usuarios/edit')

const makeSUT = () => {
  const sut = new User('email_valido@email.com', 'correta@senha', 'nome_valido', '1', true)
  return {
    sut
  }
}

describe('Edit', () => {
  test('deve retornar 401 se email nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        senha: 'correta@senha',
        nome: 'nome_valido',
        id: '1'
      }
    }
    const httpResponse = await sut.Edit(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('deve retornar 401 se nome nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        senha: 'correta@senha',
        email: 'email_valido@email.com',
        id: '1'
      }
    }
    const httpResponse = await sut.Edit(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('deve retornar 401 se senha nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        email: 'email_valido@email.com',
        nome: 'nome_valido',
        id: '1'
      }
    }
    const httpResponse = await sut.Edit(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('deve retornar 401 se o id nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        email: 'email_valido@email.com',
        nome: 'nome_valido',
        senha: 'correta@senha'
      }
    }
    const httpResponse = await sut.Edit(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('se a edicao de usuario ocorrer com sucesso deve-se retornar 200', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        email: 'email_valido@email.com',
        nome: 'nome_valido',
        senha: 'correta@senha',
        id: '1'
      }
    }
    const httpResponse = await sut.Edit(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })
})