const Gerador = require('../../src/utils/createPass')
const RegxSenha = require('../../src/utils/regex')

describe('Login', () => {
  test('deve retornar true se a nova senha for forte', async () => {
    const senha = new Gerador(10)
    const regexSenha = new RegxSenha()
    const senhaNova = senha.gerar()
    const result = regexSenha.isStrong(senhaNova)
    expect(result).toBe(true)
  })
})
