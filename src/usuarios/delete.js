const User = require('../helpers/delete_helper')
class Delete {
  constructor (id, test) {
    this.user = new User(id, test)
  }

  async delete (httprequest) {
    const { id } = httprequest.body
    if (!id) {
      return { statusCode: 401, Message: 'ID null' }
    }
    if (id <= 0) {
      return { statusCode: 401, Message: 'ID invalido' }
    }
    if (await this.user.ApagarUsuario(id) === true) {
      return { statusCode: 200, Message: 'Conta deletada com Sucesso' }
    }
    return { statusCode: 401, Message: 'ID nao encontrado' }
  }
}
module.exports = Delete
