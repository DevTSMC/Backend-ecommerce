const { User } = require('../models')

class DbManage {
  constructor (email, senha, name, id, test) {
    if (test === true) {
      this.id = id
      this.email = email
      this.senha = senha
      this.name = name
      this.test = test
    }
  }

  async Edit (email, senha, name, id) {
    if (this.test === true) {
      return true
    }
    else { 
      const user = await User.findOne({ where: { id } })
      if (!user) {
        return false
      }
      if (!(await user.checkPassword(senha))) {
        return false
      }
      user.name = name
      user.email = email
      user.senha = senha
      const result = user.save() 
      if (result) {
        return true
      }
      return false
    }
  }
}
module.exports = DbManage
