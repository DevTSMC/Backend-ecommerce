const User = require('../usuarios/Edit')

class EditController {
  async Edit (req, res) {
    const { email, senha, nome, id } = req.body
    const user = new User(email, senha, nome, id, false)
    const edit = await user.Edit(req)
    return res.status(edit.statusCode).json({ message: edit.message })
  }
}
module.exports = new EditController()
