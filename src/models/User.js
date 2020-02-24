const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.senha) {
            user.password_hash = await bcrypt.hash(user.senha, 8)
          }
        }
      }
    }
  )
  User.prototype.checkPassword = function (senha) {
    return bcrypt.compare(senha, this.password_hash)
  }
  return User
}
