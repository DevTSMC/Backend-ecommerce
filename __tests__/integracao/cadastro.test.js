const request = require('supertest')
const truncate = require('../../src/utils/truncate')
const app = require('../../src/app')
const { User } = require('../../src/models')

const makeSUT = async () => {
  class CreateUser {
    async create () {
      var forc = true
      var user = ''
      while (forc) {
        user = await User.create({ email: 'correto@email.com', senha: 'Aa123abc@@', name: 'Maria Luiza' })
        if (user) { forc = false }
      }
      return user
    }
  }
  const user = await new CreateUser()
  await user.create()
}

describe('Cadastro', () => {
  beforeEach(async () => {
    await truncate()
  })
  test('deve retornar 401 se email nao for passado', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        nome: 'Maria Luiza',
        senha: 'Aa123abc@@'
      })
    expect(response.status).toBe(401)
  })

  test('deve retornar 401 se nome nao for passado', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        email: 'correto2@email.com',
        senha: 'Aa123abc@@'
      })
    expect(response.status).toBe(401)
  })

  test('deve retornar 401 se senha nao for passado', async () => {
    const response = await request(app)
      .post('/register')
      .send({
        nome: 'Maria Luiza',
        email: 'correto2@email.com'
      })
    expect(response.status).toBe(401)
  })

  test('deve retornar 401 se email já existir', async () => {
    await makeSUT()
    const response = await request(app)
      .post('/register')
      .send({
        nome: 'Maria Luiza',
        email: 'correto@email.com',
        senha: 'Aa123abc@@'
      })
    expect(response.body.message).toEqual('Email já utilizado')
    expect(response.status).toBe(401)
  })

  test('deve retornar 200 se cadastrado com sucesso', async () => {
    await makeSUT()
    const response = await request(app)
      .post('/register')
      .send({
        nome: 'Maria Luiza',
        email: 'correto2@email.com',
        senha: 'Aa123abc@@'
      })
    expect(response.status).toBe(200)
  })
})
