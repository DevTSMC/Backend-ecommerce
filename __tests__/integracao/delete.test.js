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
  const result = await user.create()
  return { result }
}

describe('Delete User', () => {
  beforeEach(async () => {
    await truncate()
  })
  test('deve retornar 401 se id nao for passado', async () => {
    const response = await request(app)
      .post('/delete')
      .send({})
    expect(response.status).toBe(401)
  })
  test('deve retornar 401 se userId for igual ou menor que 0', async () => {
    const response = await request(app)
      .post('/delete')
      .send({
        id: '0'
      })
    expect(response.status).toBe(401)
  })
  test('deve retornar 200 se usuario for deletado', async () => {
    const { result } = await makeSUT()
    const response = await request(app)
      .post('/delete')
      .send({
        id: result.id
      })
    expect(response.status).toBe(200)
  })
  test('deve retornar 401 se usuario nao for encontrado', async () => {
    const { result } = await makeSUT()
    const response = await request(app)
      .post('/delete')
      .send({
        id: (result.id + 100)
      })
    expect(response.status).toBe(401)
  })
})
