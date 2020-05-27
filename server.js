const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const fetch = require('node-fetch')
const app = express()
const port = process.env.PORT || 5000
const compression = require('compression')

app.use(compression())

//view Engines 
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Static path for non html code like pictures and CSS
app.use(express.static(path.join(__dirname + 'public')))

//Routes
require('./modules/routes/inlog')(app);
require('./modules/routes/signup')(app);
require('./modules/routes/overview')(app);

//Quiz
require('./modules/routes/quiz')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))