module.exports = function (app) {
	const { review, checkLevel, levelName } = require('../modules/score')
	app.get('/data-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/data/data-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/data-result', (req, res) => {
		const answers = req.body
		const results = review(answers, 100)
		req.session.score += results.earnedPoints
		req.session.level = levelName(checkLevel(req.session.score))
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level,
		}
		res.render('pages/data/data-result', {
			score: results,
			user: user
		})
	})
}
