const User = require('../usuarios/login')
class LoginController {
  async login (req, res) {
    const { email, senha } = req.body
    const user = new User(email, senha, false)
    const login = await user.login(req)
    if (login.statusCode === 200) {
      return res.status(200).send()
    }
    return res.status(login.statusCode).json({ message: login.message })
  }
}
module.exports = new LoginController()
