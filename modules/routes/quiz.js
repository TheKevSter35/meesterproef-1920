module.exports = function (app) {
	const { review, checkLevel } = require('../score')
	app.get('/quiz-detail', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/quiz/quiz-detail',{
			user: user
		})
	})
	app.get('/quiz-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/quiz/quiz-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/quiz-result', (req, res) => {
		const answers = req.body
		const results = review(answers, 10)
		req.session.score += results.earnedPoints
		req.session.level = checkLevel(req.session.score)
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/quiz/quiz-result', {
			score: results,
			user: user
		})
	})
}
