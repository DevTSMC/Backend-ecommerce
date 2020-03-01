const routes = require('express').Router()
const LoginController = require('./controllers/LoginController')
const DeleteController = require('./controllers/DeleteController')
const RegisterController = require('./controllers/RegisterController')
const EditController = require('./controllers/EditController')
const ResetController = require('./controllers/ResetController')

routes.post('/login', LoginController.login)
routes.post('/delete', DeleteController.delete)
routes.post('/register', RegisterController.cadastrar)
routes.post('/edit', EditController.Edit)
routes.post('/reset', ResetController.reset)

module.exports = routes
