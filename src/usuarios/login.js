const User = require('../helpers/login_helper')
class Login {
  constructor (email, senha, test) {
    this.user = new User(email, senha, test)
  }

  async login (httpRequest) {
    const { email, senha } = httpRequest.body
    if (!email || !senha) {
      return { statusCode: 401, message: 'Email ou Senha Null' }
    }
    if (await this.user.login(email, senha) === true) {
      return { statusCode: 200 }
    }
    if (await this.user.login(email, senha) === false) {
      return { statusCode: 401, message: 'Email ou senha invalida' }
    }
  }
}
module.exports = Login
