const CreateUser = require('../usuarios/cadastro')

class RegisterController {
  async cadastrar (req, res) {
    const { nome, email, senha } = req.body
    const user = new CreateUser(nome, email, senha, false)
    const userC = await user.cadastro(req)
    return res.status(userC.statusCode).json({ message: userC.message })
  }
}
module.exports = new RegisterController()
