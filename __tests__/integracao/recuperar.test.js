const request = require('supertest')
const truncate = require('../../src/utils/truncate')
const app = require('../../src/app')
const { User } = require('../../src/models')

const makeSUT = async () => {
  class CreateUser {
    async create () {
      try {
        const user = await User.create({ email: 'email_valido@email.com', senha: 'senha_valida', name: 'nome_valido' })
        return user
      } catch (error) {
        console.error(error)
      }
    }
  }
  const user = await new CreateUser()
  await user.create()
}

describe('Recuperar Senha', () => {
  beforeEach(async () => {
    await truncate()
  })
  test('deve retornar 401 se email nao for passado', async () => {
    const response = await request(app)
      .post('/reset')
      .send({
        email: 'email_valido2@email.com'
      })
    expect(response.status).toBe(401)
  })
  test('deve retornar 200 se a senha for resetada', async () => {
    await makeSUT()
    const response = await request(app)
      .post('/reset')
      .send({
        email: 'email_valido@email.com'
      })
    expect(response.status).toBe(200)
  })
})
