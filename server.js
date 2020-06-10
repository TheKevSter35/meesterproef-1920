const express = require('express')
const router = require('./modules/routes/router')
const path = require('path')
const compression = require('compression')
const session = require('express-session')


const app = express()
const port = process.env.PORT || 5000

app.use(compression())

//view Engines 
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(session({
	secret: 'user', // replace secret with .env later
	saveUninitialized: true,
	resave: true,
	cookie: {
		maxAge: 6 * 60 * 60 * 1000
	}
}))
app.use(router) // Routes


// Set Static path for non html code like pictures and CSS
app.use(express.static(path.join(__dirname + 'public')))

//Quiz
require('./modules/routes/quiz')(app)
require('./modules/routes/ov')(app)
require('./modules/routes/super')(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))