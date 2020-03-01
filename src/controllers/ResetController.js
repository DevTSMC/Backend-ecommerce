const User = require('../usuarios/recuperar')
class ResetController {
  async reset (req, res) {
    const { email } = req.body
    const user = new User(email, false)
    const login = await user.reset(req)
    return res.status(login.statusCode).json({ message: login.message })
  }
}
module.exports = new ResetController()
