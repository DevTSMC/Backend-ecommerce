const User = require('../../src/usuarios/login')

const makeSUT = () => {
  const sut = new User('email_valido@email.com', 'correta@senha')
  return {
    sut
  }
}

describe('Login', () => {
  test('deve retornar 401 se email nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        senha: 'correta@senha'
      }
    }
    const httpResponse = await sut.login(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 401 se senha nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        email: 'email_valido@email.com'
      }
    }
    const httpResponse = await sut.login(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 401 se email for invalido', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        email: 'email_invalido@email.com',
        senha: 'correta@senha'
      }
    }
    const httpResponse = await sut.login(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 401 se a senha for invalida', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        email: 'email_valido@email.com',
        senha: 'invalida@senha'
      }
    }
    const httpResponse = await sut.login(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 200 se as crecdenciais forem validas', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: {
        email: 'email_valido@email.com',
        senha: 'correta@senha'
      }
    }
    const httpResponse = await sut.login(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })
})
