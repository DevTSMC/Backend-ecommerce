const { User } = require('../../models')
const Gerador = require('../../utils/createPass')

class DbManage {
  constructor (email, test) {
    if (test === true) {
      this.email = email
      this.test = test
    }
  }

  async reset (email, senha) {
    const senhaCreate = new Gerador(10)
    const novaSenha = senhaCreate.gerar()
    let resultado = false
    if (this.test === true) {
      if (this.email === email) {
        resultado = true
        return { resultado, novaSenha }
      }
      return resultado
    } else {
      try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
          return false
        }
        user.senha = novaSenha
        const result = await user.save()
        if (result) {
          resultado = true
          return { resultado, novaSenha }
        }
        return false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
module.exports = DbManage
