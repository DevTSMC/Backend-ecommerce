const User = require('../usuarios/delete')

class DeleteController {
  async delete (req, res) {
    const { id } = req.body
    const user = new User(id, false)
    const delet = await user.delete(req)
    return res.status(delet.statusCode).json({ message: delet.message })
  }
}
module.exports = new DeleteController()
