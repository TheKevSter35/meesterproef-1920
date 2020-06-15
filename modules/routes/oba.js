module.exports = function (app) {
	const { review } = require('../score')
	app.get('/oba-detail', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/oba/oba-detail',{
			user: user
		})
	})
	app.get('/oba-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/oba/oba-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/oba-result', (req, res) => {
		const answers = req.body
		const results = review(answers, 25, 4)
		req.session.score += results.earnedPoints
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/oba/oba-result', {
			score: results,
			user: user
		})
	})
}
