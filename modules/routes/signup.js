module.exports = function (app) {
app.get('/signup', (req, res) => {
    res.render('pages/signup')
  })

}