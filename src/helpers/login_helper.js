const { User } = require('../models')

class DbManage {
  constructor (email, senha, test) {
    if (test === true) {
      this.email = email
      this.senha = senha
      this.test = test
    }
  }

  async login (email, senha) {
    if (this.test === true) {
      if (this.email === email && this.senha === senha) {
        return true
      }
      if (this.email !== email) {
        return false
      }
      if (this.senha !== senha) {
        return false
      }
    } else {
      const user = await User.findOne({ where: { email } })
      if (!user) {
        return false
      }
      if (!(await user.checkPassword(senha))) {
        return false
      }
      return true
    }
  }
}
module.exports = DbManage
