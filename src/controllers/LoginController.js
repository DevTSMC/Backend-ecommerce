const User = require('../usuarios/login')
<<<<<<< HEAD:src/controllers/SessionController.js
const CreateUser = require('../usuarios/cadastro')

class SessionController {
=======
class LoginController {
>>>>>>> feature/0.7-DeleteUser:src/controllers/LoginController.js
  async login (req, res) {
    const { email, senha } = req.body
    const user = new User(email, senha, false)
    const login = await user.login(req)
    if (login.statusCode === 200) {
      return res.status(200).send()
    }
    return res.status(login.statusCode).json({ message: login.message })
  }

  async cadastrar (req, res) {
    const { nome, email, senha } = req.body
    const user = new CreateUser(nome, email, senha, false)
    const userC = await user.cadastro(req)
    return res.status(userC.statusCode).json({ message: userC.message })
  }
}
module.exports = new LoginController()
