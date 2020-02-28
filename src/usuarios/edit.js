const User = require('../helpers/edit_helper')
class Edit {
  constructor (email, senha, name, id, test) {
    this.user = new User(email, senha, name, id, test)
  }

  async Edit (httpRequest) {
    const { email, senha, nome, id } = httpRequest.body
    if (!email || !senha || !nome || !id) {
      return { statusCode: 401, message: 'Erro ao editar' }
    }
    if (await this.user.Edit(email, senha, nome, id)) {
      return { statusCode: 200, message: 'edicao feita com sucesso' }
    }
    return { statusCode: 401, message: 'usuario nao encontrado' }
  }
}
module.exports = Edit
