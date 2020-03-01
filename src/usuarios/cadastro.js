const Regx = require('../utils/regex')
const RegHelp = require('../helpers/register_helper')

class Cadastro {
  constructor (nome, email, senha, test) {
    this.regHelp = new RegHelp(nome, email, senha, test)
  }

  async cadastro (request) {
    const { nome, senha, email } = request.body
    const rgx = new Regx()
    if (!email || !senha || !nome) {
      return { statusCode: 401, message: 'Existe algum(s) campo(s) null' }
    }
    if (!rgx.isEmail(email)) {
      return { statusCode: 401, message: 'email inválido' }
    }
    if (!rgx.isName(nome)) {
      return { statusCode: 401, message: 'nome inválido' }
    }
    if (!rgx.isStrong(senha)) {
      return { statusCode: 401, message: 'senha inválida' }
    }
    const resp = await this.regHelp.register(nome, email, senha)
    if (resp === false) {
      return { statusCode: 401, message: 'Email já utilizado' }
    }
    return { statusCode: 200, message: 'tudo certo' }
  }
}
module.exports = Cadastro
