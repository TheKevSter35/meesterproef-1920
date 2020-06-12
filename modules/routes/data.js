module.exports = function (app) {
	
	app.get('/data-game', (req, res) => {
		const user = {
			name: req.session.name,
			score: req.session.score
		}
		res.render('pages/data/data-game', {
			queries: req.query,
			user: user

		})
	})
	app.post('/data-result', (req, res) => {
		const answers = req.body
		let totalScore = score = 0
		Object.entries(answers).map((answer) => {
			if (answer[1] === '1') {
				score += 100
			}
			totalScore = 100
		})
		const results = {
			earnedPoints: score,
			totalPoints: totalScore
		}
		const user = {
			name: req.session.name,
			score: req.session.score,
			usedTools: req.session.usedtools
		}
		req.session.score = score
		res.render('pages/data/data-result', {
			score: results,
			user: user
		})
	})
}
