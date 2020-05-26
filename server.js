const express = require('express')
const router = require("./modules/routes/router")
const path = require('path')
const compression = require('compression')


const app = express()
const port = process.env.PORT || 5000

app.use(compression())

//view Engines 
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(router)

// Set Static path for non html code like pictures and CSS
app.use(express.static(path.join(__dirname + 'public')))

//Routes
require('./modules/routes/signup')(app);
require('./modules/routes/overview')(app);

//Quiz
require('./modules/routes/quiz')(app);





app.listen(port, () => console.log(`Example app listening on port ${port}!`))