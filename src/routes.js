const routes = require('express').Router()
const SessionController = require('./controllers/SessionController.js')

routes.post('/login', SessionController.login)

routes.post('/register', SessionController.cadastrar)

module.exports = routes
