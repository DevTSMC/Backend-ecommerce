const { User } = require('../models')

class DbManage {
  constructor (id, test) {
    if (test === true) {
      this.id = id
      this.test = test
      this.test = test
    }
  }

  async ApagarUsuario (id) {
    if (this.test === true) {
      if (this.id !== id) {
        return false
      }
      return true
    } else {
      try {
        const result = await User.destroy({ where: { id } })
        if (!result) { return false }
        return true
      } catch (error) {
        console.error(error)
      }
    }
  }
}
module.exports = DbManage
