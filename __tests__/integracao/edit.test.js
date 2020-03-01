const request = require('supertest')
const truncate = require('../../src/utils/truncate')
const app = require('../../src/app')
const { User } = require('../../src/models')

const makeSUT = async () => {
  class CreateUser {
    async create () {
      const user = await User.create({ email: 'email_valido@email.com', senha: 'senha_valida', name: 'nomevalido' })
      return user
    }
  }
  const user = await new CreateUser()
  await user.create()
}

describe('Edit', () => {
  beforeEach(async () => {
    await truncate()
  })
  test('deve retornar 401 se email nao for passado', async () => {
    const response = await request(app)
      .post('/edit')
      .send({
        senha: 'senha_valida',
        nome: 'nomevalido',
        id: '1'
      })
    expect(response.status).toBe(401)
  })
  test('deve retornar 401 se senha nao for passada', async () => {
    const response = await request(app)
      .post('/edit')
      .send({
        email: 'email_valido@email.com',
        nome: 'nomevalido',
        id: '1'
      })
    expect(response.status).toBe(401)
  })
  test('deve retornar 401 se id nao for passada', async () => {
    const response = await request(app)
      .post('/edit')
      .send({
        email: 'email_valido@email.com',
        nome: 'nomevalido',
        senha: 'senha_valida'
      })
    expect(response.status).toBe(401)
  })

  test('deve retornar 401 se a senha estiver incorreta', async () => {
    await makeSUT()
    const response = await request(app)
      .post('/edit')
      .send({
        email: 'email_valido@email.com',
        nome: 'nomevalido',
        senha: '87878787878787',
        id: '1'
      })
    expect(response.status).toBe(401)
  })

  test('deve retornar 401 se id estiver incorreto', async () => {
    await makeSUT()
    const response = await request(app)
      .post('/edit')
      .send({
        email: 'email_valido@email.com',
        nome: 'nomevalido',
        senha: 'senha_valida',
        id: '115615156156151610'
      })
    expect(response.status).toBe(401)
  })

  test('deve retornar 200 se as edicoes foram feitas', async () => {
    await makeSUT()
    const response = await request(app)
      .post('/edit')
      .send({
        email: 'email_valido@email.com',
        senha: 'senha_valida',
        nome: 'nomevalido',
        id: '1'
      })
    expect(response.status).toBe(200)
  })
})
