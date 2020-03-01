const User = require('../helpers/usuarios/recuperar_helper')
class Recuperar {
  constructor (email, test) {
    this.user = new User(email, test)
  }

  async reset (httpRequest) {
    const { email } = httpRequest.body
    try {
      const { resultado, novaSenha } = await this.user.reset(email)
      if (resultado === true) {
        return { statusCode: 200, novaSenha, message: 'Senha resetada' }
      }
      return { statusCode: 401, message: 'Email nao encontrado' }
    } catch (error) {
      return { statusCode: 401, message: 'Senha invalido' }
    }
  }
}
module.exports = Recuperar
