const routes = require('express').Router()
const SessionController = require('./controllers/SessionController.js')

routes.post('/login', SessionController.login)

module.exports = routes
