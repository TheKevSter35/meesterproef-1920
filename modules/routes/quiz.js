module.exports = function (app) {
  app.get('/quiz-detail', (req, res) => {
    res.render('pages/quiz-detail')
  })
  app.get('/quiz1', (req, res) => {
    res.render('pages/quiz/quiz1')
  })
  app.get('/quiz2', (req, res) => {
    res.render('pages/quiz/quiz2')
  })
  app.get('/quiz3', (req, res) => {
    res.render('pages/quiz/quiz3')
  })
  app.get('/quiz4', (req, res) => {
    res.render('pages/quiz/quiz4')
  })
  app.get('/quiz5', (req, res) => {
    res.render('pages/quiz/quiz5')
  })
  app.get('/quiz6', (req, res) => {
    res.render('pages/quiz/quiz6')
  })
  app.get('/quiz7', (req, res) => {
    res.render('pages/quiz/quiz3')
  })
  
  
}