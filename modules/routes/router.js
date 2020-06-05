const router = require('express').Router()

// controllers
const welcome = require('./controllers/start')
const login = require('./controllers/inlog')
const overview = require('./controllers/overview')
const addPlugin = require('./controllers/addplugin')
const dashboard = require('./controllers/dashboard')
const guest = require('./controllers/guest')
const signup = require('./controllers/signup')

router.get('/', welcome)
	.get('/gast', guest)
	.get('/login', login.get)
	.get('/overzicht', overview.get)
	.get('/dashboard', dashboard.get)
	.get('/add-plugin', addPlugin)
	.get('/account-aanmaken', signup.get)
	.post('/login', login.process)

module.exports = router
