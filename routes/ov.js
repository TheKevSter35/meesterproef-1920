module.exports = function (app) {
	const { review, checkLevel, levelName } = require('../modules/score')
	app.get('/ov-detail', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/ov/ov-detail',{
			user: user
		})
	})
	app.get('/ov-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level,
		}
		res.render('pages/ov/ov-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/ov-result', (req, res) => {
		const answers = req.body
		const results = review(answers, 25, 4)
		req.session.score += results.earnedPoints
		req.session.level = levelName(checkLevel(req.session.score))
		const user = {
			name: req.session.name,
			score: req.session.score,
			level: req.session.level
		}
		res.render('pages/ov/ov-result', {
			score: results,
			user: user
		})
	})
}
