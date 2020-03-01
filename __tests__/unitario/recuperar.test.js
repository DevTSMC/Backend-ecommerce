const User = require('../../src/usuarios/recuperar')
const RegxSenha = require('../../src/utils/regex')

const makeSUT = () => {
  const sut = new User('email_valido@email.com', true)
  return {
    sut
  }
}

describe('Recuperar senha', () => {
  test('deve retornar 401 se email nao for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
      body: { }
    }
    const httpResponse = await sut.reset(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })
  test('deve retornar 200 se for gerado nova senha', async () => {
    const { sut } = makeSUT()
    const regexSenha = new RegxSenha()
    const httpRequest = {
      body: {
        email: 'email_valido@email.com'
      }
    }
    const httpResponse = await sut.reset(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    const rgx = regexSenha.isStrong(httpResponse.novaSenha)
    expect(rgx).toBe(true)
  })
})
