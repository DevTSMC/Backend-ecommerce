class DbManage {
  constructor (email, senha) {
    this.email = email
    this.senha = senha
  }

  async login (email, senha) {
    if (this.email === email && this.senha === senha) {
      return true
    }
    if (this.email !== email) {
      return false
    }
    if (this.senha !== senha) {
      return false
    }
  }
}
module.exports = DbManage
