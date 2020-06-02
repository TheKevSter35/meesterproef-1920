module.exports = function (app) {
	app.get('/quiz-detail', (req, res) => {
		res.render('pages/quiz/quiz-detail')
	})
	app.get('/quiz-game', (req, res) => {
		res.render('pages/quiz/quiz-game', {
			queries: req.query
		})
	})
	app.get('/quiz-result', (req, res) => {
		res.render('pages/quiz/quiz-result', {
			queries: req.query
		})
	})
}