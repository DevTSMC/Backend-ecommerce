const routes = require('express').Router()
const LoginController = require('./controllers/LoginController')
const DeleteController = require('./controllers/DeleteController')

routes.post('/login', LoginController.login)
routes.post('/delete', DeleteController.delete)

module.exports = routes
