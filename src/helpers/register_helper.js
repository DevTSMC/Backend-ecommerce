const { User } = require('../models')

class DbManage {
  constructor (name, email, senha, test) {
    if (test === true) {
      this.name = name
      this.email = email
      this.senha = senha
      this.test = test
    }
  }

  async register (name, email, senha) {
    if (this.test === true) {
      if (this.email === email) {
        return false
      }
    } else {
      const user = await User.findOne({ where: { email } })
      if (!user) {
        const result = await User.create({ email, senha, name })
        return true
      }
      return false
    }
  }
}
module.exports = DbManage
