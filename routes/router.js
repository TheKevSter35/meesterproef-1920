const router = require('express').Router()

// controllers
const welcome = require('./controllers/start')
const introduction = require('./controllers/introduction')
const login = require('./controllers/inlog')
const overview = require('./controllers/overview')
const addPlugin = require('./controllers/addplugin')
const dashboard = require('./controllers/dashboard')
const guest = require('./controllers/guest')
const signup = require('./controllers/signup')
const popup = require('./controllers/popup')
const message = require('./controllers/message')

router.get('/', welcome)
	.get('/intro', introduction)
	.get('/gast', guest)
	.get('/login', login.get)
	.get('/overzicht', overview.get)
	.get('/popup', popup.get)
	.get('/dashboard', dashboard.get)
	.get('/add-plugin', addPlugin)
	.get('/account-aanmaken', signup.get)
	.post('/login', login.process)
	.post('/delete-message', message.delete)

module.exports = router
