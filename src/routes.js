const routes = require('express').Router()
const LoginController = require('./controllers/LoginController')
const DeleteController = require('./controllers/DeleteController')
const RegisterController = require('./controllers/RegisterController')

routes.post('/login', LoginController.login)
routes.post('/delete', DeleteController.delete)
routes.post('/register', RegisterController.cadastrar)

module.exports = routes
