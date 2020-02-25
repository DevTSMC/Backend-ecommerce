const request = require('supertest')
const truncate = require('../../src/utils/truncate')
const app = require('../../src/app')

describe('Login', () => {
  beforeEach(async () => {
    await truncate()
  })
  test('deve retornar 200 se for cadastrado', async () => {
    const response = await request(app)
      .post('/create')
      .send({
        email: 'email_valido@email.com',
        password: '123',
        name: 'nome valido'
      })
    expect(response.status).toBe(200)
  })
})
