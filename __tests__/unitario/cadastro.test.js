const User = require('../../src/usuarios/cadastro')

const makeSUT = () =>{
    const sut = new User("Maria Luiza","correto@email.com", "Aa123abc@@")
    return {
      sut
    }
}

describe('Cadastro', () => {
  test('deve retornar 200 se todos os dados forem válidos', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          nome: "Jefeson Martins Delazeri",
          email: "jefesonk1@outlook.com",
          senha: "A123abc@@"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
  })
  
  test('deve retornar 401 se email não for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          nome: "Maria Luiza",
          senha: "Aa123abc@@"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('deve retornar 401 se senha não for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          nome: "Maria Luiza",
          email: "correto2@email.com"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('deve retornar 401 se nome não for passado', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          email: "correto2@email.com",
          senha: "Aa123abc@@"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('deve retornar 401 se email já existir', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          nome: "Maria Luiza",
          email: "correto@email.com",
          senha: "Aa123abc@@"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })

  test('deve retornar 401 se email for inválido', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          nome: "Maria Luiza",
          email: "llokomcap@bedfadsfaidsok.live.f",
          senha: "Aa123abc@@"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })


  test('deve retornar 401 se senha for inválida', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          nome: "Maria Luiza",
          email: "correto2@email.com",
          senha: "123"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })


  test('deve retornar 401 se nome for inválido', async () => {
    const { sut } = makeSUT()
    const httpRequest = {
        body: {
          nome: "MARIA    . SILVA",
          email: "correto2@email.com",
          senha: "Aa123abc@@"
        }
    }
    const httpResponse = await sut.cadastro(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
  })


})
